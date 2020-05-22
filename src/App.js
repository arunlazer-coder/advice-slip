import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

export default class App extends Component {

        state = { advice : ''};

        componentDidMount(){
         this.fetchData();
        }
        
        fetchData = () => {
            axios.get('https://api.adviceslip.com/advice')  
                .then( re => {
                    const {advice} = re.data.slip
                        this.setState({advice});
                })
                .catch(error =>{
                        console.log(error);
                });
        }

    render() {
        return (
            <div className='app'>
                <div className='card'>  
                    <h1 className='heading'>{this.state.advice}</h1>
                    <button className='button' onClick={this.fetchData}> 
                        <span>
                            Click for advice
                        </span>
                    </button>
                </div>
            </div>
        )
    }
}


