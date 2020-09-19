import React, { Component } from 'react'
import axios from 'axios'

export class addressForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            address: '',
            balance: ''
        }
    }


    handleSubmit = (event) => {
        console.log("hello world")
        console.log(this.state.address);
        axios.get(`https://api.blockcypher.com/v1/eth/main/addrs/${this.state.address}`).then(response => {
            console.log(response.data);
            this.setState({
                balance:response.data.balance
            })
            console.log(this.state.balance)
        }).catch(error => {
            console.log(error);
        });
    }

    handleAddress = event => {
        this.setState({
            address: event.target.value
        })
        console.log(this.state.address);
    }


    render() {
        return (
            <form>
                <div>
                    <h1>Account info</h1>
                    <div>
                        <label>Address</label>
                        <input type="text" value={this.state.address} onChange={this.handleAddress} />
                    </div>
                    <div>
                        <button type="button" onClick={this.handleSubmit}>Submit</button>
                    </div>
                    <div>
                        <label>Balance: </label>{this.state.balance}
                        
                    </div>
                </div>
            </form>
        )
    }
}

export default addressForm
