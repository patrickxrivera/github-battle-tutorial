import React from 'react';

function LanguageItem(props) {
  return <li
            style={props.lang === props.selectedLanguage ? { color: '#d0021b' } : null }
            onClick={props.onSelect.bind(null, props.lang)}
            className="Popular__list-item"
         >
          {props.lang}
        </li>;
}

function SelectedLanguage(props) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

  return (
    <ul className="Popular__unordered-list">
      {languages.map(lang => {
        return (
          <LanguageItem
            selectedLanguage={props.selectedLanguage}
            onSelect={props.onSelect}
            lang={lang}
            key={lang}
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
