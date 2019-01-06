import React from 'react';
import Navigation from './Navigation';
import Logo from './navigation/Logo';

export default function Header() {
  return (
    <header>
      <Logo />
      <Navigation />
    </header>
  );
}
