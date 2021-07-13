import Icon from "./Icon"
import { useSelector, useDispatch } from "react-redux"
import { selectTheme, toggleTheme } from "../redux/reducers/theme/themeSlice"
import { IconContainer } from "./Containers"

const ThemeToggle = (props) => {
  const theme = useSelector(selectTheme)
  const dispatch = useDispatch();
  const MoonIcon = (props) => <Icon icon="moon" {...props}/>
  const SunIcon = (props) => <Icon icon="sun" {...props}/>

  const newProps = {
    // onClick: () => { dispatch(toggleTheme()) },
    ...props,
  }

  const resolveSize = (condition) => condition? 80 : 0
  
  return (
    <IconContainer className="theme-toggle" theme={theme} {...newProps}>
      <MoonIcon size={resolveSize(theme === 'dark')}/>
      <SunIcon size={resolveSize(theme === 'light')}/>
    </IconContainer>
  )
}

export default ThemeToggle