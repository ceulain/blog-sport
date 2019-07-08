import React from "react"
import headerStyles from "./styles/header.module.scss"

const itemList = ["Accueil", "A propos", "Contact"]

const buildList = () =>
  itemList.map(item => {
    return <li className={headerStyles.li}>{item}</li>
  })
const Header = () => {
  console.log(headerStyles)

  return (
    <header className={headerStyles.header_container}>
        <nav>
          <ul className={headerStyles.ul}>{buildList()}</ul>
        </nav>
        <h1>Boost</h1>
    </header>
  )
}

export default Header
