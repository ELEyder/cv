import { useState, useEffect } from "react";

function ThemeSwitch() {
  const [isDarkMode, setTheme] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.style.setProperty("--body-color", "#121212");
      document.documentElement.style.setProperty("--link-color", "white");
      document.documentElement.style.setProperty("--text-color", "white");
      document.documentElement.style.setProperty("--svg-color", "white");
    } else {
      document.documentElement.style.setProperty("--body-color", "#FAFAFA");
      document.documentElement.style.setProperty("--link-color", "#5f6368");
      document.documentElement.style.setProperty("--text-color", "black");
      document.documentElement.style.setProperty("--svg-color", "#5f6368");
    }
  }, [isDarkMode]); // Solo se ejecuta cuando cambia isDarkMode

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
