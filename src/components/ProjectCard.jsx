
import projects from "../data/projects.js"



export default function ProjectCard () {      
  
  return (    
    <div>     
      <p> Projects:</p>
      
        {projects.map(project=>(
                <span key={project.id}>&middot; 
                    <a  href={project.link} target="_blank"> 
                        <span className="animation-text-4 text-md hover:bg-yellow-200 md:hover:bg-yellow-200 delay-300 tracking-widest">
                            {project.title} 
                          </span>
                        </a>                                      
                    {project.description} {project.techs}                                                                      
                    <br />
                </span> 
        ))
        }              
    </div>
  ); 
}

