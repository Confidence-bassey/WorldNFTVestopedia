import { storage, database } from './firebase';
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { ref as dbRef, set } from "firebase/database";
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectDetails from './ProjectDetails'; 
import '../index.css'

const initialProjects = [
  {
    id: 1,
    name: 'Innovative Co-Working Hub',
    purpose: 'To provide a dynamic and collaborative workspace for freelancers, startups, and small businesses.',
    fundingGoal: 50000,
    progress: 'Secured a prime location, completed initial design plans, and partnered with local tech companies for exclusive member benefits.',
    image: '../src/assets/images/Theta/coworkinghub.jpeg',
  },
  {
    id: 2,
    name: 'RuralNet Solutions',
    purpose: 'To bring high-speed internet to underserved rural areas, enhancing connectivity and digital inclusion.',
    fundingGoal: 75000,
    progress: 'Conducted feasibility studies, established partnerships with major ISPs, and initiated pilot projects in three rural communities.',
    image: '../src/assets/images/Theta/RuralNet.jpeg',
  },
  {
    id: 3,
    name: 'EcoSnail Farms',
    purpose: 'To produce organic snail meat and eggs, catering to the growing demand for healthy and sustainable food options.',
    fundingGoal: 100000,
    progress: 'Set up initial farm infrastructure, sourced high-quality snail breeds, and established distribution channels with local markets and restaurants.',
    image: '../src/assets/images/Theta/snail farm.jpg',
  },
  {
    id: 4,
    name: 'Urban Oasis Developments',
    purpose: 'To develop eco-friendly residential and commercial properties in urban areas, promoting sustainable living.’',
    fundingGoal: 400000,
    progress: 'Completed market research, acquired land in strategic locations, and started the design phase for the first eco-friendly apartment complex.',
    image: '../src/assets/images/Theta/livingroomdecor1.webp',
  },
  {
    id: 5,
    name: 'GreenPower Innovations',
    purpose: 'To provide affordable and sustainable solar energy solutions to households and businesses.',
    fundingGoal: 200000,
    progress: 'Developed prototype solar panels, secured patents, and initiated pilot installations in select communities.',
    image: '../src/assets/images/Theta/greenpower.jpeg',
  },

  {
    id: 6,
    name: 'Green Hydroponics',
    purpose: 'To provide high-quality hydroponic systems and supplies for urban gardeners and commercial growers.',
    fundingGoal: 200000,
    progress: 'Secured a retail location, established supplier relationships, and launched an online store with educational resources for customers.',
    image: '../src/assets/images/Theta/green_hydro.jpeg',
  },

  {
    id: 7,
    name: 'Sweet Harvest Apiaries',
    purpose: 'To produce organic honey and beeswax products while promoting bee conservation and biodiversity.',
    fundingGoal: 200000,
    progress: 'Set up initial hives, trained staff in beekeeping practices, and established partnerships with local markets and health food stores.',
    image: '../src/assets/images/Theta/honeyfarm.jpeg',
  },

  {
    id: 8,
    name: 'AgriTech Advisors',
    purpose: 'To provide expert consulting services to farmers and agribusinesses, helping them optimize operations and adopt sustainable practices.',
    fundingGoal: 200000,
    progress: 'Built a team of experienced consultants, developed proprietary tools for farm management, and secured initial clients in the region.',
    image: '../src/assets/images/Theta/agritech.webp',
  },

  {
    id: 9,
    name: 'SkyFarm Innovations',
    purpose: 'To develop vertical farms in urban areas, providing fresh produce year-round with minimal environmental impact.',
    fundingGoal: 200000,
    progress: 'Completed feasibility studies, secured a pilot location, and partnered with local restaurants and grocery stores for distribution.',
    image: '../src/assets/images/Theta/farm_innov.webp',
  },

  {
    id: 10,
    name: 'Green Pastures Poultry',
    purpose: 'To raise organic, free-range chickens for meat and eggs, catering to the growing demand for healthy and ethical food options.',
    fundingGoal: 20000,
    progress: 'Acquired farmland, built eco-friendly coops, and established a customer base through local farmers’ markets and online sales.',
    image: '../src/assets/images/Theta/poultry farm 1.jpeg',
  },
];

