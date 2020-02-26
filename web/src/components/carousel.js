import React from 'react';
import { imageUrlFor } from '../lib/image-url'
import { buildImageObj } from '../lib/helpers';
import Carousel from 'nuka-carousel';
import '../styles/layout.css'
import styles from './carousel.module.css';

const HomeCarousel = ({nodes}) => {
  console.dir(nodes);
  return (
    <>
      <Carousel
        className={styles.hiddenSm, styles.hiddenMd}
        autoplay={true}
        autoplayInterval={5000}
      >
        {nodes && nodes.map(node => (
          <img
            key={node.id}
            src={imageUrlFor(buildImageObj(node.image)).url()}
            alt={node.alt && node.alt}
          />
        ))}
      </Carousel>
      <div className={styles.hiddenLg, styles.hiddenXl}>
        {
          nodes && nodes.map(node => (
            <img
              key={node.id}
              src={imageUrlFor(buildImageObj(node.image)).url()}
              alt={node.alt && node.alt}
            />
          ))
        }
      </div>
    </>
  );
}

export default HomeCarousel
