import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<div>Welcme to the  About page</div>} />
        <Route path="/contact" element={<div>Welcome to the Contact page!</div>} />
        <Route path="/Glory" element={<div>Welcome to the Glory page!</div>} />
        <Route path="/Glory" element={<div>Welcome to the Glory page!</div>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
