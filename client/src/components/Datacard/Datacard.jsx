import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function Datacard() {
    const classes = useStyles();
    return (
        <>
            <div className=" px-4 mb-2">
                <Card className=" card ">

                    <CardBody className="mb-5 mt-5">
                        <h1 className="text-2xl font-bold mb-2">Health form</h1>
                        <p>Transaction hash: 0x0bb6532563d822ab3908e73988b070ff1e7b3be8fef753eaa4b813b062865864</p>
                        <p>To: 0x8967bcf84170c91b0d24d4302c2376283b0b3a07</p>
                        <p>From: 0xe9caca65047af4f72a72fd000fff33a08a58c9be</p>
                        <p>Timestamp: 3 mins ago (Apr-16-2022 06:51:19 AM +UTC)</p>
                    </CardBody>
                    <CardBody className="mb-5 mt-5">
                        <h1 className="text-2xl font-bold mb-2">Motor form</h1>
                        <p>Transaction hash: 0x4cc7532563d822ab3908e73988b070ff1e7b32be8eef543wbv4b813b062865864</p>
                        <p>To: 0xe9caca65047af4f72a72fd000fff33a08a58c9be</p>
                        <p>From: 0x8967bcf84170c91b0d24d4302c2376283b0b3a07</p>
                        <p>Timestamp: 10 mins ago (Apr-16-2022 07:21:20 AM +UTC)</p>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default Datacard