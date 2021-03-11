import React from 'react';
import ReactDOM from 'react-dom';


//   React.createElement(
//     String/ReactClass type,
//     [object props],
//     [children...]
//   ) -> React Element

const Title = props => React.createElement('h1', {}, props.text);
const Btn = props => React.createElement('button', {onClick: props.onClick}, props.label);

const btnPress = () => console.log('Button pressed');

const title = React.createElement(Title, {text: 'This is a text'});
const button = React.createElement(Btn, {onClick: btnPress, label: 'Click on me!'});
const element = React.createElement('section', {style: {color: 'red', background: 'black', padding: '7px'}}, title, button);

//   ReactDOM.render(
//     ReactElement element,
//     DOMElement container,
//     [function callback]
//   ) -> ReactComponent

const root = document.getElementById('root');
ReactDOM.render(
  element,
  root
);

const btitle = React.createElement(Title, {text: 'This is not a text'});
const bbutton = React.createElement(Btn, {onClick: btnPress, label: 'Don`t click on me!'});
const belement = React.createElement('section', {style: {color: 'green', background: 'black', padding: '7px'}}, btitle, bbutton);

const broot = document.getElementById('broot');
ReactDOM.render(
  belement,
  broot
);
