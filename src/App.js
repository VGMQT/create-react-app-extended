import React from 'react';
import 'normalize.css/normalize.css';
import './styles/global.scss';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img className={styles.logo} src="./images/logo.svg" alt="Logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
