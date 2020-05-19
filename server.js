const http = require('http')
const path = require('path')
const fs = require('fs')
const express = require('express')
const {createBundleRenderer} = require('vue-server-renderer')
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')

const app = express()
app.set('port', 8001);
// 静态文件目录指向dist文件夹
app.use(express.static(path.join(__dirname, './dist')))

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template: fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8'),
  clientManifest
})

app.get('*', (req, res) => {
  const context = {
    title: 'Hello SSR',
    url: req.url
  }

  renderer.renderToString(context, (err, html) => {
    if (err) {
      if (err.code === 404) {
        res.status(404).end('404 not found')
      } else {
        res.status(500).end(err.message)
      }
    } else {
      res.end(html)
    }
  })
})

/*服务启动*/
http.createServer(app).listen(app.get('port'), function () {
  console.log('服务器动了。。。。。。')
  console.log('-------------------')
  console.log('-------------------')
  console.log('-------------------')
  console.log('service start at ' + app.get('port'));
});