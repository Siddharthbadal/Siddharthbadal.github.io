
const Navbar = () => {
  return (
    <nav className="bg-bgDark bg-bgOpacity border-b border-white-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          <div className="flex flex-1 items-center justify-center md:flex md:items-stretch md:justify-start underline decoration-slate-100">
            
            <div >
              <a href="/" >              
                <span className="text-white text-opacity-90 lg:text-2xl font-bold ml-2 text-xl"
                  >
                    Siddharth
                  </span>
              </a>
            </div>

           

          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar