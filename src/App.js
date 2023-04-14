import { useContext, useEffect, useRef } from "react";
import { themeContext } from "./providers/ThemeProvider";
import "./styles.css";

export default function App() {
  const { theme, setTheme } = useContext(themeContext);

  const appRef = useRef(null);
  const themeIndicatorRef = useRef(null);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    appRef.current.classList.remove("light-theme", "dark-theme");
    appRef.current.classList.add(`${theme}-theme`);

    themeIndicatorRef.current.classList.remove("theme-indicator-animation");
    void appRef.current.offsetWidth;
    themeIndicatorRef.current.classList.add("theme-indicator-animation");
  }, [theme]);

  return (
    <div className="App light-theme" ref={appRef}>
      <h1>
        Current theme: {theme}
        <span
          className="theme-indicator theme-indicator-animation"
          ref={themeIndicatorRef}
        >
          <span
            role="img"
            aria-label={theme === "light" ? "rainbow_emoji" : "stars_emoji"}
          >
            {theme === "light" ? "🌈" : "✨"}
          </span>
          <span
            role="img"
            aria-label={theme === "light" ? "sun_emoji" : "moon_emoji"}
          >
            {theme === "light" ? "☀️" : "🌙"}
          </span>
        </span>
      </h1>
      <p>
        Light themes have lighter backgrounds and darker font colors. Meanwhile,
        dark themes have darker backgrounds and lighter font colors. Dark themes
        prevent <strong>Eyes Strain </strong>
        and reduce device energy consumption
      </p>
      <h3>What we expect?</h3>
      <p>The button below should toggle between light and dark mode</p>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
}
