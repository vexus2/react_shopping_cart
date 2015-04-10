window.React = require('react');

var ProductData = require('./ProductData');
var CartAPI = require('./CartAPI');
var FluxCartApp = require('./FluxCartApp.react');

ProductData.init();

CartAPI.getProductData();

React.render(
  <FluxCartApp />,
  document.getElementById('flux-cart')
);