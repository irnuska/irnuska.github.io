import { useState } from "react"
import Professions from "./Professions"
import CodingSkills from "./CodingSkills"
import AboutMe from "./AboutMe"
import Contact from "./Contact"



function Frontpage() {
    const [currentView, setCurrentView] = useState(Professions)
  
    return(
        <>
        <div className="main-view">
            <button onClick={()=>setCurrentView(Professions)}>Tutkinnot</button>
            <button onClick={()=>setCurrentView(CodingSkills)}>Ohjelmointikielet</button>
            <button onClick={()=>setCurrentView(AboutMe)}>Minusta</button>
            
            <div>{currentView}</div>
            
        </div>
        </>
    )
}

export default Frontpage