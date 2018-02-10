import React from 'react';

function SelectedLanguage(props) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

  return (
    <ul className="Popular__unordered-list">
      {languages.map(lang => renderList(props, lang))}
    </ul>
  )
}

function renderList(props, lang) {
  return <li
            style={lang === props.selectedLanguage ? { color: '#d0021b' } : null }
            onClick={props.onSelect.bind(null, lang)}
            className="Popular__list-item"
            key={lang}
          >
            {lang}
        </li>;
}

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage(lang) {
    this.setState(() => {
      return {
        selectedLanguage: lang
      }
    });
  }
  render() {
    return (
      <div>
        <SelectedLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
      </div>
    )
  }
}

export default Popular;
