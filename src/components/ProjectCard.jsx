import projects from "../data/projects.js"



export default function ProjectCard () {      

  return (
    
    <div>
      <p>▪ Projects:</p>

        {projects.map(project=>(
                <span key={project.id}>- 
                    <a  href={project.link} target="_blank"> 
                        <span className="text-md hover:bg-yellow-100 delay-500">
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

