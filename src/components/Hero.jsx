import ContactLinks from "./ContactLinks"


const Hero = () => {
  return (
    <section className="bg-slate-500 py-20 mb-0.5">
    <div
      className="max-w-7x h-[32vh] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
    >
      
      <div className="text-center ">
        <h1
          className="text-4xl font-extrabold text-bgDark text-opacity-90  sm:text-5xl md:text-6xl tracking-wider"
        >
           👋 I'm Siddharth Badal.
        </h1>
        <p className="my-2 text-xl text-white text-opacity-90">
          I'm a freelance developer. I work with Python, SQL, and JavaScript.
        <br />Available for freelancing projects. 

        </p>
        <div className="md:ml-auto flex flex-row justify-center items-center mt-7">
              
              <ContactLinks />

        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero