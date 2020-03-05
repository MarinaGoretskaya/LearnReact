import React, {Component} from 'react';
import './App.css';
import Car from './Car/Car';

class App extends Component () {
    state = {
        cars: [
            {name="Audi", year=2018},
            {name="Opel", year=2001},
            {name="Audi", year=2018},
        ]
    }
    render() {
        const divStyle = {
            textAlign:'center'
        }

        return (
            <div style={divStyle}>
                <h1>Hello world!</h1>

                <Car >
                    <p style={{color: 'green'}}>COLOR</p>
                </Car>
                <Car name="Opel" year={2001}>
                    <p style={{color: 'red'}}>COLOR</p>
                </Car>
                <Car name="Ford" year={2010} />
            </div>
        );
    }
}

export default App;
