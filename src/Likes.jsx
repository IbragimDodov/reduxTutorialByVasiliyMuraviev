import React from 'react';
import { connect } from 'react-redux';
import { likeReducer } from './redux/likeReducer';

function Likes({likes, onIncrementLikes, onDecrementLikes}) {
  return (
    <div className='button-controls'>
      <button onClick={onIncrementLikes}> ❤ {likes} </button>
      <button onClick={onDecrementLikes}> Dislike </button>
    </div>
  )
}

function mapStateToProps(state) {
  const {likeReducer} = state;
  return {
    likes: likeReducer.likes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrementLikes: () => {
      console.log('click');
      const action = { type: 'INCREMENT'};
      dispatch(action);
    },
    onDecrementLikes: () => {
      console.log('click decr');
      const action = { type: 'DECREMENT'};
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)