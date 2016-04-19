import React from 'react';

const Preview = React.createClass({
	render: function() {
		return (
			<section>
				<h2>{this.props.title}</h2>
				<h4>{this.props.author.firstName} {this.props.author.lastName}</h4>
				<h4>{this.props.createdAt}</h4>
				<div>{this.props.body}</div>
			</section>
		);
	}
});

export default Preview;