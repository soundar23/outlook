import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";

// const routs = (
//     < BrowserRouter >
//        <div>
//        <Route path = "/Inbox" component = {App}/>
//        <Route path = "/Spam" component = {App} />
//        <Route path = "/Delete" component = {App} />
//        <Route path = "/SentItems" component = {App} />
       
       
//        </div>
//     </ BrowserRouter >
//  );
initializeIcons();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
