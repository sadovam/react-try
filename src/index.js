import React from 'react';
import ReactDOM from 'react-dom';


//   React.createElement(
//     String/ReactClass type,
//     [object props],
//     [children...]
//   ) -> React Element

const element = React.createElement('h1', {}, 'Hello React Element');

//   ReactDOM.render(
//     ReactElement element,
//     DOMElement container,
//     [function callback]
//   ) -> ReactComponent

const root = document.getElementById('root');

// console.log(root);
// console.log(element);

ReactDOM.render(
  element,
  root
);
