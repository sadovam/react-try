import {Component, createElement as re} from 'react';
import ReactDOM from 'react-dom';


const Title = props => re('h1', {}, props.text);
const Btn = props => re('button', {onClick: props.onClick}, props.label);

class StateHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {text: props.text};
  }
  
  btnPress = () => {
    this.setState({text: 'UHHH...'});
  }

  render() {
    const title = re(Title, {text: this.state.text});
    const btn = re(Btn, {onClick: this.btnPress, label: 'PressMe'});    
    return re('div', {}, title, btn);
  } 
}

const sh = re(StateHolder, {text: 'This is TEXT!!!'});
const element = re('section', {style: {color: 'red', background: 'black', padding: '7px'}}, sh);

const root = document.getElementById('root');
ReactDOM.render(
  element,
  root
);
