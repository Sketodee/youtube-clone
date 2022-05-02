import React from 'react'

const VideoItem = ({video, onVideoSelect}) => {
  return (
    <div onClick= {() => onVideoSelect(video)} className='item' key={video.id}>
        <img className='ui image' src={video.snippet.thumbnails.medium.url} alt="" />
        <div className='content '>
        <div className='header'>{video.snippet.title}</div>
        </div>
        </div>
  )
}

export default VideoItem;