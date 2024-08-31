import projects from "../projects";

const Card = () => {
  console.log(projects)

  return (
    <div className="flex flex-row flex-wrap justify-center 
    items-center gap-12 "> 

    {projects.map((project)=>(
      
      
    <div className="w-full max-w-lg bg-slate-50 bg-opacity-100  rounded overflow-hidden shadow-lg">
        <img className="w-full h-64" src={project.image} alt="Sunset in the mountains"/>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{project.title}</div>
            <p className="text-gray-700 text-base">
            {project.description}
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            
        <span className="inline-block bg-gray-50 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{project.techs.toString()}</span>


        </div>
        <a href={project.link} target="_blank">
        <button
            className="w-full align-middle select-none font-sans font-bold text-center uppercase transition-all text-xl py-3 px-6 border-b-2 border-l-2 border-r-2 bg-bgDark text-white shadow-md shadow-gray-900/10 hover:shadow-lg"
            type="button">
            View
            </button>
            </a>
    </div>

))}

    </div>

      

      
  )
}

export default Card

