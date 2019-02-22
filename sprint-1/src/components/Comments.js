import React from 'react';
import Comment from './Comment'


class Comments extends React.Component {
  render () {
    const commentList = this.props.comments.map(comment =>{
      return <Comment userImg={comment.userImg} name={comment.name} comment={comment.comment} />
    })
    
    return (
      <section className="display-comments">
        {commentList}
      </section>
    )
  }
}

export default Comments


