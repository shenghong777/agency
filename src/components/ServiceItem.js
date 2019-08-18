import React from "react"
import Fade from "react-reveal/Fade"

function ServiceItem({ src, title, pa }) {
  return (
    <Fade bottom>
      <div className="col-lg-4 my-4 col-sm-12">
        <img src={src} width="128px" />
        <h3 className="mt-4">{title}</h3>
        <p1 className="mt-4">{pa}</p1>
      </div>
    </Fade>
  )
}

export default ServiceItem
