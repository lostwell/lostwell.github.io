import React from 'react';
import { animated } from '@react-spring/web';

import { HeaderWrapper } from '../components';
import { HeaderContainer } from '../components'
import { MainHeader } from '../components'
import { Logo } from '../components';
import { Icon } from "../components"
import { themeValue } from '../components/Utils';
import {
  useHeader,
  useContainer,
  useInfo,
  useDivider,
  useThemeIcon,
} from './spring/MainPageSpring';


let MainPage = (props) => {
  const theme = props.theme

  const [AnimatedHeader, headerSpring] = useHeader(HeaderWrapper, theme);
  const [AnimatedContainer, containerSpring] = useContainer(HeaderContainer, theme);
  const [AnimatedIcon, iconSpring] = useThemeIcon(Icon);
  const [AnimatedDivider, dividerSpring] = useDivider(animated.div, theme);
  const [AnimatedInfo, infoSpring] = useInfo(animated.div);

  return (
      <AnimatedHeader theme={theme} style={headerSpring}>
        <AnimatedContainer theme={theme} style={containerSpring}>
          <AnimatedIcon style={iconSpring} icon={`${theme === 'light'? 'sun' : 'moon'}`}/>
          <AnimatedDivider className="inner-line" style={dividerSpring}>
            <MainHeader theme={theme}>Lostwell</MainHeader>
            <Logo style={{marginLeft: '20px'}}/>
          </AnimatedDivider>
          <AnimatedInfo className="inner-line" style={infoSpring}>
            <div>
              <Icon 
                icon="user" 
                size={15}
                fill={'transparent'} 
                stroke={themeValue(theme, 'fontColor')}
                {...{strokeWidth: 3}}
              /> 
              Louel Lagasca
            </div>
            <div>
              <Icon
                icon="briefcase"
                size={15}
                fill={'transparent'} 
                stroke={themeValue(theme, 'fontColor')}
                {...{strokeWidth: 2}}
              />
              Senior Front-End Developer &amp; Designer
            </div>
            <a
              rel="noreferrer"
              href="mailto:louellagasca@gmail.com"
              target="_blank"
              style={{
                color: themeValue(theme, 'mailColor'),
                fontWeight: 'bold'
              }}
            >
              <div>
                <Icon
                  icon="mail"
                  size={15}
                  fill={'transparent'} 
                  stroke={themeValue(theme, 'fontColor')}
                  {...{strokeWidth: 2}}
                />
                  louellagasca@gmail.com
              </div>
            </a>
          </AnimatedInfo>
        </AnimatedContainer>
      </AnimatedHeader>
  )
}

MainPage = React.memo(MainPage, (props, nextProps)=> {
  if(props.toggleState === 'disabled' && nextProps.toggleState === 'enabled') {
      // don't re-render/update
      return true
  }
})

export default MainPage;