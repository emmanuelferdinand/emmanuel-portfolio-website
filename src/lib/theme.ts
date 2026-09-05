export const THEME_STORAGE_KEY = "theme";

export const applyStoredThemeScript = `const theme=localStorage.getItem("${THEME_STORAGE_KEY}");if(theme)document.documentElement.dataset.theme=theme;`;
