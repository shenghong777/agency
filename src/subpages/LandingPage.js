import React from "react"
import Navbar from "../components/Navbar"
import { useStaticQuery, graphql, Link } from "gatsby"
import "../global.css"

function LandingPage() {
  const { pageDataYaml } = useStaticQuery(graphql`
    {
      pageDataYaml {
        welcomeText
        landingText
      }
    }
  `)

  const { welcomeText, landingText } = pageDataYaml

  const pageStyle = {
    backgroundImage:
      "url(https://thumbs.gfycat.com/TinyLameHerring-size_restricted.gif)",
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundPosition: "center",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    backgroundBlendMode: "multiply",
  }

  const welcomeStyle = {
    letterSpacing: "0.25em",
  }

  return (
    <section id = "home" style={pageStyle} className = "container-fluid">
      <div className="container">
        <Navbar />
        <div className="centerItems">
          <h6 style={welcomeStyle}>{welcomeText}</h6>
          <h1 style={{fontSize: "100px" , marginTop: "20px"}}>{landingText}</h1>
          <button
            style={{
              width: "200px",
              padding: "10px",
              border: "none",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              background: "#FFA800",
              borderRadius: "30px",
              textTransform: "uppercase",
              color : "white",
              fontWeight : "600",
              marginTop : "20px"
            }}
          >
            Start a Project
          </button>
        </div>
      </div>
    </section>
  )
}

export default LandingPage
