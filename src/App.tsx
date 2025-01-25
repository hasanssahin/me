import "./App.css"
import FluidCursor from "./components/cursor/FluidCursor"
import { Navbar } from "./components/Navbar"
import { RouterConfig } from "./config/RouterConfig"
function App() {
  return (
    <div className='flex flex-col h-full'>
      <FluidCursor />
      <Navbar />
      <div className='flex-grow'>
        <RouterConfig />
      </div>
    </div>
  )
}

export default App
