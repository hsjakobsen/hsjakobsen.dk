import type { Component } from 'solid-js';

import styles from './App.module.css';
import dragon from './dragon-head.png';

const App: Component = () => {
  return (
    <>
    
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={dragon} class={styles.logo} alt="logo" />
        <p>
          Henrik Skov Gao-Jakobsen, that's me
        </p>
        {/* <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a> */}
      </header>
    </div>
    <div>
    <header class={styles.footer}>
      <p>
          Powered by SolidJS.
        </p>
        </header>
    </div>
    </>
  );
};

export default App;
