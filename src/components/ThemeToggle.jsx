
import { useSelector } from "react-redux";
import { useSpring, animated, config } from '@react-spring/web';
import classNames from 'classnames';

import Icon from "./Icon";
import { IconContainer } from "./Containers";
import { selectTheme } from "../redux/reducers/theme/themeSlice";
import { selectToggleState } from "../redux/reducers/theme/toggleStateSlice";

const ThemeToggle = (props) => {
  const { slow } = config;
  const theme = useSelector(selectTheme);
  const toggleState = useSelector(selectToggleState);
  const [styles, animate] = useSpring(()=>({
    config: { friction: 5 },
    reverse: theme === "light"? false : true,
  }));
  const MoonIcon = (props) => <Icon icon="moon" {...props}/>
  const SunIcon = (props) => <Icon icon="sun" {...props}/>

  const newProps = {
    onClick: () => {       
      if(toggleState === 'enabled'){
        animate({
          config: {...slow},
          from: { rotate: 0, scale: 0.3 },
          to: [
            { rotate: 720, scale: 1.5 },
            { rotate: 0, scale: 1 },
          ],
        })
      }
      props.onClick()
    },
    style: {...styles},
  };

  const AnimatedIcon = animated(IconContainer);
  const resolveSize = (condition) => condition? "1.5em" : "0";
  
  return (
    <AnimatedIcon
      className={classNames("theme-toggle", {disabled: toggleState === 'disabled'? true: false})}
      theme={theme}
      {...newProps}
    >
      <MoonIcon size={resolveSize(theme === 'dark')}/>
      <SunIcon size={resolveSize(theme === 'light')}/>
    </AnimatedIcon>
  );
}

export default ThemeToggle;