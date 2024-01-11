

// components
import Header from "./components/Header"

// home page
import Home from "./features/home/Home"

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <Home />
    </div>
  )
}

export default App