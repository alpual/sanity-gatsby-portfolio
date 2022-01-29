import React from 'react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'
import styles from './youtube.module.css'

export default ({node}) => {
  const {url} = node
  const id = getYouTubeId(url)
  return (<>
    <YouTube
      className={styles.root}
      videoId={id}
      opts={{
        height: 'auto',
        width: '100%'
      }}
    /></>)
}
