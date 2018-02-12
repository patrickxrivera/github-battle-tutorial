import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import api from '../utils/api';
import { Link } from 'react-router-dom';
import PlayerPreview from './PlayerPreview';

function Profile(props) {
  const info = props.info;
  return (
    <PlayerPreview username={info.login} avatar={info.avatar_url}>
     <div className='Profile__list-items'>
       {info.name && <li>{info.name}</li>}
       {info.location && <li>{info.location}</li>}
       {info.company && <li>{info.company}</li>}
       <li>Followers: {info.followers}</li>
       <li>Following: {info.following}</li>
       <li>Public Repos: {info.public_repos}</li>
       {info.blog && <li><a href={info.blog}>{info.blog}</a></li>}
     </div>
   </PlayerPreview>
  )
}

Profile.propTypes = {
  info: PropTypes.object.isRequired
}

function Player(props) {
  return (
    <div className='column Player__column--margin-top'>
      <p className='Profile__header'>{props.label}</p>
      <h3>Score: {props.score}</h3>
      <Profile info={props.profile}/>
    </div>
  )
}

Player.propTypes = {
  label: PropTypes.string.isRequired,
  profile: PropTypes.object.isRequired,
  score: PropTypes.number.isRequired
}

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true
    }
  }

  componentDidMount() {
    const playersObj = queryString.parse(this.props.location.search);
    const playersArray = Object.values(playersObj);

    api
    .battle(playersArray)
    .then((players) => {
      if (!players) {
        return this.setState(() => {
          return {
            error: 'Make sure each username is correct',
            loading: false
          }
        });
      }

      this.setState(() => {
        return {
          winner: players[0],
          loser: players[1],
          loading: false
        }
      });
    });
  }

  render() {
    const winner = this.state.winner;
    const loser = this.state.loser;
    const error = this.state.error;
    const loading = this.state.loading;

    if (loading) { return <p>Loading</p> }

    if (error) {
      return (
        <div>
          <p>{error}</p>
          <Link to='/battle'>Reset</Link>
        </div>
      )
    }

    return (
      <div className='row'>
        <Player
          label='Winner'
          profile={winner.profile}
          score={winner.score}
        />
        <Player
          label='Loser'
          profile={loser.profile}
          score={loser.score}
        />
      </div>
    )
  }
}

export default Results;
