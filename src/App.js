import "./App.css";
import { Route, Routes} from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
// import Details from "./pages/Details";

function App() {
  return (
    <div className="App">
   <Routes>

   <Route path="/" element={<MainLayout />} >
   <Route index element= {<Home />} />
  <Route path="/education" element={<Education />} />
  <Route path="/experience" element={<Experience />} />
  <Route path="/skills" element={<Skills />} />
   {/*<Route path="/content" element={<Content />} />
   <Route path="/contact" element={<Contact />} />
   <Route path="/details" element={<Details />} /> */}
   <Route path="*" element={<p>Invalid URL</p>} />
   </Route>

   </Routes> 
    </div>
  );
}

export default App;
