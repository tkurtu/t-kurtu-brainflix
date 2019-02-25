import React from 'react';
import views from '../assets/Icons/SVG/Icon-views.svg'
import likes from '../assets/Icons/SVG/Icon-likes.svg'


class Videotitle extends React.Component {
  render() {
    return (
      <section>
        
        <h1>{this.props.videoInfo.title}</h1>
        <article className="tablet-flex">
          <div className="author">
            <span className="author__video">By {this.props.videoInfo.channel}</span>
            <span className="author__date">12/18/2018</span>
          </div> 

          <div className="views-likes">
            <span><img src={views} alt=" "></img>{this.props.videoInfo.views}</span>
            <span><img src={likes} alt=" "></img>{this.props.videoInfo.likes}</span>
          </div>
        </article>

        <div>
          <p className="description">
          {this.props.videoInfo.description}
          </p>
        </div>
      </section>
    )
  }
}

export default Videotitle
