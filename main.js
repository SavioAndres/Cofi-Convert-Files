const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 920,
    height: 550,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      devTools: false
    },
    icon: __dirname + '/src/img/favicon.png'
  })
  win.setMenuBarVisibility(false)
  win.loadFile('src/index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
