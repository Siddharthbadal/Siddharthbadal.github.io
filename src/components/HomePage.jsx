import "./HomePage.css"
import ProjectsList from "./ProjectsList"

const HomePage = () => {
  return (
    <>
        <div className="container lg:mx-auto lg:w-3/4 sm:w-3/4 ">
        
        <div className="flex flex-col justify-left items-left flex-wrap mt-12 ml-12 lg:w-3/4 ">
            
            <h1 className="lg:text-4xl text-blue-600 text-3xl font-extrabold">Siddharth Badal</h1>
            
            <hr className="mb-7 w-3/4"/>
            <div className="main-text text-neutral-700">                
                <p>▪ I am a self taught developer and tech Freelancer. Mainly work with Python, JavaScript and SQL.</p>          
                <p>▪ Have completed multiple web development and data analysis projects. Also do data related tech and non technical tasks.</p>                
                <p>▪ Work with Django, Django rest Framework and SQL. Have also started to work with fastAPI and NextJS.</p> <br />
                <p>▪ What I do: <br /> 
                      <span>- Building custom web apps with django                           
                        </span> <br />
                      <span>- Building projects with React & NextJS</span> <br />
                      
                      <span>- Rest Api development </span> <br />
                      <span>- Data analysis with SQL and Python </span>  <br /> 
                      <span>- Scraping and scripting with Python </span> <br />                
                      <span>- Data related work in Excel</span>
                </p>
                
                <p >▪ This is my 
                    <a href="https://github.com/Siddharthbadal/" target="_blank" className="text-blue-600 font-semibold italic"> Github</a>.
                </p> 
                <ProjectsList />
                  <br />
                {/* <p>▪ My other skills include: <span className="italic">
                Git, Github, AWS S3, RDS, Linux, Docker, Pandas, Database developement
                </span> </p> */}
                <p>▪ Prior to freelancing, I have worked for over five years in data analysis and business operations. </p>
                
                <p> ▪ Like to travel whenever I can. Watch good movies. little bit of reading and waste time on twitter. </p>
                <p className="text-gray-600 font-bold"> ▪ Avilable. Let me know If you are looking to complete your technical or non techincal tasks.
                </p>


                
                
                <div className="contacts">
                      <p>LinkedIn - <a  href="https://www.linkedin.com/in/siddharthbadal/" target="_blank">siddharthbadal</a></p>
                      <p>Github - <a href="https://github.com/Siddharthbadal/" target="_blank">siddharthbadal</a></p>
                      <p>twitter - <a href="https://x.com/siddbadal" target="_blank">@siddbadal</a></p>
                      <p>Email - <a href="mailto:sidharth.badal@gmail.com">sidharth.badal@gmail.com</a></p>
                </div>
                <br />
            </div>       
        
        
        </div>


            

            



        
        
        
        </div>
    
    
    </>
  )
}

export default HomePage