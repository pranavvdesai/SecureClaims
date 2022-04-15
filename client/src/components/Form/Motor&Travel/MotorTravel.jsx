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
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FormLabel from '@mui/material/FormLabel';
// import TextField from '@mui/material/TextField';
import axios from 'axios';
// import { NFTStorage, File } from 'nft.storage'

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

export default function SignUp() {
    const [value, setValue] = React.useState(0);
    async function handleSubmit() {
        // eslint-disable-next-line no-console
        const baseUrl = "https://api.nft.storage";
        axios.post(`${baseUrl}/upload`, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'body': File,

            },
        })
            .then(function (response) {
                console.log(response);
            }
            )
            .catch(function (error) {
                console.log(error);
            }
            );
        // const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGZlY0VCOEE4MjlDZmJBNzg2MjkwNjMyN0E1MEQxMjdlMmE2NDk0MGYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0NTgyMjY5NzA1MSwibmFtZSI6IlRlc3QifQ.m7_x5SGLxZOSddHVc42n1Rya-m9iIyGM6X3zeeE4DIs'
        // const client = new NFTStorage({ token: apiKey })

        // const metadata = await client.store({
        //     name: 'Pinpie',
        //     description: 'Pin is not delicious beef!',
        //     image: new File([/* data */], 'pinpie.jpg', { type: 'image/jpg' })
        // })
        // console.log(metadata.url)


    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
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
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        p: 5,
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Bike
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="bike-number"
                                    name="bikenumber"
                                    required
                                    fullWidth
                                    id="bike-number"
                                    label="Bike Number"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="bike-model"
                                    label="Bike Model"
                                    name="bikemodel"
                                    autoComplete="bikemodel"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="desc-incident"
                                    label="Describe the incident"
                                    multiline
                                    rows={4}
                                    fullWidth
                                    required
                                    name="descincident"
                                    autoComplete="descincident"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <FormLabel id="demo-row-radio-buttons-group-label">Aadhar Card</FormLabel>
                                <input
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    id="raised-button-file"
                                    multiple
                                    type="file"
                                />
                                <label htmlFor="raised-button-file">
                                    <Button variant="contained" component="span" sx={{ ml: 3 }}>
                                        Upload
                                    </Button>
                                </label>
                            </Grid>
                            <Grid item xs={4}>
                                <FormLabel id="demo-row-radio-buttons-group-label">License</FormLabel>
                                <input
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    id="raised-button-file"
                                    multiple
                                    type="file"
                                />
                                <label htmlFor="raised-button-file">
                                    <Button variant="contained" component="span" sx={{ ml: 3 }}>
                                        Upload
                                    </Button>
                                </label>
                            </Grid>
                            <Grid item xs={4}>
                                <FormLabel id="demo-row-radio-buttons-group-label">RC Book</FormLabel>
                                <input
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    id="raised-button-file"
                                    multiple
                                    type="file"
                                />
                                <label htmlFor="raised-button-file">
                                    <Button variant="contained" component="span" sx={{ ml: 3 }}>
                                        Upload
                                    </Button>
                                </label>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I admit that all data provided is valid and authorized by the government of India"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Box>

            </Container>
        </ThemeProvider>
    );
}