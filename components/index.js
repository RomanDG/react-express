'use strict'

let ReactDOMServer = require('react-dom/server');
let React = require('react');

let records = [
'http://placehold.it/200x100',
'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
];

let Image = React.createClass({
  render(){
    let img = this.props.img;
    return (
      React.createElement(
        'img',
        {
          src: img[0],
          alt: 'about image',
          style: {
            width: '200px',
            height: '100px'
          }
        },
        null
      )
    );
  }
});

let TextBox = React.createClass({
  render(){
    let text = this.props.text;
    return (
      React.createElement(
        'span',
        {},
        text[1]
      )
    );
  }
});

let BlogItem = React.createClass({
  render(){
    let record = this.props.rec;
    return (
      React.createElement(
        'div',
        {},
        React.createElement(Image, {img: record}, null),
        React.createElement(TextBox, {text: record}, null)
      )      
    );
  }
});

let BlogList = React.createClass({
  render(){
    let recs = this.props.rec;
    return (
      React.createElement(
        'div',
        {},
        React.createElement(BlogItem, {rec: recs}, null),
        React.createElement(BlogItem, {rec: recs}, null),
        React.createElement(BlogItem, {rec: recs}, null)
      )      
    );
  }
});

let result = ReactDOMServer.renderToStaticMarkup(React.createElement(BlogList, {rec: records}, null));
export default result;
