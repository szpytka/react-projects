import React, { useState } from 'react';
import Title from '../components/Title';
import {
  AiFillSmile,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineComment,
} from 'react-icons/ai';

function LikePhotoApp() {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);
  const toggleLike = () => {
    if (!like) {
      setLike(true);
      setCount(count + 1);
    } else {
      setCount(count - 1);
      setLike(false);
    }
  };
  return (
    <div className="container text-center">
      <Title text={'Like Photo App'} />
      <Title classes={'subtitle'} text={`Likes ${count}`} />
      <div
        className="card card-dark m-auto shadow-sms"
        style={{ width: 300, cursor: 'pointer' }}
      >
        <div className="card-header fs-xl">
          <AiFillSmile className="mr-2" />
          <div>DoggyDog</div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1618265341355-d0e2d1fdf26b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          alt="img"
          style={{ height: 'fit-content' }}
          onDoubleClick={toggleLike}
        />
        <div
          className="card-footer fs-xl d-flex"
          style={{ justifyContent: 'space-between' }}
        >
          <AiOutlineComment />{' '}
          {like ? (
            <AiFillHeart className="text-danger" onClick={toggleLike} />
          ) : (
            <AiOutlineHeart onClick={toggleLike} />
          )}
        </div>
      </div>
    </div>
  );
}

export default LikePhotoApp;
