import React from "react"
import headerStyles from "./styles/header.module.scss"
import { graphql, useStaticQuery, Link } from 'gatsby'

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <header className={headerStyles.header_container}>
      <nav>
        <ul className={headerStyles.ul}>
          <Link to="/">
            <li className={headerStyles.li}>{"Accueil"}</li>
          </Link>
          <Link to="/about">
            <li className={headerStyles.li}>{"A propos"}</li>
          </Link>
          <Link to="/contact">
            <li className={headerStyles.li}>{"Contact"}</li>
          </Link>
        </ul>
      </nav>
      <h1>{data.site.siteMetadata.title}</h1>
    </header>
  )
}

export default Header
