import Menu from "./components/Menu/Menu";
import React, { useEffect } from "react";
function App() {
  useEffect(() => {
    const html = document.querySelector<HTMLHtmlElement>("html")!;
    html.classList.remove("dark");
    localStorage.removeItem("darkmode");
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", "#e2e8f0");
  });
  return (
    <div>
      <div className="bg-slate-200 min-h-screen text-slate-600 dark:bg-slate-900 dark:text-slate-400 xl:text-base sm:text-sm text-xs">
        <Menu />
      </div>
    </div>
  );
}

export default App;
