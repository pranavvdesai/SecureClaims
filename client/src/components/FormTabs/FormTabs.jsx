import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HealthForm from '../Form/Health/HealthForm';
import MotorTravel from '../Form/Motor&Travel/MotorTravel';
import CarForm from '../Form/Car/Car';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: '100%', }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Car" {...a11yProps(0)} />
                        <Tab label="Bike" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <MotorTravel />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <CarForm />
                </TabPanel>
            </Box>
        </ThemeProvider>
    );
}