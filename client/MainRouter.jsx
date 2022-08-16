import React from "react"
import { Route, Switch } from "react-router-dom"

import Menu from "./core/Menu"
import Home from "./core/Home"
import Setting from "./setting/Setting"

export default function MainRouter() {
  return (
    <div>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/setting" component={Setting} />
      </Switch>
    </div>
  )
}
