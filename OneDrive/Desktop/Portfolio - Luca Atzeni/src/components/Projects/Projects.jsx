import { ExternalLink, Github } from 'lucide-react';
import './Projects.scss';

const Projects = () => {
    const projects = [
        {
            title: 'Project One',
            description: 'A modern web application built with React and Node.js. Features real-time updates and a responsive design.',
            tags: ['React', 'Node.js', 'Socket.io'],
            image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=1000',
            demo: '#',
            github: '#'
        },
        {
            title: 'Project Two',
            description: 'E-commerce platform with stripe integration and custom dashboard for inventory management.',
            tags: ['Next.js', 'Stripe', 'Tailwind'],
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
            demo: '#',
            github: '#'
        },
        {
            title: 'Project Three',
            description: 'Mobile-first productivity app designed to help users manage their daily tasks efficiently.',
            tags: ['React Native', 'Firebase'],
            image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000',
            demo: '#',
            github: '#'
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-links">
                                    <a href={project.demo} target="_blank" rel="noreferrer" title="Live Demo">
                                        <ExternalLink size={24} />
                                    </a>
                                    <a href={project.github} target="_blank" rel="noreferrer" title="View Code">
                                        <Github size={24} />
                                    </a>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
