import React from 'react';
import { imageUrlFor } from '../lib/image-url'
import { buildImageObj } from '../lib/helpers';
import Carousel from 'nuka-carousel';
import '../styles/layout.css'
import styles from './carousel.module.css';
import { Link } from 'gatsby';

const HomeCarousel = ({nodes}) => {
  // console.dir(nodes);
  return (
    <>
      <div className={styles.carousel}>
        <Carousel
          autoplay={true}
          autoplayInterval={5000}
        >
          {nodes && nodes.map(node => (
            <Link
              className={styles.carousel__link}
              to={`project/${node.link.slug.current}`}
            >
              <img
                className={styles.carousel__image}
                key={node.id}
                src={imageUrlFor(buildImageObj(node.image)).url()}
                alt={node.alt && node.alt}
              />
            </Link>
          ))}
        </Carousel>
      </div>
      <div className={styles.mobileImages}>
        {
          nodes && nodes.map(node => (
            <Link
              className={styles.carousel__link}
              to={`project/${node.link.slug.current}`}
            >
              <img
                key={node.id}
                src={imageUrlFor(buildImageObj(node.image)).url()}
                alt={node.alt && node.alt}
              />
            </Link>
          ))
        }
      </div>
    </>
  );
}

export default HomeCarousel
