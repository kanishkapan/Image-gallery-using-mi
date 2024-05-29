import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/components/Navbar/Navbar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Search from './assets/components/Search/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MuiThemeProvider>

    <div>
      <Navbar/>

    </div>
    <div>
      <Search/>
    </div>
    </MuiThemeProvider>
  )
}

export default App
