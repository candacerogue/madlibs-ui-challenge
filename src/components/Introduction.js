var React = require('react');
var MadlibForm = require('./MadlibForm');

var Introduction = React.createClass({
    myClick: function(e){
        e.preventDefault();
        alert('hi there');
    },

    render: function (){
        return (
            <div>
                <h1>Flocabulary MadLib</h1>
                <h2>Fill out the form below to create your madlib</h2>
                <button type="submit" value="press" onClick={this.myClick}> Let's Begin </button>
            </div>
        )
    }
})

module.exports = Introduction;
