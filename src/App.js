import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";

function App() {
  const testimonies = [
    {
      name: "John Doe",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatibus voluptatem rerum beatae quae alias iste tempora.",
    },
    {
      name: "Ayush Kumar",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatibus voluptatem rerum beatae quae alias iste tempora.",
    },
    {
      name: "Marty",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatibus voluptatem rerum beatae quae alias iste tempora.",
    },
  ];

  return (
    <>
      <Routes>
        <Route path="/" element={<Home testimonies={testimonies} />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
