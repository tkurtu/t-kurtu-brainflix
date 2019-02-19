import React from 'react';
import user from '../assets/Mohan-muruge.jpg';


class FormComments extends React.Component {
  render () {
    return (
      <section className="comments">
        <h2 className="comments__counter">3 Comments</h2>
          <article className="form-flex">
            <div>
              <img src={user} alt=''className="comments__thumbnail" />
            </div>
            <div className="form-width">
              
                <span className="comments__title">JOIN THE CONVERSATION</span> 
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


// <section className="comments">
//   <h2 className="join-convo">Join the Conversation</h2>
//     <div className="comments-wrapper">
//     <div>
//       <img src={user} alt='' className="rounded-image" />
//     </div>
//       <section>
//         <form className="form-container">
//           <div className="label-wrapper">
//             <label>NAME</label>
//             <input type="text" placeholder="Enter your name"/>
            
//             <label>COMMENT</label>
//             <input type="comment" placeholder="Add a comment"/>
//             <button type="submit">COMMENT</button>
//           </div> 
//         </form>       
//       </section> 
//     </div>
// </section>

// {/* <input className="search-box" type="text" placeholder="Enter your comment"/> */}
//                 {/* <button type="submit">COMMENT</button> */}