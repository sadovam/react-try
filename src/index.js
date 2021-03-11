import React from 'react';
import ReactDOM from 'react-dom';


//   React.createElement(
//     String/ReactClass type,
//     [object props],
//     [children...]
//   ) -> React Element

const Title = props => React.createElement('h1', {}, props.text);
const Btn = props => React.createElement('button', {onClick: props.onClick}, props.label);

class StateHolder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: props.text};
  }
  
  btnPress = () => {
    this.setState({text: 'UHHH...'});
  }

  render() {
    const title = React.createElement(Title, {text: this.state.text});
    const btn = React.createElement(Btn, {onClick: this.btnPress, label: 'PressMe'});    
    return React.createElement('div', {}, title, btn);
  } 
}

const sh = React.createElement(StateHolder, {text: 'This is text'});
const element = React.createElement('section', {style: {color: 'red', background: 'black', padding: '7px'}}, sh);

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
