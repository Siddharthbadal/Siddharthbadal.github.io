import projects from "../projects.js"



export default function ProjectCard () {      

  return (
    
    <div>

        {projects.map(project=>(
                <span key={project.id}>- 
                    <a   href={project.link} target="_blank"> 
                        <span className="text-md">{project.title} </span>
                        </a>
                    
                    {project.description} {project.techs}
                              
                    
                    <br />
                </span> 
        ))
        }               
    </div>
  );
}

