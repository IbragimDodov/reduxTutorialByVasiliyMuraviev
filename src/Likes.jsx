import React from 'react';
import { connect } from 'react-redux';
import { likeReducer } from './redux/likeReducer';
import { incrementLikes, decrementLikes } from './redux/actions';

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
    onIncrementLikes: () => dispatch(incrementLikes()),
    onDecrementLikes: () => dispatch(decrementLikes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)