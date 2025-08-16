import React from 'react';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { PageContentWrapper } from '../components';
import { PageContentContainer, PageContainer } from '../components'
import { Featured } from "../components"
import { Footer } from '../components';

import {
  useWrapper,
  useFeatured,
  useContent,
} from './spring/ContentPageSpring';
import styled from 'styled-components';

let ContentPage = (props) => {
  const theme = props.theme

  const [AnimatedWrapper, headerSpring] = useWrapper(PageContentWrapper, theme);
  const [AnimatedFeatured, featuredSpring] = useFeatured(Featured);
  const [AnimatedContent, contentSpring] = useContent(ContentContainer, theme);

  return (
    <PageContainer id="page-container" theme={theme}>
      <AnimatedWrapper theme={theme} style={headerSpring}>
        <PageContentContainer theme={theme}>
          <AnimatedFeatured style={featuredSpring} featured={props.feature} />
          <AnimatedContent theme={theme} style={contentSpring}>
            {props.children}
          </AnimatedContent>
        </PageContentContainer>
      </AnimatedWrapper>
      <Footer theme={theme}/>
    </PageContainer>
  )
}

ContentPage = React.memo(ContentPage, (props, nextProps)=> {
  if(props.toggleState === 'disabled' && nextProps.toggleState === 'enabled') {
      // don't re-render/update
      return true
  }
})

export default ContentPage;

const ContentContainer = styled(Col)`
  width: 100%;
  height: fit-content;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;