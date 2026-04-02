import { Route, Routes } from "react-router-dom"
import NotFound from "./Page/NotFound"
import Home from "./Page/Home"
import About from "./Page/About"
import Product from "./Page/Product"
import Contact from "./Page/Contact"
import Man from "./Page/Man"
import Woman from "./Page/Woman"
import Kids from "./Page/Kids"
import Navbar from "./components/Navber"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Routes >
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Product" element={<Product />}>
          <Route path="/Product/Man" element={<Man />}/>
          <Route path="/Product/Woman" element={<Woman />}/>
          <Route path="/Product/Kids" element={<Kids />}/>
        </Route>
        <Route path="/Contact" element={<Contact />}/>
        
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