const ProjectList = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [newProject, setNewProject] = useState({
    name: '',
    purpose: '',
    fundingGoal: '',
    progress: '',
    image: null, 
  });
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(!showForm);

  // const handleChange = (e) => {
  //   const { name, value, files } = e.target;
  //   setNewProject(prevState => ({
  //     ...prevState,
  //     [name]: files ? files[0] : value
  //   }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (newProject.image) {
  //     const storageReference = storageRef(storage, `projects/${newProject.image.name}`);
  //     await uploadBytes(storageReference, newProject.image);
  //     const downloadURL = await getDownloadURL(storageReference);
  //     saveProjectToDatabase(downloadURL);
  //   } else {
  //     saveProjectToDatabase(null);
  //   }
  // };

  // const saveProjectToDatabase = (fileURL) => {
  //   const projectReference = dbRef(database, 'projects/' + new Date().getTime());
  //   set(projectReference, {
  //     name: newProject.name,
  //     purpose: newProject.purpose,
  //     fundingGoal: newProject.fundingGoal,
  //     progress: newProject.progress,
  //     fileURL: fileURL
  //   }).then(() => {
  //     console.log('Project saved successfully');
      
  //     setProjects([...projects, { ...newProject, image: fileURL }]);
      
  //     setNewProject({
  //       name: '',
  //       purpose: '',
  //       fundingGoal: '',
  //       progress: '',
  //       image: null,
  //     });
  //   }).catch((error) => {
  //     console.error('Error saving project', error);
  //   });
  // };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setNewProject(prevState => ({
      ...prevState,
      [name]: files ? files[0] : value
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newProject.name || !newProject.purpose || !newProject.fundingGoal || !newProject.progress) {
      alert('Please fill out all fields');
      return;
    }
    try {
      let downloadURL = null;
      if (newProject.image) {
        const storageReference = storageRef(storage, `projects/${newProject.image.name}`);
        await uploadBytes(storageReference, newProject.image);
        downloadURL = await getDownloadURL(storageReference);
      }
      saveProjectToDatabase(downloadURL);
    } catch (error) {
      console.error('Error uploading image', error);
    }
  };
  
  const saveProjectToDatabase = (fileURL) => {
    const newProjectData = {
      id: new Date().getTime(), 
      name: newProject.name,
      purpose: newProject.purpose,
      fundingGoal: newProject.fundingGoal,
      progress: newProject.progress,
      image: fileURL
    };
  
    const projectReference = dbRef(database, 'projects/' + newProjectData.id);
    set(projectReference, newProjectData)
      .then(() => {
        console.log('Project saved successfully');
        setProjects(prevProjects => [...prevProjects, newProjectData]);
        setNewProject({
          name: '',
          purpose: '',
          fundingGoal: '',
          progress: '',
          image: null,
        });
        setShowForm(false); 
      })
      .catch((error) => {
        console.error('Error saving project', error);
      });
  };  


  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">PROJECT LISTINGS</h2>
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={project.image} className="card-img-top" alt={project.name} />
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.purpose}</p>
                <div className="d-flex justify-content-between">
                  <p className="card-text mb-0">
                    <strong>Funding Goal:</strong> ${project.fundingGoal}
                  </p>
                  <Link to={`/projectdetails/${project.id}`} state={{ projects }} className="btn btn-success">Invest</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
        <div>
        <button className="btn btn-primary mt-0.5 mb-4" onClick={toggleForm}>
            {showForm ? 'Hide Form' : 'Add New Project'}
        </button>
        {showForm && (
            <div className="row d-flex m-3 g-2">
            <div className="form_container p-5 rounded bg-white" style={{ background: 'red' }}>
                <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Project Name</label>
                    <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={newProject.name}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="purpose" className="form-label">Purpose</label>
                    <input
                    type="text"
                    className="form-control"
                    id="purpose"
                    name="purpose"
                    value={newProject.purpose}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="fundingGoal" className="form-label">Funding Goal</label>
                    <input
                    type="number"
                    className="form-control"
                    id="fundingGoal"
                    name="fundingGoal"
                    value={newProject.fundingGoal}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="progress" className="form-label">Progress</label>
                    <input
                    type="number"
                    className="form-control"
                    id="progress"
                    name="progress"
                    value={newProject.progress}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image</label>
                    <input
                    type="file"
                    className="form-control"
                    id="image"
                    name="image"
                    onChange={handleChange}
                    required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Project</button>
                </form>
            </div>
            </div>
        )}
        <Routes>
            <Route path="/project/:id" element={<ProjectDetails projects={projects} />} />
        </Routes>
        </div>

    </div>    
  );
};

export default ProjectList;

