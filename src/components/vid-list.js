import React,{ Component } from 'react';
import VideoListItem from './vid-list-item'

class VideoList extends Component {

  render() {
    const videoItems = this.props.videos.map((video) => {
      return <VideoListItem
        onVidSelect={this.props.onVidSelect}
        key={video.etag}
        video={video}
      />
    });

    return (
      <ul className='col-md-4 list-group'>
        {videoItems}
      </ul>
    );
  }
}

export default VideoList;
