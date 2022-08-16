export default ({ markup }) => {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>MERN DEV ENV</title>
  </head>
  <body>
    <div id="root">${markup}</div>
    <script type="text/javascript" src="/dist/bundle.js"></script>
  </body>
</html>`
}
