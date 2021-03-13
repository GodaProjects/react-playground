import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//My changes
import HelloWorldUsingProps from './components/HelloWorldUsingProps'
import TimeTickerUsingState from './components/TimeTickerUsingState'
import {TodoApp} from './components/TodoAppEventHandling'
import MarkDownExample from './components/MarkdownExampleExternalPlugins'
import Testing from './components/Testing'

ReactDOM.render(
  <React.StrictMode>
    <HelloWorldUsingProps name="Godakrishna" />
    <hr/>
    <TimeTickerUsingState/>
    <hr/>
    <TodoApp/>
    <hr/>
    <MarkDownExample/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
