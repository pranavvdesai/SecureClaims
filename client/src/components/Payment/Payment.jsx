import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Transactions from '../../contracts/Transactions.json';
import Web3 from "web3";
import { ethers } from 'ethers';
import axios from 'axios';
import minter from './minter';
import supply from './supply';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Payment = () => {
  let paystorage = localStorage.getItem('payableAmount')
  const [amt, setAmt] = useState(paystorage)
  const [sender_balance, setSenderBalance] = useState('');
  const [sender_address, setSenderAddress] = useState();
  const [receiver_address, setReceiverAddress] = useState("0xdc8FcF01984778Cb39e4De728cC11f4728B134B7");
  const [transactions , setTransactions] = useState({});
  const [account, setAccount] = useState("");
  const [value, setValue] = React.useState(0);
  const [txs, setTxs] = useState([]);
  const [from_admin, setFromAdmin] = useState('');
  const ethervalue = [];
  
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
      setSenderBalance(Web3.utils.fromWei(balance, 'ether'));

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
  }, []);

  // const stake = async () => {
  //   console.log(amt)
  //   // transactions.methods.send(receiver_address, amt).send({ from: account });
  //     transactions.methods.stake(receiver_address, amt).send({ from: account }).on('transactionHash', (hash) => {
  //       console.log("sent" + hash);
  //     })
  // }
  const startPayment = async ({ setTxs, ether, to_addr }) => {
    try {
      if (!window.ethereum)
        throw new Error("No crypto wallet found. Please install it.");

      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      ethers.utils.getAddress(to_addr);
      const tx = await signer.sendTransaction({
        to: to_addr,
        value: ethers.utils.parseEther(ether)
      });
      ethervalue.push({
        ether, to_addr
      })
      const tx_from = tx.from;

      
        await axios.post("http://localhost:8000/insurance", {
          amount: Number(ether),
          receiver: to_addr,
        sender: tx_from,
      },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => {
          console.log(res.data);
        }).catch(err => {
          console.log(err);
        })



      console.log({ ether, to_addr, tx_from });
      console.log("tx", tx);
      console.log("ethervalue", ethervalue);
      setTxs([tx]);
    } catch (err) {
      console.log(err)
    }
  };

  const stake = async () => {
    console.log(amt)
    // transactions.methods.send(receiver_address, amt).send({ from: account });
    await startPayment({
      setTxs,
      ether: amt.toString(),
      to_addr: receiver_address
    });
  }

  return (
      <div>
          <div className="flex flex-col text-center items-center">
              <h1 className='my-10 text-xl '>Choose your payment method</h1>
              <p className='text-3xl font-bold mb-10'>Amount to be staked : {amt} SNX</p>
          <Box >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Crypto" {...a11yProps(0)} />
          <Tab label="UPI" {...a11yProps(1)} />
          <Tab label="Online Banking" {...a11yProps(2)} />
        </Tabs>
      </Box>
              <TabPanel value={value} index={0}>
              <p className="mb-2"><span className='text-pur font-bold'>Your account:</span> {account}</p>
            <p className="mb-2"> <span className='text-pur font-bold'>Sender Balance:</span> {sender_balance} ETH</p>
            <p className="mb-2"><span className='text-pur font-bold'>Receivers Address:</span> {receiver_address}</p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
          </Box>
          <Button
                            type="submit"
                            variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => { stake(); }}
          className='bg-pur'
                        >
                            Pay
        </Button>
        <Button
                            type="submit"
                            variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => { minter(); }}
          className='bg-pur'
                        >
                            Mint
        </Button>
        <Button
                            type="submit"
                            variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => { supply(); }}
          className='bg-pur'
                        >
                            supply
                        </Button>
                        </div>

    </div>
  )
}


export default Payment;
