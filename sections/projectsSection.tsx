import ProjectCard from "@/components/cards/ProjectCard";


export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-transparent h-24">
      <h1 className="text-4xl font-bold">Projects</h1>
      <div className="flex-row">
        <ProjectCard 
          image="/path/to/image.jpg"
          title="Project Title"
          icons={[<span>Icon 1</span>, <span>Icon 2</span>]}
          description="Project description goes here."
          date="2023-01-01"
        />
      </div>
    </section>
  );
}