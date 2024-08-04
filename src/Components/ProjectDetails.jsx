import PropTypes from 'prop-types';
import { useParams, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { projects } = location.state;
  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <img src={project.image} className="card-img-top" alt={project.name} />
        <div className="card-body">
          <h5 className="card-title">{project.name}</h5>
          <p className="card-text">{project.purpose}</p>
          <p className="card-text">
            <strong>Funding Goal:</strong> ${project.fundingGoal}
          </p>
          <p className="card-text">
            <strong>Progress:</strong> ${project.progress}
          </p>
        </div>
      </div>
    </div>
  );
};

ProjectDetails.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      purpose: PropTypes.string.isRequired,
      fundingGoal: PropTypes.number.isRequired,
      progress: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};

export default ProjectDetails;
