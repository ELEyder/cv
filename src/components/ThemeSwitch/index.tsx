import { useState, useEffect } from "react";

const ThemeSwitch = () => {
  
  const [isDarkMode, setTheme] = useState(false);

  const setProperty = (key : string, value : string) => {
    document.documentElement.style.setProperty(key, value);
  }

  useEffect(() => {
    if (isDarkMode) {
      setProperty("--body-color", "#121212");
      setProperty("--link-color", "white");
      setProperty("--text-color", "white");
      setProperty("--svg-color", "white");
      setProperty("--shadown", "#000000b3");
    } else {
      setProperty("--body-color", "#FAFAFA");
      setProperty("--link-color", "#5f6368");
      setProperty("--text-color", "black");
      setProperty("--svg-color", "#5f6368");
      setProperty("--shadown", "#ffffffcc");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setTheme((prev) => !prev); // Cambia el tema
  };

  return (
    <svg
      onClick={toggleTheme}
      width="30px"
      height="40px"
      viewBox="0 0 80 40"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: "pointer", padding: "10px 20px" }}
    >
      {/* Fondo del switch */}
      <rect
        x="0"
        y="0"
        width="80"
        height="40"
        rx="20"
        fill={isDarkMode ? "#212737" : "#40A1E7"}
        style={{ transition: "fill 0.3s ease" }}
      />

      {/* Círculo (Sol/Luna) */}
      <circle
        cx={isDarkMode ? "60" : "20"}
        cy="20"
        r="15"
        fill={isDarkMode ? "#D1D8E0" : "#FED330"}
        style={{ transition: "all 0.3s ease" }}
      />
    </svg>
  );
}

export default ThemeSwitch;
