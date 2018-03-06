// attempt to reset browser differences in default CSS
require('normalize.css/normalize.css');
// this file is where styles should go
require('styles/App.css');
require('styles/App.scss');

// Flocabulary uses React extensively. This exercise is built with it
// but it is not required knowledge. Ideally, you will not have to
// alter any javascript. React comes with an HTML-like syntax
// called jsx, which you can alter much like HTML.
const React = require('react');

const Introduction = require('./Introduction');
const MadlibForm = require('./MadlibForm');
const SubmittedMadlib = require('./SubmittedMadlib');

// These are lyrics to a Flocabulary song that has had some
// terms replaced for the purposes of the madlib.
const MADLIB_TEXT = require('../madlibs/bill-of-rights');

// This is the main component of the interface
const AppComponent = React.createClass({
  
  render: function() {
    let content;
    if (this.state.showComponent === false) {
      content = <Introduction 
                changeView={this.onButtonClick}
                />;
    } else {
      content = <MadlibForm
                text={this.props.text}
                onSubmit={
                value => this.setState({submittedValue: value})
                }
                />;
    } 

 //Condtional rendering done on if/else statements, but would eventually like to move them all to ternary operator with default content = Intro component if possible

    if(this.state.submittedValue)
      return (
          // check out SubmittedMadlib.js to see the markup for this element
          <SubmittedMadlib
            reset={this.reset}
            text={this.props.text}
            value={this.state.submittedValue}
          />
        )
     


    return (
      <div className="main">
        {content}
      </div>
    );
  },

  getInitialState: function() {
    return {
      submittedValue: null,
      showComponent: false
    };
  },

  //Changes View from introduction to madlib when button is clicked
  onButtonClick(){
    this.setState({
      showComponent: true,
    })
  },

  getDefaultProps: function() {
    return {
      text: MADLIB_TEXT
    };
  },
  reset: function() {
    this.setState(this.getInitialState());
  }
});

module.exports = AppComponent;
