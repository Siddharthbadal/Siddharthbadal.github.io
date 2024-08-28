
const Navbar = () => {
  return (
    <nav className="bg-bgDark bg-bgOpacity border-b border-white-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          <div className="flex flex-1 items-center justify-between md:flex md:items-stretch md:justify-start ">
            
            <div className="">
              <a href="/" className="">              
                <span className="text-white text-opacity-90 lg:text-3xl font-bold ml-2 text-2xl"
                  >
                    Siddharth
                  </span>
              </a>
            </div>

            {/* <div className="md:ml-auto">
              <div className="space-x-2">
                <a
                  href="/"
                  className="text-bgDark bg-white bg-opacity-90 rounded-md px-3 py-2 font-bold sm:text-xl">
                  
                    Projects
                  </a>
              </div>
            </div> */}

          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar