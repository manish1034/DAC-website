import { Route, Routes } from "react-router-dom";
import { Homepage, About, Event } from "./components";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/event" element={<Event/>}/>
      </Routes>
    </>
  )
}

export default App;
