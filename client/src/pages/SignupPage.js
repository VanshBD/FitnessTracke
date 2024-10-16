import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import {
    TextField,
    Button,
    Container,
    Typography,
    Box,
    Paper,
    Divider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const { signup } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signup(name, email, password);
            navigate('/login');
        } catch (error) {
            console.error('Signup failed', error);
            setError('Signup failed. Please try again.');
        }
    };

    return (
        <Container
            maxWidth="lg"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                background: '#1C1C1C', // Neon gradient background
            }}
        >
            <Paper
                elevation={6}
                sx={{
                    padding: '40px',
                    borderRadius: '20px',
                    maxWidth: '400px',
                    width: '100%',
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black for a neon effect
                }}
            >
                <Box textAlign="center" mb={3}>
                    <Typography variant="h4" fontWeight="bold" color="#ffffff">
                        Create Account
                    </Typography>
                    <Typography variant="body1" color="#FFFFFF">
                        Please fill in the details to sign up
                    </Typography>
                </Box>

                <Divider sx={{ marginBottom: '20px', backgroundColor: '#ffffff' }} />

                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Name"
                        fullWidth
                        margin="normal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        variant="outlined"
                        sx={{
                            borderRadius: '10px',
                            backgroundColor: '#1E1E2F',
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#ffffff',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#000000',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#000000',
                                },
                            },
                        }}
                    />
                    <TextField
                        label="Email"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        variant="outlined"
                        sx={{
                            borderRadius: '10px',
                            backgroundColor: '#1E1E2F',
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#ffffff',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#000000',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#000000',
                                },
                            },
                        }}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        variant="outlined"
                        sx={{
                            borderRadius: '10px',
                            backgroundColor: '#1E1E2F',
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#ffffff',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#000000',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#000000',
                                },
                            },
                        }}
                    />

                    {error && (
                        <Typography variant="body2" color="error" align="center" sx={{ mt: 1 }}>
                            {error}
                        </Typography>
                    )}

                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            marginTop: '20px',
                            padding: '12px',
                            borderRadius: '25px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            color: '#000000',
                            backgroundColor: '#ffffff',
                            '&:hover': {
                                backgroundColor: '#000000',
                                color: ' #ffffff'
                            },
                        }}
                        fullWidth
                    >
                        Sign Up
                    </Button>
                </form>

                <Box textAlign="center" mt={2}>
                    <Typography variant="body2" color="#FFFFFF">
                        Already have an account?{' '}
                        <Button href="/login" sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                            Login
                        </Button>
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
};

export default SignupPage;
