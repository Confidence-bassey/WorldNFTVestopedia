const projects = [
  {
    id: 1,
    name: 'Sustainable Farming Initiative',
    purpose: 'Promote eco-friendly farming practices',
    fundingGoal: 50000,
    progress: 35000,
    image: '../src/assets/images/Theta/banana plantation 1.jpeg',
  },
  {
    id: 2,
    name: 'Clean Water Access Project',
    purpose: 'Provide clean water to rural areas',
    fundingGoal: 75000,
    progress: 50000,
    image: '../src/assets/images/Theta/banana plantation 1.jpeg',
  },
  {
    id: 3,
    name: 'Renewable Energy Solutions',
    purpose: 'Develop renewable energy sources',
    fundingGoal: 100000,
    progress: 75000,
    image: '../src/assets/images/Theta/banana plantation 1.jpeg',
  },
  {
    id: 4,
    name: 'Education for All',
    purpose: 'Improve education in underprivileged communities',
    fundingGoal: 60000,
    progress: 45000,
    image: '../src/assets/images/Theta/banana plantation 1.jpeg',
  },
  {
    id: 5,
    name: 'Healthcare Improvement Program',
    purpose: 'Enhance healthcare facilities and services',
    fundingGoal: 80000,
    progress: 60000,
    image: '../src/assets/images/Theta/banana plantation 1.jpeg',
  },
];


const ProjectList = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Project Listings</h2>
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
                  <p className="card-text mb-0">
                    <strong>Progress:</strong> ${project.progress}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;

