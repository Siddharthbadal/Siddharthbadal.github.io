import { Link } from "react-feather"
import "./HomePage.css"

const HomePage = () => {
  return (
    <>
        <div className="container lg:mx-auto lg:w-3/4 sm:w-3/4 ">
        
        <div className="flex flex-col justify-left items-left flex-wrap mt-12 ml-12 lg:w-3/4 ">
            
            <h1 className="lg:text-4xl text-blue-600 text-3xl font-extrabold">Siddharth Badal</h1>
            
            <hr className="mb-7 w-3/4"/>
            <div className="main-text text-neutral-700">                
                <p>▪ I am a self taught tech Freelancer. Mainly work with Python, JavaScript and SQL.</p>
                <p>▪ Also do data related tech and non technical tasks.</p>
                <p>▪ Have completed multiple web development and data analysis projects.</p>                
                <p>▪ I work with Django, Django rest Framework and SQL. Have also started to work with fastAPI and NextJS.</p>
                <p>▪ Also spending sometime learning C++ and data structures and algorithms. [Which is hard] </p> <br />
                <p>▪ My work includes. <br /> 
                      <span>- Building custom web apps with django </span> <br />
                      <span>- Building projects with HTML, CSS and JavaScript</span> <br />
                      
                      <span>- Rest Api development </span> <br />
                      <span>- Data analysis with SQL, and Python </span>  <br /> 
                      <span>- Scraping and scripting with Python </span> <br />                
                      <span>- Data related work in python and excel</span>
                </p>
                
                <p >▪ This is my 
                    <a href="https://github.com/Siddharthbadal/" target="_blank" className="text-blue-600 font-semibold italic"> Github</a>.
                </p> <br />
                  
                <p>▪ My other skills include: <span className="italic">
                Git, Github, AWS S3, RDS, Linux, Docker, Pandas, Database developement
                </span> </p>
                <p>▪ Prior to freelancing, I have worked for over five years in data analysis and business operations. </p>

                <p className="text-gray-500 font-bold"> ▪ Avilable to work, If you are looking for someone to do your technical or non techincal work online.
                </p>

                <p> ▪ Like to travel when I can.  Watch good movies. Read random blogs or waste time on twitter. </p>

                
                
                <div className="contacts">
                      <p>LinkedIn - <a  href="https://www.linkedin.com/in/siddharthbadal/" target="_blank">siddharthbadal</a></p>
                      <p>Github - <a href="https://github.com/Siddharthbadal/" target="_blank">siddharthbadal</a></p>
                      <p>twitter - <a href="https://x.com/siddbadal" target="_blank">@siddbadal</a></p>
                      <p>Email - <a href="mailto:sidharth.badal@gmail.com">sidharth.badal@gmail.com</a></p>
                </div>
            </div>       
        
        
        </div>


            

            



        
        
        
        </div>
    
    
    </>
  )
}

export default HomePage