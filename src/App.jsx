import Footer from "./components/Footer"
import Hero from "./components/Hero"
import HomeCard from "./components/HomeCard"
import Navbar from "./components/Navbar"
import ProjectListings from "./components/ProjectListings"
import "./index.css"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCard />

      <ProjectListings  />
      <Footer/>
    </>
  )
}

export default App