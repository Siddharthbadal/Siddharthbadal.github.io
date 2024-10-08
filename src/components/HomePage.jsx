import "./HomePage.css"

const HomePage = () => {
  return (
    <>
        <div className="container lg:mx-auto lg:w-3/4 sm:w-3/4 ">
        
        <div className="flex flex-col justify-left items-left flex-wrap mt-12 ml-12 lg:w-3/4 ">
            
            <h1 className="lg:text-4xl text-blue-600 text-3xl font-extrabold">Siddharth Badal</h1>
            
            <hr className="mb-7 w-3/4"/>
            <div className="main-text text-neutral-700">                
                <p>▪ I am a Tech Freelancer. I mainly work with Python, JavaScript and SQL.</p>
                <p>▪ Have completed multiple development and data analysis projects.</p>                
                <p>▪ I work with Django and Django rest Framework and SQL. Have also started to work with fastAPI and NextJS.</p>
                <p>▪ My work includes. <br /> 
                <span>- Building custom web apps with django </span> <br />
                <span>- Rest api development </span> <br />
                <span>- Data analysis with sql </span>  <br /> 
                <span>- Scraping and scripting with python </span> <br />                
                <span>- Data related work in python and excel</span>
                </p>
                
                <p >▪ This is my 
                    <a href="https://github.com/Siddharthbadal/" target="_blank" className="text-blue-600 font-semibold italic"> Github</a>
                </p>
                <p>Few of my Projects are: 
                        <br />
                        <span>- Automated Tasks Toolkit with Django and celery</span>
                        <br />
                        <span>- RestAPI Development with Django Rest Framework</span> 
                        <br />
                        <span>- Data Analysis with mySQL and  database development</span>
                         <br />
                        <span>- Social Media Platform with study groups and management portal (Personal Project)</span>
                         <br />
                        <span>- Blog app and Job portal in ReactJS and bootstrap (Personal Project) </span>

                </p>
                <p>▪ My other skills include: <span className="italic">
                AWS S3, RDS, Linux, Docker, redis, celery, pandas, database developement
                </span> </p>
                <p>▪ Prior to freelancing, I have worked for over five years in data analysis and business operations. </p> <br />
                
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