import ChatContainer from "./components/ChatContainer"
import InfoContainer from "./components/InfoContainer"
import Navbar from "./components/Navbar"

function App() {
  return (
    <main className="p-2 bg-MAIN_BG h-full flex gap-1">
      <Navbar/>
<<<<<<< HEAD
      <div className="grid grid-cols-4 w-full gap-1 grid-rows-2">
        <div className="col-span-3 row-span-2"><ChatContainer/></div>
=======
      <div className="grid grid-cols-3 w-full gap-1 grid-rows-2">
        <div className="col-span-2 row-span-2"><ChatContainer/></div>
>>>>>>> c5da4c7a21c06a201909e0e91b73d2fcf3ece88a
        <InfoContainer/>
        <InfoContainer/>
      </div>
    </main>
  )
}

export default App
