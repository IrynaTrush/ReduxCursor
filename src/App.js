import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { posts, authors } from './redux/selectors';
import Post from '../src/components/post';
import { newPostHandler } from './redux/actions/home.actions';
import './App.css';

function App() {
  const postsStore = useSelector(posts);
  const authorsStore = useSelector(authors);
  const [content, changeContent] = useState('');
  const [image, changeImage] = useState('');
  const [id, changeId] = useState(0);
  const [isDisabled, changeIsDisabled] = useState(true)
  const authorData = authorsStore[id];
  const dispatch = useDispatch();
  const reset = () => {
    changeContent('');
    changeImage('');
  }
  useEffect(() => {
    if(content !== '' && image !== '') {
      changeIsDisabled(false);
    } else {
      changeIsDisabled(true);
    }
  }, [content, image])
 
  const handleContent = (e) => {
    changeContent(e.target.value);
  };

  const handleURL = (e) => {
    changeImage(e.target.value);
  }

  const handleSelect = (e) => {
    changeId(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    reset();
    dispatch(newPostHandler({...authorData, content, image, comments: 0, shares: 0, likes: 0}));
  }

  const post = postsStore.map((item, index) => {
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
      id={index}
      />
      </div>
    );
  });
  const author = authorsStore.map((item) => {
    return (
    <option value={item.id} key={item.id * 10}>{item.name}</option>
    )
  })
  return (
    <div className="main">
      <div className="postsWrapper">
        <div className="newPost">
          <form className="form" onSubmit={handleSubmit}>
            <input placeholder="Content of your post" className="input" onChange={handleContent} value={content}/>
            <input placeholder="URL of image" className="input" onChange={handleURL} 
            title='to show your image, paste a valid URL' value={image}/>
            <select id="select" className="select" onChange={handleSelect}>
              {author}
            </select>
            <button className="btn" type="submit" disabled={isDisabled}>Create post</button>
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
