import "./App.css"
import FluidCursor from "./components/cursor/FluidCursor"
// import BlobCursor from "./components/cursor/BlobCursor"
// import CanvasCursor from "./components/cursor/CanvasCursor"
// import FluidCursor from "./components/cursor/FluidCursor"
// import SpotlightCursor from "./components/cursor/SpotlightCursor"
import { Navbar } from "./components/Navbar"
import PageTypeIndicator from "./components/PageTypeIndicator"
import { RouterConfig } from "./config/RouterConfig"
function App() {
  return (
    <div className='flex flex-col h-full'>
      <FluidCursor />
      <Navbar />
      <div className='flex-grow'>
        <RouterConfig />
      </div>
      <PageTypeIndicator />
    </div>
  )
}

export default App
