import React from 'react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'
import Figure from './figure'

const serializers = {
  types: {
    figure: Figure,
    youtube: ({node}) => {
      const {url} = node
      const id = getYouTubeId(url)
      return (<YouTube videoId={id} />)
    }
  }
}

export default serializers
