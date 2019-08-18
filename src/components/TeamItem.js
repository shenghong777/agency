import React from "react"
import { SocialIcon } from "react-social-icons"
import Fade from "react-reveal/Fade"

function TeamItem({ src, title , para , FB, Git}) {
  return (
    <Fade bottom>
      <div className="col-lg-4 my-4 col-sm-12">
        <img src={src} className="img-fluid rounded-circle" width="200px"  />
        <h3 className="mt-4" >{title}</h3>
        <p className="mt-4" style={{ textAlign: 'left'}}>
        {para}
        </p>
        

        <SocialIcon className="mr-4" url={"http://twitter.com/" + title} />
        <SocialIcon className="mr-4" url={"http://github.com/" + Git} />
        <SocialIcon className="mr-4" url={"http://facebook.com/" + FB} />
        <SocialIcon className="mr-4" url={"http://instagram.com/" + title} />
      </div>
    </Fade>
  )
}

export default TeamItem
