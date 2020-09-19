import React, { Component } from 'react'
import axios from 'axios'

export class form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hash: '',
            height: '',
            previous_hash: '',
            time: ''
        }
    }

    componentDidMount() {
        axios.get('https://api.blockcypher.com/v1/eth/main').then(response => {
            this.setState({
                hash: response.data.hash,
                height: response.data.height,
                previous_hash: response.data.previous_hash,
                time: response.data.time
            })
        }).catch(error => {
            console.log(error);
        });
    }

    

   

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <h1>BlockChain info</h1>
                    </div>
                    <div>
                        <label>Hash</label>
                        <input type="text" value={this.state.hash} readOnly />
                    </div>
                    <div>
                        <label>Height</label>
                        <input type="text" value={this.state.height} readOnly />
                    </div>
                    <div>
                        <label>Previous Hash</label>
                        <input type="text" value={this.state.previous_hash} readOnly />
                    </div>
                    <div>
                        <label>Time</label>
                        <input type="text" value={this.state.time} readOnly />
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default form
