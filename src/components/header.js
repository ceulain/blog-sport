import React from "react"
import headerStyles from "./styles/header.module.scss"
import { graphql, useStaticQuery } from 'gatsby'
const itemList = ["Accueil", "A propos", "Contact"]

const buildList = () =>
  itemList.map(item => {
    return <li className={headerStyles.li}>{item}</li>
  })
const Header = () => {
  console.log(headerStyles)

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
        <ul className={headerStyles.ul}>{buildList()}</ul>
      </nav>
      <h1>{data.site.siteMetadata.title}</h1>
    </header>
  )
}

export default Header
