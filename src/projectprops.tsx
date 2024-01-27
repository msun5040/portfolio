import React from 'react';

interface ProjectProps {
    title: string;
    description: string;
    imageUrl: string;
    githubUrl: string;
    isClickable: boolean;
  }

const ProjectComponent: React.FC<ProjectProps> = ({ title, description, imageUrl, githubUrl, isClickable }) => {
  const handleClick = () => {
    if (isClickable) {
      window.open(githubUrl, '_blank');
    }
  };

  return (
    <div className={`project ${!isClickable ? 'non-clickable' : ''}`} onClick={handleClick}>
      <div className="project-title">{title}</div>
      <img src={imageUrl} alt={title} />
      <div className="description-overlay">
        <div>{description}</div>
      </div>
    </div>
  );
};

export default ProjectComponent;
