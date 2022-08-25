const { app, BrowserWindow } = require('electron');
const path = require('path')

const createWindow = () => {
  const w = new BrowserWindow({
    width: 800,
    height: 600,
    // frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

 w.loadFile('index.html')
 w.setMenu(null)
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('w-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
