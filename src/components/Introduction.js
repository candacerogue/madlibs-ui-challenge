const React = require('react');
const MadlibForm = require('./MadlibForm');

const Introduction = React.createClass({

    render: function (){
        return (
            <div>
                <h3>Flocabulary MadLib</h3>
                <h6>Fill out the form below to create your madlib</h6>
                <button type="submit" value="press" onClick={this.props.changeView}> Let's Begin </button>
            </div>
        )
    }
})

module.exports = Introduction;
