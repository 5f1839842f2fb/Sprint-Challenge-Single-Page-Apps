import React from "react";
import WelcomePage from './WelcomePage';
import CharacterList from './CharacterList';
import { Route, Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Route exact path="/" component={WelcomePage}/>
      <Route path="/characters" component={CharacterList}/>
    </header>
  );
}
