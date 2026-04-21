import './style.css'
import { setupEvents, setupRootApp } from './setupRoutApp.js';

const app = document.querySelector('#app');
iniciaLista();
app.append(setupRootApp());
setupEvents(app);
