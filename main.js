// Modules to control application life and create native browser window
const {app, remote, BrowserWindow, Menu, ipcMain} = require('electron')
const path = require('path')
var mainWindow = null;

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,           
      contextIsolation: false, 
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html');
  
  var application_menu = [
    {
      label: 'Register',
      submenu: [
        {
          label: 'Employees',
          accelerator: 'CmdOrCtrl+E',
          click: () => {
            mainWindow.loadFile('view/employe/list-employe.html');
          }
        },
        {
          label: 'Vacation',
          accelerator: 'CmdOrCtrl+T',
          click: () => {            
            mainWindow.loadFile('view/vacation/list-vacation.html')
          }
        }        
      ]      
    },
    {
      label: 'Report',
      submenu: [
        {
          label: 'Vacation',
          accelerator: 'CmdOrCtrl+R',
          click: () => {
            mainWindow.loadFile('view/vacation/report-vacation.html')
          }
        }        
      ]
    }
  ];

  menu = Menu.buildFromTemplate(application_menu);
  Menu.setApplicationMenu(menu);

  // Open the DevTools.
  mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
ipcMain.on('change-view', ()=>{

  mainWindow.loadFile('./view/employe/list-employe.html');
  /*
  BrowserWindow.getAllWindows()[0].loadURL(url.format({
      pathname : path.join(__dirname, '/view/employe/list-employe.html'),
      protocol:'file',
      slashes:true
  }));
  */
});