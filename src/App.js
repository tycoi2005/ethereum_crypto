import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EthereumEncryption from 'ethereum-encryption';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      privatekey: null,
      publickey: null,
      address: null,
    };
    this.changePrivateKey = this.changePrivateKey.bind(this);
  }

  changePrivateKey(event) {
    var privatekey = event.target.value;
    var publickey = EthereumEncryption.publicKeyFromPrivateKey(privatekey);
    var address = EthereumEncryption.publicKeyToAddress(publickey);
    this.setState({
      privatekey: privatekey,
      publickey: publickey,
      address: address
    });
  }

  render() {
    console.log("App::render", this.state)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ethereum crypto</h1>
        </header>


        <p className="App-intro">
          Input your private key here
        </p>
        Private key: <input type="text" onChange={this.changePrivateKey}/>
        this private key has address {this.state.address} and public key {this.state.publickey}
        <hr/>
        Public key: <input type="text" onChange={this.changePrivateKey}/>
      </div>
    );
  }
}

export default App;
