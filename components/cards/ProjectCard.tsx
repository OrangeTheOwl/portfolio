
import React from "react";

export interface ProjectCardProps {
	image: string;
	title: string;
	icons: React.ReactNode[];
	description: string;
	date: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, icons, description, date }) => {
	return (
		<div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col w-full max-w-sm border border-gray-200">
			<img src={image} alt={title} className="w-full h-48 object-cover" />
			<div className="p-4 flex flex-col flex-1">
				<div className="flex items-center justify-between mb-2">
					<h2 className="text-xl font-semibold text-gray-800">{title}</h2>
					<span className="text-xs text-gray-500">{date}</span>
				</div>
				<div className="flex flex-row space-x-2 mb-2">
					{icons.map((icon, idx) => (
						<span key={idx} className="text-lg text-gray-600">{icon}</span>
					))}
				</div>
				<p className="text-gray-600 text-sm flex-1">{description}</p>
			</div>
		</div>
	);
};

export default ProjectCard;
