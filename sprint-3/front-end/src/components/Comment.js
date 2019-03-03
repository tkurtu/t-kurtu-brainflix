import React from 'react';

class Comment extends React.Component {
	render() {
		return (
			<section className="single-comment">
				<article className="comment-flex">
					<img className="rounded-image" src={this.props.userImg} alt=" " />
					<div className="comment-box">
						<div className="name-flex">
							<h5 className="user-name">{this.props.name}</h5>
						</div>
						<span className="span-width">{this.props.comment}</span>
					</div>
				</article>
			</section>
		);
	}
}

export default Comment;
