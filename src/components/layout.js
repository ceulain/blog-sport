import React from "react"
import "../styles/global.scss"
import Header from "./header"

export default ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
)
