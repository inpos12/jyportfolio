import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./layout/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Router basename={import.meta.env.BASE_URL}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

// import { HashRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import Navbar from "./layout/Navbar/Navbar";
// import "./App.css";

// function App() {
//   return (
//     <>
//       <HashRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </HashRouter>
//     </>
//   );
// }

// export default App;
