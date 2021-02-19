/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';
import styled from 'styled-components/macro';

import { Header } from 'app/containers/Header/Loadable';
import { Data } from './containers/Data/Loadable';
import { HomePage } from './containers/HomePage/Loadable';
import { Tracker } from './containers/Tracker/Loadable';
import { Stats } from './containers/Stats/Loadable';
import { Settings } from './containers/Settings/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';



export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <Div>
      <Header />
      <Data />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Tracker" component={Tracker} />
        <Route exact path="/Stats" component={Stats} />
        <Route exact path="/Settings" component={Settings} />
        <Route component={NotFoundPage} />
      </Switch>
      </Div>
      <GlobalStyle />
    </BrowserRouter>
  );
}
const Div = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    max-width: 500px;
    margin: auto;
    padding-top: 30px;
    background-color:#363a4a;
    color:white;

`;
