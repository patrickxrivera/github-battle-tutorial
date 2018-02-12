import React from 'react';
import PropTypes from 'prop-types';

function PlayerPreview(props) {
  return (
    <div>
      <div className='column'>
        <img
          className="avatar"
          src={props.avatar}
          alt={`Avatar for ${props.id}`}
        />
        <h2 className='PlayerPreview__username'>@{props.username}</h2>
        {props.children}
      </div>
    </div>
  )
}

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

export default PlayerPreview;
