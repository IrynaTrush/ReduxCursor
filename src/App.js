import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { posts, authors } from './redux/selectors';
import Post from '../src/components/post';
import { newPostHandler } from './redux/actions/home.actions'



function App() {
  const postsStore = useSelector(posts);
  const authorsStore = useSelector(authors);
  const [content, changeContent] = useState('');
  const [url, changeURL] = useState('');
  const [id, changeId] = useState(0);
  const authorData = authorsStore[id];
  const dispatch = useDispatch();
  const newPost = {
    ...authorData,
    content: content,
    image: url,
    comments: 0,
    shares: 0,
    likes: 0,
  }

  const handleContent = (e) => {
    changeContent(e.target.value);
  };

  const handleURL = (e) => {
    changeURL(e.target.value);
  }

  const handleSelect = (e) => {
    changeId(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newPostHandler(newPost));
  }

  const post = postsStore.map((item) => {
    return (
      <div key={item + Math.random()} className="post">
        <Post
      className="post"
      name={item.name}
      photo={item.photo}
      nickname={item.nickname}
      content={item.content}
      image={item.image}
    
      comments={item.comments}
      shares={item.shares}
      likes={item.likes}
      />
      </div>
    );
  });
  const author = authorsStore.map((item) => {
    return(
    <option value={item.id} key={item.id * 10}>{item.name}</option>
    )
  })
  return (
    <div className="main">
      <div className="postsWrapper">
        <div className="newPost">
          <form className="form" onSubmit={handleSubmit}>
            <input placeholder="Content of your post" className="input" onChange={handleContent} required/>
            <input placeholder="URL of image" className="input" onChange={handleURL} required title='to show your image, paste a valid URL'/>
            
            <select id="select" className="select" required onChange={handleSelect}>
              {author}
            </select>
            
            <button className="btn" type="submit">Create post</button>
          </form>
        </div>
        <div className="posts">
          {post}
        </div>
      </div>
    </div>
  );
}

export default App;
