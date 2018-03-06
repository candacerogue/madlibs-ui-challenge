const React = require('react');
const MadlibForm = require('./MadlibForm');

const Introduction = React.createClass({

//Played with the idea of doing a setTimeout vs. keyDown for the Introduction component, but essentially chose the keyDown so user can choose when to start   

//Usually keep styling all in one folder, don't know what you all's preference is 
    render: function (){
        let style = {  
            margin: 'auto',
            textAlign: 'center'
        };


        return (
            <div id='intro' style={style}>
                <h3>Flocabulary MadLib</h3>
                <h6>Fill out the form below to create your madlib</h6>
                <button type="submit" value="press" onClick={this.props.changeView}> Let's Begin </button>
            </div>
        )
    }
})

module.exports = Introduction;
