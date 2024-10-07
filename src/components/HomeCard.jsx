import React from 'react'

const HomeCard = () => {
  return (
    <section className=" bg-slate-500 ">
      <div className="container-xl lg:container m-auto ">
        <div className="grid lg-grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 p-4 rounded-lg justify-center justify-self-center mx-auto">
          
          <div className="bg-slate-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl text-bgDark font-bold">Work</h2>
            <p className="mt-2 mb-4 text-bgDark">
                ✔ Build projects in Python.  <br />
                ✔ Custom web apps development with django. <br />
                ✔ Rest API with Django rest Framework <br />
                ✔ Data Processing and analysis with SQL <br />
                ✔ Database development with MySQL <br />
                ✔ Frontend with JavaScript, NextJS
            </p>
 
          </div>
          <div className="bg-slate-50  p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-bgDark">Skills</h2>
            <p className="mt-2 mb-4 text-bgDark">
              Backend with Python, Django, Django rest Framework. <br />
              Frontend with JavaScript and NextJS <br />
              Data analysis and databases with MySQL <br />              
              Git, GitHub, Docker, AWS S3, RDS <br />
              HTML, CSS, Bootstrap, Tailwind <br />
              Familiarity with NodeJS, C++

            </p>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeCard