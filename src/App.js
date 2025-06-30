import Header from "./components/header"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import Navigation from "./components/navigation"
import Banner from "./components/banner"
import Profile from "./components/profile"
import Portofolio from "./components/portofolio"
import Footer from "./components/footer"
import Collab from "./components/collab"

function App() {
    useEffect(()=> {
        AOS.init()
    })
    return <div>
        <Header />
        <Navigation/>
        <Banner/>
        <Profile/>
        <Portofolio/>
        <Collab/>
        <Footer/>
    </div>
}

export default App

