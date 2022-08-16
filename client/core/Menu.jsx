import React from "react"
import { Link } from "react-router-dom"

export default function Menu() {
  return (
    <div>
      <h1>MERN DEV ENV</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/setting">Setting</Link>
      </nav>
    </div>
  )
}
