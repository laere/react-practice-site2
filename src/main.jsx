var React = require('react');
var ReactDOM = require('react-dom');
var Navbar = require('./components/Navbar.jsx');
var Banner = require('./components/Banner.jsx');
var Content = require('./components/PageContent.jsx');
var Footer = require('./components/Footer.jsx');

ReactDOM.render(<Navbar />, document.getElementById('navbar'));
ReactDOM.render(<Banner />, document.getElementById('banner'));
ReactDOM.render(<Content />, document.getElementById('content'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
