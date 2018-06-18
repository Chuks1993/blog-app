import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {

    componentDidMount = () => {
      this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                <Link to={`/posts/${post.id}`}>
                    <h2>{post.title}</h2>
                </Link>
                    <div>
                        {post.content}
                    </div>
                </li>
            );
        });
    }
    
    render() {
        
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateTProps(state) {
    return {posts: state.posts };
}

export default connect(mapStateTProps, { fetchPosts })(PostsIndex);