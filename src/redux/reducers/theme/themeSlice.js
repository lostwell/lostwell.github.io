let initialTheme = "light";

const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
if (darkThemeMq.matches) {
  initialTheme = "dark";
} else {
  initialTheme = "light";
}

const themeReducer = (theme = initialTheme, action) => {
  switch(action.type) {
    case 'theme/toggleTheme': 
      return (theme === 'light')? 'dark' : 'light'
    default:
      return theme;
  }
}

export const toggleTheme = () => {
  return {
    type: 'theme/toggleTheme',
  }
}

export const selectTheme = (state) => state.theme

export default themeReducer