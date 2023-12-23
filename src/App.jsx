import { Route, Routes } from "react-router-dom";
import { Homepage, About, Event, Gallery } from "./components";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/event" element={<Event/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
      </Routes>
    </>
  )
}

export default App;
