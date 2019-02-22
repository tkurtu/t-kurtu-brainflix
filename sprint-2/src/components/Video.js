import React from 'react';

class Video extends React.Component {
  render () {
    return (
      <section className="video">
        <div>
          <img src={this.props.image} alt='' className="video__thumbnail" />
        </div>
        <div className="video__description">
          <p>{this.props.title}</p>
            <p>{this.props.channel}</p>
        </div>
      </section>
    )
  }
}

export default Video