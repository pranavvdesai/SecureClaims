import React, {useState, useEffect} from 'react';
import Transactions from '../../contracts/Transactions.json';
import Web3 from "web3";
import { ethers } from 'ethers';
import axios from 'axios';
import AdminCards from './Card';

const Admin = () => {
    const [amt, setAmt] = useState(22)
    const [sender_balance, setSenderBalance] = useState('');
    const [sender_address, setSenderAddress] = useState();
    const [receiver_address, setReceiverAddress] = useState("0xA0d6843552D9fc214ACcAa1022Df7813e1c10eA9");
    const [transactions , setTransactions] = useState({});
    const [account, setAccount] = useState("");
      const [value, setValue] = React.useState(0);
      const [txs, setTxs] = useState([]);
      const [admindata, setData] = useState([]);
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
  
      async function loadBlockChain() {
          console.log("Loading web3...");
          const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
          const network = await web3.eth.net.getNetworkType();
          console.log(network); 
        const accounts = await web3.eth.getAccounts();
        console.log(accounts);
        setAccount(accounts[0]);
        
        const balance = await web3.eth.getBalance(accounts[0]);
        console.log(typeof balance);
        setSenderBalance(balance);
  
        const networkId = await web3.eth.net.getId();
        console.log(networkId);
        const deployedNetwork = Transactions.networks[networkId];
        // const receiver_address = Transactions.networks[networkId].address;
        // setReceiverAddress(receiver_address);
        console.log(deployedNetwork);
        if(deployedNetwork){
          const transactions = new web3.eth.Contract(Transactions.abi, deployedNetwork.address);
          setTransactions(transactions);
          console.log(transactions);
          let receivers_bal = await transactions.methods.balances[receiver_address];
          console.log(receivers_bal);
          // setReceiverBal(receivers_bal);
          // console.log({balance: daiTokenBalance});
        } else {
          window.alert("Transactions contract not deployed to detected network.");
        }
      }
  useEffect(() => {
        loadBlockChain();
        axios.get('http://localhost:8000/insurance', {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => {
          console.log("data" , res.data);
          setData(res.data);
        }).catch(err => {
          console.log(err);
        })
      }, []);
  return (
    <div>
      <div className="text-center my-5">
          <p>Your account: {account}</p>
      <p> Sender Bal: {sender_balance}</p>
      </div>
      {admindata.map((item) => (
      <AdminCards item={item} />
      ))}

      
    </div>
  )
}

export default Admin;