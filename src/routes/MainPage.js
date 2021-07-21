import { HeaderWrapper } from '../components/Wrappers';
import { HeaderContainer } from '../components/Containers'
import { MainHeader } from '../components/Headers'
import { Logo } from '../components/Icon';
const MainPage = (props)=>{
  const theme = props.theme
  return (
    <HeaderWrapper theme={theme}>
      <HeaderContainer theme={theme}>
        <div className="inner-line">
          <MainHeader theme={theme}>Lostwell</MainHeader>
          <Logo />
        </div>
        <div className="inner-line">
          Louel Lagasca <br></br> Front-End Developer &amp; Designer <br></br> louellagasca@gmail.com
        </div>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export {
  MainPage
}