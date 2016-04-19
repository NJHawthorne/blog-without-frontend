import Backbone from 'backbone';
import PostModel from './../models/PostModel.js';

const PostCollection = Backbone.Collection.extend({
	model: PostModel,
	url: 'http://localhost:3000/api/v1/post'
});

let posts = new PostCollection();

export default posts;