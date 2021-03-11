import {Component, createElement as re} from 'react';
import ReactDOM from 'react-dom';


const Title = props => re('h1', {}, props.text);
const btnStyle = {color: 'darkred', background: 'darkgray', padding: '5px', borderRadius: '10px'};
const Btn = props => re('button', {onClick: props.onClick, style: btnStyle}, props.label);


class FormExample extends Component {
  constructor(props) {
    super(props);
    this.state = {val: props.value};
    console.log(this.props);
  }

  onChange = (e) => {
    this.setState({val: e.target.value});
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.submit(this.state.val);
  }

  render() {
    return (
      re('form', {onSubmit: this.onSubmit}, 
        re('input', {value: this.state.val, onChange: this.onChange}),
        re('input', {type: 'submit', style: {visibility: 'hidden'}}),
        re('p', {}, this.state.val)
      )
    );
  }

}


class StateHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {text: props.text};
  }
  
  btnPress = () => {
    this.setState({text: 'UHHH...'});
  }

  formSubmit = value => this.setState({text: value});
  
  render() {
    const title = re(Title, {text: this.state.text});
    const btn = re(Btn, {onClick: this.btnPress, label: 'PressMe'});
    const formEx = re(FormExample, {value: '13th', submit: this.formSubmit});    
    return re('div', {}, title, btn, formEx);
  } 
}

const secStyle = {color: 'green', background: 'black', padding: '7px'};
const sh = re(StateHolder, {text: 'This is TEXT!!!'});

const element = re('section', {style: secStyle}, sh);

const root = document.getElementById('root');

ReactDOM.render(
  element,
  root
);
