import React from 'react';
import { imageUrlFor } from '../lib/image-url'
import { buildImageObj } from '../lib/helpers';
import Carousel from 'nuka-carousel';

const HomeCarousel = ({nodes}) => {
  return (
    <Carousel
      autoplay={true}
    >
      {nodes && nodes.map(node => (
        <img
          key={node.id}
          src={imageUrlFor(buildImageObj(node.image)).url()}
          alt={node.alt && node.alt}
        />
      ))}
    </Carousel>
  );
}

export default HomeCarousel
