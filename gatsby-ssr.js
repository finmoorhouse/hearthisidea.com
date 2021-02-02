/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react")

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: `
  (function() {
    function setTheme(theme) {
      if (theme === 'dark') {
        document.documentElement.className = 'dark';
      } else {
        document.documentElement.className = '';
      }
      window.__theme = theme;
    };
    window.__setPreferredTheme = function(theme) {
      setTheme(theme);
      try {
        localStorage.setItem('preferred-theme', theme);
      } catch (e) {}
    };
    var preferredTheme;
    try {
      preferredTheme = localStorage.getItem('preferred-theme');
    } catch (e) {}
    window.__themeListeners = [];
    var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkQuery.addListener(function(e) {
      window.__setPreferredTheme(e.matches ? 'dark' : 'light');
      window.__themeListeners.forEach(function(listener) {
        listener();
      });
    });
    setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
  })();
  `
      }}
    />,
  ])
}
