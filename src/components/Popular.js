import React from 'react';
import PropTypes from 'prop-types';
import API from '../utils/API';

function LanguageItem(props) {
  return (
    <li
      style={props.lang === props.selectedLanguage ? { color: '#d0021b' } : null }
      onClick={props.onSelect.bind(null, props.lang)}
      className="LanguageItem__item"
      key={props.lang}
    >
      {props.lang}
    </li>
  )
}

LanguageItem.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired
}

function SelectLanguage(props) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className="SelectLanguage__container">
      {languages.map(lang => {
        return (
          <LanguageItem
            selectedLanguage={props.selectedLanguage}
            onSelect={props.onSelect}
            lang={lang}
          />
        )
      })}
    </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

function RepoItem(props) {
  return (
    <div className="RepoItem__container" key={props.repo.name}>
      <li className="RepoItem__ranking">#{props.idx + 1}</li>
      <img
        src={props.repo.owner.avatar_url}
        className="RepoItem__avatar"
        alt={`Repo for ${props.repo.owner.login}`}>
      </img>
      <li><a href={props.repo.html_url} target="_blank">{props.repo.name}</a></li>
      <li>@{props.repo.owner.login}</li>
      <li>{props.repo.stargazers_count} stars</li>
    </div>
  )
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired
}

function RepoGrid(props) {
  return (
    <ul className="RepoList__container">
      {props.repos.map((repo, idx) => {
        return <RepoItem repo={repo} idx={idx} />
      })}
    </ul>
  )
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired
}

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
      repos: null
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(lang) {
    this.setState(() => {
      return {
        selectedLanguage: lang,
        repos: null
      }
    });

    API
    .fetchPopularRepos(lang)
    .then(repos => {
      console.log(repos);
      this.setState(() => {
        return {
          repos
        }
      })
    });
  }

  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {
          !this.state.repos
          ? <p>LOADING!</p>
          : <RepoGrid repos={this.state.repos} />
        }
      </div>
    )
  }
}

export default Popular;
