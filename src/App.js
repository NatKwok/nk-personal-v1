import "./App.css";
import { Route, Routes} from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Content from "./pages/Content";
// import Details from "./pages/Details";

function App() {
  return (
    <div className="App">
   <Routes>

   <Route path="/" element={<MainLayout />} >
   <Route index element= {<Home />} />
   {/* <Route path="/about" element={<About />} />
   <Route path="/content" element={<Content />} />
   <Route path="/contact" element={<Contact />} />
   <Route path="/details" element={<Details />} /> */}
   <Route path="*" element={<p>Invalid URL</p>} />
   </Route>

   </Routes> 
    </div>
  );
}

export default App;
