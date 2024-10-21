import Contacts from "./Contacts"
import "./HomePage.css"
import ProjectsList from "./ProjectsList"
import Work from "./Work"

const HomePage = () => {
  return (
    <>
        <div className="bg-yellow-100/50 container lg:mx-auto lg:w-3/4 sm:w-3/4 shadow-lg shadow-yellow-400 tracking-wide">
        
        <div className=" flex flex-col justify-left items-left flex-wrap  ml-14 lg:w-3/4 mb-1 ">
            
            <h1 className="  lg:text-4xl text-blue-600 text-3xl font-extrabold mt-12">
              <span className=" tracking-widest">
                <span className="fadeInUp-animation-heading ">Siddharth</span> <span className=" fadeInUp-animation-heading ">Badal</span>
              </span>
              </h1>
            
            <hr className="mx-6 mb-7 border-yellow-400"/>
            <div className="main-text text-gray-700 ml-4">                
                <p> I am a self taught developer and a Freelancer. Mainly Work with<span className="animation-text-3">Python Django FastAPI, JavaScript NextJS and SQL</span>.</p>

                <ProjectsList />
                
                <p > This is my 
                    <a href="https://github.com/Siddharthbadal/" target="_blank" className="text-blue-600 font-semibold italic"> Github</a>.
                </p> 
                <Work />
                
                  
                <p> Other skills : Git, Github, AWS S3, RDS, Linux, Docker, Pandas
                </p>
                {/* <p>▪ Prior to freelancing, I have worked for over five years in data analysis and business operations. </p> */}
                <p>  Like to travel whenever I can. Watch good movies. little bit of reading and twitter. </p>
                <p className="text-gray-600 font-bold">  Avilable to work on technical and non technical projects. 
                </p>
               

                <Contacts />

                <br />
            </div>       
        
        
        </div>


            

            



        
        
        
        </div>
    
    
    </>
  )
}

export default HomePage