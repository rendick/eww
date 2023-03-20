import React, { useState } from 'react';
import Web3 from 'web3';
import Header from './Components/Header/Header';
import './App.scss';

function App() {
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState(0);


  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setAddress(accounts[0]);
        const balance = await web3.eth.getBalance(accounts[0]);
        setBalance(web3.utils.fromWei(balance, 'ether'));
      } catch (error) {
        console.error(error);
      }
    } else {
      document.querySelector('.alert').innerHTML = 'You need to install MetaMask!';
      console.log('error');
    }

    if (address) { } else {
      document.querySelector('.btn').remove();
    }

  };



  return (
    <div className="App">
      <Header />
      <div className='balance'>
        <div className='balance-text'>
          <h1>Hello Wallet</h1>
          {/* <p className='address' style={{color: '#fff'}}>Address: {address}</p> */}
          <p className='address' id='address'>Address: {address}</p>
          <p>Balance: {balance} ETH</p>
          <button onClick={connectWallet} className='btn'>Connect Wallet</button>
          <p className='alert'></p>
        </div>
      </div>
    </div>
  );
}

export default App;
