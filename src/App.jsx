import { useState, useEffect,createContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage, About, Event, Gallery, Quiz } from "./components";

export const UserContext = createContext();
export const UserrContext = createContext();

const App = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])
  
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
      setTheme(theme === "dark" ? "light" : "dark")
    }
  return (
    <>
      <UserContext.Provider value={theme}>
        <UserrContext.Provider value={handleThemeSwitch}>
      <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/event" element={<Event/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/quiz" element={<Quiz/>}/>
      </Routes>
        </UserrContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default App;
