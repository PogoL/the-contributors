import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import useCachedResources from './hooks/useCachedResources';
import MainNavigator from './navigation/MainNavigator';
import ReduxThunk from 'redux-thunk';

import postsReducer from './store/reducers/posts';

const rootReducer = combineReducers({
  posts: postsReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}
