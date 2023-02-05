const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
require('./database.js')
require('electron-reload')(__dirname)

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  win.loadFile('index.html');
  win.webContents.openDevTools()
};


app.whenReady().then(() => {
  createWindow();

  console.log('main.js hola');

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});