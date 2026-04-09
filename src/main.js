import './style.css'
import { setupCounter } from './counter.js'
import { setupRootApp } from './setupRoutApp.js';

document.querySelector('#app').innerHTML = setupRootApp();

setupCounter(document.querySelector('#counter'))
