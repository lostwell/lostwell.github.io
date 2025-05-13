import Spinner from 'react-bootstrap/Spinner';
import styled from 'styled-components';
import { useState } from "react";
import { Gallery as GalleryComponent } from "react-grid-gallery";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { images } from "../constants/gallery";
import { InView } from "./Springs";
import { theme } from './Utils';

const Gallery = (props) => {
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index, item) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <GalleryContainer theme={props.theme}>
      <GalleryComponent
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
        margin={3}
        thumbnailImageComponent={ImageComponent}
        tagStyle={{display: 'none'}}
      />
      {!!currentImage && (
        <Lightbox
          mainSrc={currentImage.src}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.src}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.src}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
          imagePadding={100}
        />
      )}
    </GalleryContainer>
  );
};

export default Gallery;

const ImageComponent = (props) => {
  const [hasLoaded, setHasLoaded] = useState(false);

  return <ImageContainer>
    <InView className="inView">
      { !hasLoaded && <Spinner animation="border" />}
      <img alt={props.imageProps.alt} className={hasLoaded? '' : 'hidden'} {...props.imageProps} onLoad={() => setHasLoaded(true)}/>
    </InView>
  </ImageContainer>;
}

const ImageContainer = styled.div`
  &, & .inView {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hidden{
    display: none;
  }

  transition: 0.2s ease-out;

  &:hover{
    transform: scale(1.1);
  }
`;

const GalleryContainer = styled.div`
  .ReactGridGallery_tile {
    background-color: ${theme('imageFill')} !important;
    border-radius: 10px;
  }
  
  .ReactGridGallery_tile-viewport{
    border-radius: 10px;
  }
`;