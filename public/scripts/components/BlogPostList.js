import React from 'react';
import posts from './../collections/PostCollection.js';
import Preview from './Preview.js';

const BlogPostList = React.createClass({
	getInitialState: function() {
		console.log('getInitialState');
		console.log(this.state);
		return ({
			posts: posts
		});
	},
	componentDidMount: function() {
		console.log('componentDidMount');
		console.log(this.state);
		this.state.posts.on('update', () => {
			this.setState({posts: this.state.posts});
		});
		this.state.posts.fetch();
	},
	render: function() {
		console.log('render');
		console.log(this.state);
		let eachPost = this.state.posts.map((val, i, arr) => {
			return (
				<Preview
					key={i}
					title={val.get('title')}
					author={val.get('author')}
					createdAt={val.get('createdAt')}
					body={val.get('body')}
				/>
			);
		});
		return (
			<div>
				{eachPost}
			</div>

		);
	}
});

export default BlogPostList;