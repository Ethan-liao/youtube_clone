import React,{ Component } from 'react';

class VideoListItem extends Component {

  render() {
    const imageUrl = this.props.video.snippet.thumbnails.default.url;
    return (
      <li className='list-group-item' onClick={()=>this.props.onVidSelect(this.props.video)}>
        <div className='video-list media'>
          <div className='media-left'>
            <img className='media-object' src={imageUrl} alt=''/>
          </div>
          <div className='media-body'>
            <div className='media-heading'>{this.props.video.snippet.title}</div>
          </div>
        </div>
      </li>
    );
  }
}

export default VideoListItem;
