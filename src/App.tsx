import React, { FC, useEffect } from 'react';
import './App.scss';
import { Layout } from './components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useLocation, Switch, Route } from 'react-router-dom';
import { routes } from './routes';

const App: FC = () => {
  const location = useLocation();

  useEffect(() => {
    //
  }, []);

  return (
    <Layout
      className={'root-app'}
    >
      <TransitionGroup
        className={'root-routes-group'}
      >
        <CSSTransition
          classNames={'route-fade'}
          timeout={300}
          key={location.pathname}
        >
          <Switch location={location}>
            {
              routes.map(Item => (
                <Route
                  exact={ Item.exact }
                  path={ Item.path }
                  key={ Item.path }
                  component={ Item.Component }
                />
              ))
            }
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Layout>
  );
};

export default App;
