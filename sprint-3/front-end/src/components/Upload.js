import React from 'react';
import upload from '../assets/upload-video.jpg';
import Header from './Header';
import axios from 'axios';
import { Link } from 'react-router-dom';

const newApi = `http://localhost:8080/videos`;

class Upload extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			description: ''
		};
	}

	// onSubmit = () => {
  //   window.location.replace("http://localhost:3000/");
  //   return false;
	// };

	postVid = () => {
		axios
			.post(newApi, {
				title: this.state.title,
				description: this.state.description
			})
			.then(response => {
				console.log('Uploaded!');
			});
	};

	onChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	render() {
		return (
			<div>
				<Header />
				<section className="upload-body">
					<h1 className="upload-title">Upload Video</h1>
					<div className="grey-border">
						<section className="upload-desktop">
							<div>
								<h3 className="upload-subtitle">VIDEO THUMBNAIL</h3>
								<img src={upload} className="upload-image" alt=" " />
							</div>
							<div className="form-width">
								<form className="upload-form" onSubmit={this.onSubmit}>
									<label className="upload-subtitle">TITLE YOUR VIDEO</label>
									<input
										type="text"
										placeholder="Add a title to your video"
										id="title"
										className="upload-form1"
										name="title"
										onChange={this.onChange}
									/>

									<label className="upload-subtitle">ADD A VIDEO DESCRIPTION</label>
									<input
										type="text"
										placeholder="Add a description to your video"
										id="description"
										className="upload-form2"
										name="description"
										onChange={this.onChange}
									/>
								</form>
							</div>
						</section>
					</div>
					<div className="upload-buttons">
						<button className="comments__button" onClick={this.postVid}>
							PUBLISH
						</button>
						<div>
							<Link to="/">
								<div className="comments__cancel">CANCEL</div>
							</Link>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Upload;
