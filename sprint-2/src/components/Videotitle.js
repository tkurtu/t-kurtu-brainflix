import React from 'react';
import views from '../assets/Icons/SVG/Icon-views.svg'
import likes from '../assets/Icons/SVG/Icon-likes.svg'


class Videotitle extends React.Component {
  render() {
    return (
      <section>
        
        <h1>BMX Rampage: 2018 Highlights</h1>
        <article className="tablet-flex">
          <div className="author">
            <span className="author__video">By Red Cow</span>
            <span className="author__date">12/18/2018</span>
          </div>

          <div className="views-likes">
            <span><img src={views} alt=" "></img>1,001,023</span>
            <span><img src={likes} alt=" "></img>110,985</span>
          </div>
        </article>

        <div>
          <p className="description">
            On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title
          </p>
        </div>
      </section>
    )
  }
}

export default Videotitle
