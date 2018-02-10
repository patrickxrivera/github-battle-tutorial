import React from 'react';

export function renderList(word) {
  return <li className="Popular__list-item" key={word}>
            {word}
        </li>;
}
