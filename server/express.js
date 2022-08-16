import express from "express"
import devBundle from "./devBundle"
import htmlIndex from "./templates/html-index"
// ssr
import React from "react"
import ReactDOMServer from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import MainRouter from "../client/MainRouter"

const app = express()
devBundle.compile(app)

app.use("*", (req, res) => {
  const context = {}
  try {
    const html = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <MainRouter />
      </StaticRouter>
    )

    if (context.url) {
      return res.redirect(303, context.url)
    }

    res.status(200).send(
      htmlIndex({
        markup: html,
      })
    )
  } catch (err) {
    console.error(err)
  }
})

export default app
