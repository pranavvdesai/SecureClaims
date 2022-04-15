import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import axios from "axios";
import { MenuItem } from '@mui/material';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { useState } from 'react';



function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme({
    palette: {
        type: "light",
        background: {
            default: "#F9F6FF",
            paper: "#F9F6FF",
        },
        primary: {
            main: "#361869",
        },
        secondary: {
            main: "#f0f0f0",
        },
        // whitetext: {
        // 	main: "#fafafa",
        // },
        // pureWhite: {
        // 	main: "#FFFFFF",
        // },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    }
});

export default function HealthForm() {

    const [InscClaimAmtReimbursed, setInscClaimAmtReimbursed] = useState(0.0);
    const [IPAnnualReimbursementAmt, setIPAnnualReimbursementAmt] = useState(0.0);
    const [IPAnnualDeductibleAmt, setIPAnnualDeductibleAmt] = useState(12.0);
    const [OPAnnualReimbursementAmt, setOPAnnualReimbursementAmt] = useState(134.0);
    const [OPAnnualDeductibleAmt, setOPAnnualDeductibleAmt] = useState(55.0);
    const [Age, setAge] = useState(22.0);
    const [DaysAdmitted, setDaysAdmitted] = useState(44.0);
    const [TotalDiagnosis, setTotalDiagnosis] = useState(22.0);
    const [TotalProcedure, setTotalProcedure] = useState(12.0);
    const [EncounterType, setEncounterType] = useState(0);
    const [Gender, setGender] = useState(0);
    const [Race, setRace] = useState(1);
    const [RenalDiseaseIndicator, setRenalDiseaseIndicator] = useState(0);
    const [ChronicCond_Alzheimer, setChronicCond_Alzheimer] = useState(1);
    const [ChronicCond_Heartfailure, setChronicCond_Heartfailure] = useState(1);
    const [ChronicCond_KidneyDisease, setChronicCond_KidneyDisease] = useState(1);
    const [ChronicCond_Cancer, setChronicCond_Cancer] = useState(0);
    const [ChronicCond_ObstrPulmonary, setChronicCond_ObstrPulmonary] = useState(0);
    const [ChronicCond_Depression, setChronicCond_Depression] = useState(0);
    const [ChronicCond_Diabetes, setChronicCond_Diabetes] = useState(1);
    const [ChronicCond_IschemicHeart, setChronicCond_IschemicHeart] = useState(1);
    const [ChronicCond_Osteoporasis, setChronicCond_Osteoporasis] = useState(0);
    const [ChronicCond_rheumatoidarthritis, setChronicCond_rheumatoidarthritis] = useState(1);
    const [ChronicCond_stroke, setChronicCond_stroke] = useState(0);
    const [IsDead, setIsDead] = useState(0);

    const handleSubmit = (event) => {

        event.preventDefault();
        const data = {
            InscClaimAmtReimbursed,
            IPAnnualReimbursementAmt,
            IPAnnualDeductibleAmt,
            OPAnnualReimbursementAmt,
            OPAnnualDeductibleAmt,
            Age,
            DaysAdmitted,
            TotalDiagnosis,
            TotalProcedure,
            EncounterType,
            Gender,
            Race,
            RenalDiseaseIndicator,
            ChronicCond_Alzheimer,
            ChronicCond_Heartfailure,
            ChronicCond_KidneyDisease,
            ChronicCond_Cancer,
            ChronicCond_ObstrPulmonary,
            ChronicCond_Depression,
            ChronicCond_Diabetes,
            ChronicCond_IschemicHeart,
            ChronicCond_Osteoporasis,
            ChronicCond_rheumatoidarthritis,
            ChronicCond_stroke,
            IsDead

        }
        for (let key in data) {
            data[key] = parseInt(data[key]);
        }
        console.log(data);
        let payableAmount;
        axios.post("http://127.0.0.1:8080/predict", data)
            .then(res => {
                console.log(res.data.prediction);
                if (res.data.prediction === 1) {
                    payableAmount = 0.5 * IPAnnualReimbursementAmt;
                    console.log(payableAmount);

                    localStorage.setItem("payableAmount", payableAmount);

                }
                else if (res.data.prediction === 0) {
                    payableAmount = 0.2 * IPAnnualReimbursementAmt;
                    console.log(payableAmount);
                    console.log(payableAmount);

                    localStorage.setItem("payableAmount", payableAmount);
                }
                window.location.href = "/payment";
            })

            .catch(err => {
                console.log(
                    "Error: ",
                    err
                );
            });




    }

    // console.log(finalData);






    return (
        <>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs" >
                    <CssBaseline />
                    <Box

                        style={{
                            backgroundColor: '#f0f0f0',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            marginLeft: '-250px',
                            width: '200%',
                            height: '130%',
                        }}
                        // display="flex"
                        // bgcolor="secondary.main"
                        // boxShadow={3}
                        // alignItems="flex-start"
                        // justifyContent="center"
                        // flexDirection="row"


                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            p: 5,
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Health Form
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{
                            mt: 3,

                        }}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="InscClaimAmtReimbursed"
                                        required
                                        fullWidth
                                        id="InscClaimAmtReimbursed"
                                        label="Insurance Claim Reimbursed"
                                        autoFocus
                                        value={InscClaimAmtReimbursed}
                                        onChange={(e) => setInscClaimAmtReimbursed(e.target.value)}

                                    />

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="IPAnnualReimbursementAmt"
                                        label="IP Annual Reimbursement Amount"
                                        name="IPAnnualReimbursementAmt"
                                        autoComplete="IPAnnualReimbursementAmt"
                                        type="number"
                                        value={IPAnnualReimbursementAmt}
                                        onChange={(e) => setIPAnnualReimbursementAmt(e.target.value)}

                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="IPAnnualDeductibleAmt"
                                        label="IP Annual Deductible Amount"
                                        name="IPAnnualDeductibleAmt"
                                        autoComplete="email"
                                        type="number"
                                        value={IPAnnualDeductibleAmt}
                                        onChange={(e) => setIPAnnualDeductibleAmt(e.target.value)}

                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="OPAnnualReimbursementAmt"
                                        label="OP Annual Reimbursement Amount"
                                        type="OPAnnualReimbursementAmt"
                                        id="OPAnnualReimbursementAmt"
                                        autoComplete="new-password"
                                        type="number"
                                        value={OPAnnualReimbursementAmt}
                                        onChange={(e) => setOPAnnualReimbursementAmt(e.target.value)}

                                    />
                                </Grid>
                                <Grid item xs={12} sm={9}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="OPAnnualDeductibleAmt"
                                        label="OP Annual Deductible Amount"
                                        type="OPAnnualDeductibleAmt"
                                        id="OPAnnualDeductibleAmt"
                                        autoComplete="OPAnnualDeductibleAmt"
                                        type="number"
                                        value={OPAnnualDeductibleAmt}
                                        onChange={(e) => setOPAnnualDeductibleAmt(e.target.value)}


                                    />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="Age"
                                        label="Age"
                                        type="number"
                                        id="age"
                                        autoComplete="Age"
                                        type="number"
                                        value={Age}
                                        onChange={(e) => setAge(e.target.value)}

                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="DaysAdmitted"
                                        label="Days Admitted"
                                        type="number"
                                        id="days-admitted"
                                        autoComplete="DaysAdmitted"
                                        type="number"
                                        value={DaysAdmitted}
                                        onChange={(e) => setDaysAdmitted(e.target.value)}

                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="TotalDiagnosis"
                                        label="Total Diagnosis"
                                        type="number"
                                        id="total-diagnosis"
                                        autoComplete="TotalDiagnosis"
                                        type="number"
                                        value={TotalDiagnosis}
                                        onChange={(e) => setTotalDiagnosis(e.target.value)}



                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="TotalProcedure"
                                        label="Total Procedure"
                                        type="number"
                                        id="total-procedure"
                                        autoComplete="TotalProcedure"
                                        type="number"
                                        value={TotalProcedure}
                                        onChange={(e) => setTotalProcedure(e.target.value)}

                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="EncouterType"
                                        label="Encouter Type"
                                        type="string"
                                        id="EncouterType"
                                        autoComplete="EncouterType"
                                        type="number"
                                        value={EncounterType}
                                        onChange={(e) => setEncounterType(e.target.value)}



                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} ml={5}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            name="Gender"
                                            label="Gender"
                                        >
                                            <MenuItem value={0}>Male</MenuItem>
                                            <MenuItem value={1}>Female</MenuItem>
                                            <MenuItem value={2}>Others</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="Race"
                                        label="Race"
                                        type="string"
                                        id="race"
                                        autoComplete="Race"
                                        value={Race}
                                        onChange={(e) => setRace(e.target.value)}

                                    />
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="RenalDiseaseIndicator"
                                        label="Renal Disease Indicator"
                                        type="string"
                                        id="RenalDiseaseIndicator"
                                        autoComplete="RenalDiseaseIndicator"
                                        value={RenalDiseaseIndicator}
                                        onChange={(e) => setRenalDiseaseIndicator(e.target.value)}


                                    />
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="ChronicCond_Alzheimer"
                                        label="Chronic Alzheimers Condition"
                                        type="string"
                                        id="ChronicCond_Alzheimer"
                                        autoComplete="ChronicCond_Alzheimer"
                                        value={ChronicCond_Alzheimer}
                                        onChange={(e) => setChronicCond_Alzheimer(e.target.value)}

                                    />
                                </Grid>
                                <Grid item xs={12} sm={5}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="ChronicCond_Heartfailure"
                                        label="Chronic Heart Condition"
                                        type="string"
                                        id="ChronicCond_Heartfailure"
                                        autoComplete="ChronicCond_Heartfailure"
                                        value={ChronicCond_Heartfailure}
                                        onChange={(e) => setChronicCond_Heartfailure(e.target.value)}

                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="ChronicCond_KidneyDisease"
                                        label="Chronic Kidney Disease"
                                        type="string"
                                        id="ChronicCond_KidneyDisease"
                                        autoComplete="ChronicCond_KidneyDisease"
                                        value={ChronicCond_KidneyDisease}
                                        onChange={(e) => setChronicCond_KidneyDisease(e.target.value)}

                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="ChronicCond_Cancer"
                                        label="Chronic Cancer Disease"
                                        type="string"
                                        id="ChronicCond_Cancer"
                                        autoComplete="ChronicCond_Cancer"
                                        value={ChronicCond_Cancer}
                                        onChange={(e) => setChronicCond_Cancer(e.target.value)}

                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="ChronicCond_ObstrPulmonary"
                                        label="Chronic ObstrioPulmonary Disease"
                                        type="string"
                                        id="ChronicCond_ObstrPulmonary"
                                        autoComplete="ChronicCond_ObstrPulmonary"
                                        value={ChronicCond_ObstrPulmonary}
                                        onChange={(e) => setChronicCond_ObstrPulmonary(e.target.value)}

                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="ChronicCond_Depression"
                                        label="Chronic Depression"
                                        type="string"
                                        id="ChronicCond_Depression"
                                        autoComplete="ChronicCond_Depression"
                                        value={ChronicCond_Depression}
                                        onChange={(e) => setChronicCond_Depression(e.target.value)}

                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="ChronicCond_Diabetes"
                                        label="Chronic Diabetes"
                                        type="string"
                                        id="ChronicCond_Diabetes"
                                        autoComplete="ChronicCond_Diabetes"
                                        value={ChronicCond_Diabetes}
                                        onChange={(e) => setChronicCond_Diabetes(e.target.value)}

                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="ChronicCond_IschemicHeart"
                                        label="Chronic Isometric Heart Disease"
                                        type="string"
                                        id="ChronicCond_IschemicHeart"
                                        autoComplete="ChronicCond_IschemicHeart"
                                        value={ChronicCond_IschemicHeart}
                                        onChange={(e) => setChronicCond_IschemicHeart(e.target.value)}

                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="ChronicCond_Osteoporasis"
                                        label="Chronic Osteoporosis"
                                        type="string"
                                        id="ChronicCond_Osteoporasis"
                                        autoComplete="ChronicCond_Osteoporasis"
                                        value={ChronicCond_Osteoporasis}
                                        onChange={(e) => setChronicCond_Osteoporasis(e.target.value)}

                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="ChronicCond_rheumatoidarthritis"
                                        label="Chronic Rheumatoid Arthritis"
                                        type="string"
                                        id="ChronicCond_rheumatoidarthritis"
                                        autoComplete="ChronicCond_rheumatoidarthritis"
                                        value={ChronicCond_rheumatoidarthritis}
                                        onChange={(e) => setChronicCond_rheumatoidarthritis(e.target.value)}

                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="ChronicCond_stroke"
                                        label="Chronic Stroke Condition"
                                        type="string"
                                        id="ChronicCond_stroke"
                                        autoComplete="ChronicCond_stroke"
                                        value={ChronicCond_stroke}
                                        onChange={(e) => setChronicCond_stroke(e.target.value)}

                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="IsDead"
                                        label="Is Dead?"
                                        type="string"
                                        id="IsDead"
                                        autoComplete="IsDead"
                                        value={IsDead}
                                        onChange={(e) => setIsDead(e.target.value)}

                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                                        label="I admit that all data provided is valid and authorized by the government of India."
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                color="primary"
                            >
                                Verify
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    );
}
