import "./HomePage.css"

const HomePage = () => {
  return (
    <>
        <div className="container lg:mx-auto lg:w-3/4 sm:w-3/4 ">
        
        <div className="flex flex-col justify-left items-left flex-wrap mt-12 ml-12 lg:w-3/4 ">
            
            <h1 className="lg:text-4xl text-blue-600 text-3xl font-extrabold">Siddharth Badal</h1>
            
            <hr className="mb-7 w-3/4"/>
            <div className="main-text text-neutral-700">                
                <p>▪ I am a Tech Freelancer. I mainly work with backend, databases.</p>
                <p>▪ Have completed multiple projects online and offline.</p>                
                <p>▪ I work with Python, Django and Django rest Framework and SQL. Have also started to work with fastAPI.</p>
                <p>▪ I have worked on building custom web apps with django, rest api, data analysis case studies, scraping, scripting and other data related work .</p>
                
                <p >▪ This is my 
                    <a href="https://github.com/Siddharthbadal/" target="_blank" className="text-blue-600 font-semibold italic"> Github</a>
                </p>
                <p>Few of my Projects are: 
                        <br />
                        - Automated Tasks with Django and celery
                        <br />
                        - RestAPI Development with Django Rest Framework 
                        <br />
                        - Data Analysis with mySQL and  database development <br />
                        - Social Media Platform with study groups and management portal (Personal Project) <br />
                        - Blog app and Job portal in ReactJS and bootstrap (Personal Project) <br />

                </p>
                <p>▪ My other skills include: <span className="italic">
                AWS S3, RDS, Linux, Docker, redis, celery, pandas, database developement
                </span> </p>
                <p>▪ Prior to freelancing, I have worked for over five years in data analysis and business operations. </p> <br />
                <p>LinkedIn - <a  href="https://www.linkedin.com/in/siddharthbadal/" target="_blank">siddharthbadal</a></p>
                <p>Github - <a href="https://github.com/Siddharthbadal/" target="_blank">siddharthbadal</a></p>
                <p>twitter - <a href="https://x.com/siddbadal" target="_blank">@siddbadal</a></p>
                <p>Email - <a href="mailto:sidharth.badal@gmail.com">sidharth.badal@gmail.com</a></p>
            </div>
        
        
        
        
        
        
        </div>


            

            



        
        
        
        </div>
    
    
    </>
  )
}

export default HomePage