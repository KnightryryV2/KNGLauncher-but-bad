// const fs = window.require('fs')
// const pathModule = window.require('path')
// const { app } = window.require('@electron/remote')
const { ipcRender } = window.require('electron')


function App() {

  function callIPC() {
    ipcRender.send("app/launch")
  }

  return (

    <div className="App">
      <h1 className="head1">KNGLauncher</h1>
      <button onClick={callIPC} className="btn">Launch Minecraft</button>
    </div>
  )
}

export default App
