import React from "react"
import TeamItem from "../components/TeamItem"
import { useStaticQuery, graphql } from "gatsby"

function Team() {
  const { allTeamYaml } = useStaticQuery(graphql`
    {
      allTeamYaml {
        edges {
          node {
            name
            img
            para
            FB
            Git
          }
        }
      }
    }
  `)
  return (
    <div id = "team" className="container-fluid" style={{ backgroundColor: "#AFECA4" }}>
      <div className="container">
        <div className="flexbox">
          <h1 className="text-center my-4">Meet Our Team </h1>
          <div className="row my-5">
            {allTeamYaml.edges.map(({ node }) => {
              return <TeamItem title={node.name} FB={node.FB} src={node.img} para={node.para} Git={node.Git}/>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
