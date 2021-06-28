import React, { useContext } from "react";
import { ThemeContext } from '../ThemeContext/ThemeContext';

const ToggleTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === "dark" ? (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>Light Theme</button>
      ) : (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>Dark Theme</button>
      )}
    </div>
  )
};

export default ToggleTheme;