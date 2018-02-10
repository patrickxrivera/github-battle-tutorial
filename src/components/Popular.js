import React from 'react';

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
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
      <ul className="Popular__container">
        {languages.map(lang => renderList.call(this, lang))}
      </ul>
    )
  }
}

function renderList(lang) {
  return <li
            style={lang === this.state.selectedLanguage ? { color: '#d0021b' } : null }
            onClick={this.updateLanguage.bind(null, lang)}
            className="Popular__list-item"
            key={lang}
          >
            {lang}
        </li>;
}

export default Popular;
