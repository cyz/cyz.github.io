// Applies the saved/preferred theme before paint to avoid a flash of the
// wrong theme. Rendered inline in the document <head>.
const themeScript = `(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored || "light";
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {}
})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}
