import React from 'react';
import user from '../assets/Mohan-muruge.jpg';


class FormComments extends React.Component {
  render () {
    return (
      <section className="comments">
        <h2 className="comments__counter">Comments</h2>
          <article className="form-flex">
            <div>
              <img src={user} alt=''className="comments__thumbnail" />
            </div>
            <div className="form-width">
                <span className="comments__title">JOIN THE CONVERSATION
                </span> 
                  <form className="tablet-form"> 
                    <input type="text" name ="comments-form" placeholder="Add a comment" className="comments__form"/>
                    <button className="comments__button">COMMENT</button>
                </form>
            </div>
          </article>
      </section>   
     
      
    )
  }
}

export default FormComments
