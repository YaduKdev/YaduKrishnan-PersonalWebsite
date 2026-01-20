import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Navigation from "./components/Navigation/Navigation"
import Home from "./routes/Home/Home"
import Projects from "./routes/Projects/Projects"
import Cursor from "./components/Cursor/Cursor"

const App = () => {
  return (
    <div>
      <Cursor />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
