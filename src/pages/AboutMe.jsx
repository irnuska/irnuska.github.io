import selfPhoto from "../assets/selfPhoto.png"
function AboutMe() {
    return(
        <>
        <div className="grid-container">
            <div className="item1"><img src={selfPhoto} alt="selfie"/></div>
            <div className="item2"><p>Minusta yada yada</p></div>
            
        </div>
        </>
    )
}

export default AboutMe