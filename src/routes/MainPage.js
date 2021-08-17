import { HeaderWrapper } from '../components/Wrappers';
import { HeaderContainer } from '../components/Containers'
import { MainHeader } from '../components/Headers'
import { Logo } from '../components/Icon';
import { useSpring, animated, config } from '@react-spring/web';
import { getThemeValue, vhToPixel, vwToPixel } from '../components/utils/utils';
import { Icon } from "../components/Icon"

import { useDispatch } from 'react-redux';
import { setToggleState } from '../redux/reducers/theme/toggleStateSlice';
import React from 'react';


let MainPage = (props)=>{
  const theme = props.theme
  console.log({props})
  const dispatch = useDispatch();

  const AnimatedHeader = animated(HeaderWrapper)
  const AnimatedContainer = animated(HeaderContainer)
  const AnimatedThemeIcon = animated(Icon)

  const cardWrapper = useSpring({
    config: config.slow,
    from: {
      top: `${vhToPixel(120)}`,
      width: `150px`,
      height: `150px`,
      border: `2px solid transparent`,
      backgroundColor: `transparent`,
      borderRadius: '0%',
    },
    to: [
      {
        top: `${vhToPixel(30)}`,
        width: `150px`,
        height: `150px`,
        border: `1px solid transparent`,
        borderRadius: '100%',
      },
      {
        top: `${vhToPixel(20)}`,
        width: '541px',
        height: '270px',
        border: `2px solid ${getThemeValue(theme, 'wrapperStroke')}`,
        borderRadius: '0%',
      },
    ],
    onRest: (result, controller) =>{
      console.log({result, controller})
      controller.stop()
      dispatch(setToggleState('enabled'))
    }
  })

  const cardContainer = useSpring({
    config: config.slow,
    from: {
      width: '100%',
      height: '100%',
      border: `7px solid transparent`,
      borderRadius: '0%',
    },
    to: [
      {
        border: `6px solid ${getThemeValue(theme, 'cardStroke')}`,
        borderRadius: '100%',
      },
      {
        borderRadius: '0%',
        border: `7px solid ${getThemeValue(theme, 'cardStroke')}`,
      },
    ]
  })

  const info = useSpring({
    config: config.slow,
    from: {
      x: `${vwToPixel(0)}`,
      y: `${vwToPixel(100)}`,
      opacity: 0,
    },
    to: [
      {
        x: `${vwToPixel(-11)}`,
        y: `${vwToPixel(51)}`,
        opacity: 0.0001,
      },
      {
        x: `${vwToPixel(0)}`,
        y: `${vwToPixel(0)}`,
        opacity: 1,
      },
    ]
  })

  const divider = useSpring({
    config: config.slow,
    from: {
      x: `${vwToPixel(0)}`,
      y: `${vwToPixel(100)}`,
      opacity: 0,
      borderBottom: `0px solid ${getThemeValue(theme, 'cardFill')}`,
    },
    to: [
      {
        x: `${vwToPixel(-11)}`,
        y: `${vwToPixel(51)}`,
        opacity: 0.0001,
        borderBottom: `2px solid ${getThemeValue(theme, 'cardFill')}`,
      },
      {
        x: `${vwToPixel(0)}`,
        y: `${vwToPixel(0)}`,
        opacity: 1,
        borderBottom: `3px solid ${getThemeValue(theme, 'separatorFill')}`,
      },
    ]
  })

  const themeIcon = useSpring({
    config: config.slow,
    from: {
      width: `${vwToPixel(7)}`,
      height: `${vhToPixel(7)}`,
      position: 'absolute',
      opacity: 0,
      top: `${vhToPixel(45)}`,
      rotate: 0,
    },
    to: [
      {
        opacity: 1,
        top: `${vhToPixel(5)}`,
        rotate: 720,
      },
      {
        top: `${vhToPixel(-60)}`,
        opacity: 0,
        rotate: 0,
      },
    ]
  })

  return (
    <AnimatedHeader theme={theme} style={cardWrapper}>
      <AnimatedContainer theme={theme} style={cardContainer}>
        <AnimatedThemeIcon style={themeIcon} icon={`${theme == 'light'? 'sun' : 'moon'}`}/>
        <animated.div className="inner-line" style={divider}>
          <MainHeader theme={theme}>Lostwell</MainHeader>
          <Logo style={{marginLeft: '10px'}}/>
        </animated.div>
        <animated.div className="inner-line" style={info}>
          Louel Lagasca <br></br> Front-End Developer &amp; Designer <br></br> louellagasca@gmail.com
        </animated.div>
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

export {
  MainPage
}