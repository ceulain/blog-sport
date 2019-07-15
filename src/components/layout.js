import React from "react"
import "../styles/global.scss"
import Header from "./header"
import { Link } from "gatsby"

export default ({ children }) => (
  <div>
    <Link
      to={`/about/`}
    >
      About
    </Link>
    <Header />
    {children}
  </div>
)
