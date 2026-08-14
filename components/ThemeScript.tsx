// Applies the saved/preferred theme before paint to avoid a flash of the
// wrong theme. Rendered inline in the document <head>.
const themeScript = `(function () {
  try {
    var colors = { light: "#ffffff", dark: "#0d0d0f" };
    var setThemeColor = function (theme) {
      var meta = document.querySelector('meta[name="theme-color"]');
      if (meta) {
        meta.setAttribute("content", colors[theme] || colors.light);
      }
    };
    var stored = localStorage.getItem("theme");
    var theme = stored || "light";
    document.documentElement.setAttribute("data-theme", theme);
    setThemeColor(theme);
    if (typeof MutationObserver !== "undefined") {
      new MutationObserver(function () {
        setThemeColor(document.documentElement.getAttribute("data-theme") || "light");
      }).observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme"],
      });
    }
  } catch (e) {}
})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}
