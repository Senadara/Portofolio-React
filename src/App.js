import Header from "./components/header"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import Navigation from "./components/navigation"
import Banner from "./components/banner"
import Profile from "./components/profile"
import Education from "./components/education"
import Portofolio from "./components/portofolio"
import Footer from "./components/footer"
import Collab from "./components/collab"
import Achievement from "./components/achievement"

function App() {
  useEffect(() => {
    AOS.init()
  })
  return (
    <div>
      <Header />
      <Navigation />
      <Banner />
      <Profile />
      <Education />
      <Portofolio />
      <Achievement />
      <Collab />
      <Footer />
    </div>
  )
}

export default App
