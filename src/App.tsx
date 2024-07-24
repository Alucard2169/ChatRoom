import ChatContainer from "./components/ChatContainer"
import InfoContainer from "./components/InfoContainer"
import Navbar from "./components/Navbar"

function App() {

  return (
    <main className="p-2 bg-MAIN_BG h-full flex gap-1">
      <Navbar/>
      <div className="w-[75%]">
      <ChatContainer/>
      </div>
      <div className="w-[25%] grid grid-cols-1 grid-rows-2 gap-1">
        <InfoContainer/>
        <InfoContainer/>
      </div>
    </main>
  )
}

export default App
