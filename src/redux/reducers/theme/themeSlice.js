import { DateTime } from 'luxon'

const now = DateTime.now()
const currentHour = now.hour
const isDay = (currentHour >= 6 && currentHour <= 18)

const initialTheme = isDay? "light" : "dark";


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