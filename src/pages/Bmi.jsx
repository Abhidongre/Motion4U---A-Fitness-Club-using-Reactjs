import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Stack, CircularProgress, Grid } from '@mui/material';
import { fetchData, bmiOptions } from '../utils/fetchData';
import bgcl2 from "../assets/images/bgcl2.webp";
import bmiImage from "../assets/images/bmiImage.webp";

const BmiCalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [weightCategory, setWeightCategory] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const calculateBMI = async () => {
        if (!weight || !height) {
            setError('Please enter both weight and height.');
            return;
        }

        if (weight <= 0 || height <= 0) {
            setError('Weight and height must be positive numbers.');
            return;
        }

        setError('');
        setLoading(true);
        const url = `https://body-mass-index-bmi-calculator.p.rapidapi.com/metric?weight=${weight}&height=${height}`;
        try {
            const result = await fetchData(url, bmiOptions);
            setBmi(result.bmi);
            fetchWeightCategory(result.bmi);
        } catch (error) {
            console.error(error);
            setError('Failed to calculate BMI. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const fetchWeightCategory = async (bmi) => {
        const url = `https://body-mass-index-bmi-calculator.p.rapidapi.com/weight-category?bmi=${bmi}`;
        try {
            const result = await fetchData(url, bmiOptions);
            setWeightCategory(result.weightCategory);
        } catch (error) {
            console.error(error);
            setError('Failed to fetch weight category. Please try again.');
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent:'center',
                backgroundImage: `url(${bgcl2})`,
                backgroundSize: 'cover',
                padding: "40px 20px 20px 20px",
                gap: 4,
                pb:4,
            }}
        >
            <Grid container alignItems="center" justifyContent="center" spacing={4} sx={{ width: "100%" }}>
                <Grid item xs={12} md={7}>
                    <Box
                        sx={{
                            py:5,
                            borderRadius: "12px",
                            alignItems: "center",
                            border:"5px solid white",
                            boxShadow: "0px 0px 10px rgba(0, 0, 0,0.5)",
                            
                        }}
                    >
                        <Stack alignItems="center" px={5}>
                            <Typography variant="h4" sx={{ fontWeight: 700, color: "#002366" }}>BMI Calculator</Typography>
                            <Box width="80%">
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    required
                                    id="weight"
                                    label="Weight (kg)"
                                    name="weight"
                                    type="number"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    autoFocus
                                    variant="outlined"
                                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: '20px',  } }}
                                />
                            </Box>
                            <Box width="80%">
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    required
                                    id="height"
                                    label="Height (m)"
                                    name="height"
                                    type="number"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                    variant="outlined"
                                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: '20px' } }}
                                />
                            </Box>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={calculateBMI}
                                disabled={loading}
                                sx={{
                                    borderRadius: '8px',
                                    padding: '10px 20px',
                                    marginTop: "10px",
                                    background: 'linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%)',
                                    '&:hover': {
                                        background: 'linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%)',
                                        boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)',
                                    },
                                }}
                            >
                                {loading ? <CircularProgress size={24} /> : 'Calculate BMI'}
                            </Button>
                            {error && (
                                <Typography color="red" sx={{ mt: 2 }}>{error}</Typography>
                            )}
                        </Stack>
                    </Box>
                    {bmi !== null && (
                        <Box
                            sx={{
                                marginTop: 2,
                                padding: 2,
                                borderRadius: '12px',
                                background: 'rgba(255,255,255,0.4)',
                                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                                textAlign: 'center',
                                width: '100%',
                            }}
                        >
                            <Typography variant="h5" sx={{ fontWeight: 600, color: "#002366" }}>
                                BMI: {bmi}
                            </Typography>
                            {weightCategory && (
                                <Typography variant="h5" sx={{ fontWeight: 600, color: "#002366" }}>
                                    Weight Category: <span style={{ color: "orangered" }}>{weightCategory}</span>
                                </Typography>
                            )}
                        </Box>
                    )}
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        component="img"
                        src={bmiImage}
                        alt="BMI Calculator"
                        sx={{
                            width: '100%',
                            maxHeight: '400px',
                            borderRadius:"12px",
                            objectFit: 'contain',
                            border:"5px solid white",
                            backgroundColor:"rgba(255,255,255,0.1)",
                            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}

export default BmiCalculator;
