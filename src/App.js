import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Header/>
          <Main />
          <Footer />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
