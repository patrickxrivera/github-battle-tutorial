import React from 'react';
import PropTypes from 'prop-types';
import API from '../utils/API';

function LanguageItem(props) {
  return (
    <li
      style={props.lang === props.selectedLanguage ? { color: '#d0021b' } : null }
      onClick={props.onSelect.bind(null, props.lang)}
      className="Popular__list-item"
      key={props.lang}
    >
      {props.lang}
    </li>
  )
}

LanguageItem.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired
}

function SelectLanguage(props) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className="Popular__unordered-list">
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
    this.updateLanguage(this.selectedLanguage);
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
        {JSON.stringify(this.state.repos, 2, null)}
      </div>
    )
  }
}

export default Popular;
