import './App.css';
import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import youtube from './apis/youtube';

function App() {

  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)
   
  useEffect(() => {
    onTermSubmit("building")
  }, [])
  
  

  const onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    setVideos(response.data.items)
    setSelectedVideo(response.data.items[0])
  }

  const onVideoSelect = (video) =>  {
    setSelectedVideo(video)
  }

  return (
    <div className='ui container'>
      <SearchBar onTermSubmit={onTermSubmit} />
      <div class="ui grid">
        <div class="ui row">
          <div class="eleven wide column">
            <VideoDetail video = {selectedVideo} />
          </div>
          <div class="five wide column">
            <VideoList videos = {videos} onVideoSelect= {onVideoSelect} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
