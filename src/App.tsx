import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Main } from "./components/Main";
import { About } from "../src/routes/about";
import { Contact } from "./routes/contact";
import { Error } from "./routes/error";

function App() {
  return (
    <>
      <div className="font-roboto">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
