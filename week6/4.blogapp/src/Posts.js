import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  // Load posts using Fetch API
  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => this.setState({ posts: data }))
      .catch((error) => {
        console.error('Error fetching posts:', error);
        this.setState({ hasError: true });
      });
  };

  // Lifecycle method
  componentDidMount() {
    this.loadPosts();
  }

  // Error boundary
  componentDidCatch(error, info) {
    alert('An error occurred in Posts component!');
    console.error(error, info);
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <h2>List of Blog Posts</h2>
        {posts.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
