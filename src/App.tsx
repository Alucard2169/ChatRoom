import ChatContainer from "./components/ChatContainer"
import InfoContainer from "./components/InfoContainer"
import Navbar from "./components/Navbar"

function App() {
  return (
    <main className="p-2 bg-MAIN_BG h-full flex gap-1">
      <Navbar/>
      <div className="grid grid-cols-4 w-full gap-1 grid-rows-2">
        <div className="col-span-3 row-span-2"><ChatContainer/></div>
        <InfoContainer/>
        <InfoContainer/>
      </div>
    </main>
  )
}

export default App
