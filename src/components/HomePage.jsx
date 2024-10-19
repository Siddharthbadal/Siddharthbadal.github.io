import Contacts from "./Contacts"
import "./HomePage.css"
import ProjectsList from "./ProjectsList"

const HomePage = () => {
  return (
    <>
        <div className="container lg:mx-auto lg:w-3/4 sm:w-3/4 shadow-lg shadow-yellow-200 mb-5">
        
        <div className="flex flex-col justify-left items-left flex-wrap mt-12 ml-12 lg:w-3/4 ">
            
            <h1 className="lg:text-4xl text-blue-600 text-3xl font-extrabold mt-1">
              <span className="bg-yellow-100 rounded-lg px-2">
                Siddharth Badal
              </span>
              </h1>
            
            <hr className="mb-7 w-3/4 border"/>
            <div className="main-text text-neutral-700">                
                <p>▪ I am a self taught developer and tech Freelancer. Mainly work with Python, JavaScript and SQL.</p>                          
                <p>▪ Work with Django, Django rest Framework, JavaScript and SQL. Have also started to work with fastAPI and NextJS.</p> <br />
                <p>▪ What I do: <br /> 
                      <span>- Building custom web apps with Django. </span> <br />
                      <span>- Building projects with javaScript & NextJS</span> <br />
                      <span>- NextJS with Strapi for web developmet.</span> <br />
                      
                      <span>- Rest Api development with Django </span> <br />
                      <span>- Data analysis with SQL and Python </span>  <br /> 
                      {/* <span>- Scraping and scripting and other data realted tasks with Python </span> <br />                                       */}
                </p> 
                
                <p >▪ This is my 
                    <a href="https://github.com/Siddharthbadal/" target="_blank" className="text-blue-600 font-semibold italic"> Github</a>.
                </p> 



                <ProjectsList />
                  <br />



                <p>▪ Other skills : Git, Github, AWS S3, RDS, Linux, Docker, Pandas
                </p>
                {/* <p>▪ Prior to freelancing, I have worked for over five years in data analysis and business operations. </p> */}
                <p> ▪ Like to travel whenever I can. Watch good movies. little bit of reading and twitter. </p>
                <p className="text-gray-600 font-bold"> ▪ Avilable to work on technical and non technical projects. 
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