import React from 'react'
import Carousel from 'nuka-carousel'
import {imageUrlFor} from '../lib/image-url'
import {buildImageObj} from '../lib/helpers'
import '../styles/layout.css'
import styles from './carousel.module.css'
import {Link} from 'gatsby'

const HomeCarousel = ({nodes}) =>
  // console.dir(nodes);
  (
    <>
      <div className={styles.carousel}>
        <Carousel
          autoplay
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
  )

export default HomeCarousel
