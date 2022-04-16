import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Button from '@mui/material/Button';
import Web3 from "web3";
import { ethers } from 'ethers';
import axios from 'axios';

const AdminCards = ({ item }) => {
    const [amt, setAmt] = useState(item.amount);
    const [txs, setTxs] = useState([]);

    const startPayment = async ({ setTxs, ether, to_addr }) => {
        try {
            if (!window.ethereum)
                throw new Error("No crypto wallet found. Please install it.");

            await window.ethereum.send("eth_requestAccounts");
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            ethers.utils.getAddress(to_addr);
            const tx = await signer.sendTransaction({
                to: item.sender,
                value: ethers.utils.parseEther(ether)
            });
            const tx_from = tx.from;


            // await axios.post("http://localhost:8000/insurance", {
            //   amount: parseInt(ether),
            //   receiver: to_addr,
            // sender: tx_from,
            // },
            //   {
            //   headers: {
            //     'Content-Type': 'application/json'
            //   }
            // }).then(res => {
            //   console.log(res.data);
            // }).catch(err => {
            //   console.log(err);
            // })



            console.log({ ether, to_addr, tx_from });
            console.log("tx", tx);
            setTxs([tx]);
        } catch (err) {
            console.log(err)
        }
    };

    const accept = async () => {
        await startPayment({
            setTxs,
            ether: amt.toString(),
            to_addr: item.sender
        });
        await axios.patch(`http://localhost:8000/insurance/${item._id}`, {
            status: "accepted"
        }).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        });
    }
    const reject = async () => {
        await axios.patch(`http://localhost:8000/insurance/${item._id}`, {
            status: "rejected"
        }).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        });
    }
    return (
        <div className=" px-4 mb-2">
            <Card className=" card ">

            <CardBody className=" ">
                    <h1 className="text-2xl font-bold mb-2">{item.amount} SNX</h1>
                    <p>To: {item.receiver}</p>
                    <p>From: {item.sender}</p>
                </CardBody>

                <CardFooter>


                    <Button style={{
                        backgroundColor: "rgba(4, 120, 87, 1)",
                    }} variant="contained" className=" bg-green-700" onClick={accept}>Accept</Button>
                    <Button style={{
                        backgroundColor: "red",
                        marginLeft: "10px",
                    }} variant="contained" className=" pl-8">Decline</Button>


                </CardFooter>
            </Card>
        </div>
    )
}

export default AdminCards;
