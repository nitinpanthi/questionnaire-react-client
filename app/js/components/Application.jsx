import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { IconContext } from 'react-icons';

import Header from './header/Header';
import Main from './Main';
import Footer from './Footer';
import store from '../store';
import Logo from './header/Logo';
import Navigation from './shared/Navigation';
import routes from '../constants/routes';
import Search from './header/navigation/Search';
import SignInButton from './header/navigation/SignInButton';
import NavigationDisplay from './shared/NavigationDisplay';

const history = createBrowserHistory({});

export default function Application() {
  return (
    <div>
      <Provider store={store}>
        <Router history={history}>
          <div>
            <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
              <Header>
                <Logo />
                <Navigation routes={routes} navigationStyle="navigation">
                  <Search />
                  <SignInButton />
                </Navigation>
              </Header>
              <Main>
                <NavigationDisplay routes={routes} />
              </Main>
              <Footer />
            </IconContext.Provider>
          </div>
        </Router>
      </Provider>
    </div>
  );
}
