import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  src: string;
  title: string;
  description: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ src, title, description, link }) => {
  return (
    <div className="flex flex-col items-center bg-gray-800 rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 z-[40]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="rounded-full"
        style={{ width: 'auto', height: 'auto' }} 
      />
      <h2 className="text-2xl font-semibold text-white mt-6 text-center">
        {title}
      </h2>
      <p className="text-gray-300 mt-4 text-center">{description}</p>
      {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-6 inline-block px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
        >
          See Project
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
