import React from "react";
import { styled } from "@mui/material/styles";
import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Chip,
    Container,
    Grid,
    Paper,
    Stack,
    TextField,
    Typography,
    InputAdornment,
} from "@mui/material";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const StyledSelect = styled("select")({
    width: "100%",
    padding: "8.5px 14px",
    borderRadius: "12px",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    fontSize: "14px",
    color: "#fff",
    outline: "none",
    fontFamily: "inherit",
    cursor: "pointer",
    transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
    boxSizing: "border-box",
    "& option": {
        backgroundColor: "#1e293b",
        color: "#fff",
    },
    "&:hover": {
        borderColor: "rgba(59, 130, 246, 0.3)",
    },
    "&:focus": {
        borderColor: "#3b82f6",
        backgroundColor: "rgba(15, 23, 42, 0.85)",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    },
});

const Banner = () => {
    const inputSx = {
        "& .MuiOutlinedInput-root": {
            bgcolor: "rgba(255, 255, 255, 0.05)",
            borderRadius: "12px",
            color: "#fff",
            transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
            "& fieldset": {
                borderColor: "rgba(255, 255, 255, 0.08)",
            },
            "&:hover fieldset": {
                borderColor: "rgba(59, 130, 246, 0.3)",
            },
            "&.Mui-focused": {
                bgcolor: "rgba(15, 23, 42, 0.85)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            },
            "&.Mui-focused fieldset": {
                borderColor: "#3b82f6",
                borderWidth: "1px",
            },
        },
        "& .MuiInputBase-input::placeholder": {
            color: "rgba(255, 255, 255, 0.5)",
            opacity: 1,
        },
        "& .MuiInputAdornment-root .MuiSvgIcon-root": {
            color: "rgba(255, 255, 255, 0.6)",
        }
    };

    return (
        <Box
            sx={{
                position: "relative",
                overflow: "hidden",
                minHeight: { xs: "auto", md: "calc(100vh - 110px)" },
                display: "flex",
                alignItems: "center",
                py: { xs: 6, md: 0 },
            }}
        >

            {/* Smooth SVG Vector Waves */}
            <Box
                sx={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            >
                <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-100,600 C300,500 500,200 900,450 C1200,600 1300,300 1600,350" stroke="rgba(59, 130, 246, 0.08)" strokeWidth="3" />
                    <path d="M-100,500 C400,350 450,450 850,250 C1150,100 1350,350 1600,200" stroke="rgba(147, 51, 234, 0.06)" strokeWidth="2.5" strokeDasharray="6 6" />
                    <path d="M-100,400 C200,200 600,550 950,300 C1200,150 1400,250 1600,100" stroke="rgba(45, 212, 191, 0.05)" strokeWidth="2" />
                </svg>
            </Box>

            {/* Right Pattern */}

            <Box
                sx={{
                    position: "absolute",
                    right: -140,
                    top: -80,
                    width: 520,
                    height: 520,
                    borderRadius: "50%",
                    background:
                        "repeating-radial-gradient(circle, rgba(37,99,235,.08) 0px, rgba(37,99,235,.08) 2px, transparent 2px, transparent 22px)",
                    zIndex: 0,
                }}
            />

            {/* Blue Blur */}

            <Box
                sx={{
                    position: "absolute",
                    width: 260,
                    height: 260,
                    borderRadius: "50%",
                    background: "#2563eb",
                    opacity: .08,
                    filter: "blur(80px)",
                    left: "40%",
                    top: "30%",
                }}
            />

            <Container maxWidth="xl" sx={{ position: "relative", zIndex: 5, px: { xs: 4, md: 12 } }}>
                <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
                    {/* LEFT SIDE */}

                    <Grid item xs={12} md={7}>
                        <Chip
                            label="🚀 Grow Your Business Online"
                            sx={{
                                mb: 3,
                                borderRadius: 20,
                                px: 1,
                                fontWeight: 700,
                                bgcolor: "rgba(59, 130, 246, 0.15)",
                                color: "#60a5fa",
                            }}
                        />

                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 800,
                                lineHeight: 1.1,
                                color: "#fff",
                                fontSize: {
                                    xs: "2rem",
                                    md: "3rem",
                                },
                            }}
                        >
                            Building Powerful
                            <Box
                                component="span"
                                sx={{
                                    display: "block",
                                    color: "#3b82f6",
                                }}
                            >
                                Websites That
                            </Box>
                            Grow Businesses.
                        </Typography>

                        <Typography
                            sx={{
                                mt: 2,
                                color: "#94a3b8",
                                fontSize: 16,
                                lineHeight: 1.6,
                                maxWidth: 650,
                            }}
                        >
                            We create custom websites, SEO strategies, digital marketing
                            campaigns, paid ads, and complete online solutions that help your
                            business generate more leads and increase sales.
                        </Typography>
                    </Grid>
                    {/* RIGHT SIDE */}

                    <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: { xs: 2.5, md: 3 },
                                borderRadius: "24px",
                                background: "rgba(15, 23, 42, 0.65)",
                                backdropFilter: "blur(24px)",
                                border: "1px solid rgba(255, 255, 255, 0.08)",
                                boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.5)",
                                width: "100%",
                                maxWidth: 380,
                                display: "flex",
                                flexDirection: "column",
                                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                                "&:hover": {
                                    boxShadow: "0 35px 70px -15px rgba(0, 0, 0, 0.7)",
                                    transform: "translateY(-4px)",
                                }
                            }}
                        >
                            <Typography
                                variant="h4"
                                fontWeight={800}
                                mb={0.5}
                                sx={{ color: "#fff", textAlign: "center" }}
                            >
                                Free Consultation
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                                mb={2}
                                sx={{ color: "#94a3b8", textAlign: "center" }}
                            >
                                Tell us about your project and we'll get back to you within 24 hours.
                            </Typography>

                            <Stack spacing={1.5}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    placeholder="Your Name"
                                    sx={inputSx}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PersonIcon color="primary" fontSize="small" />
                                            </InputAdornment>
                                        ),
                                    }}
                                />

                                <TextField
                                    fullWidth
                                    size="small"
                                    placeholder="Phone Number"
                                    sx={inputSx}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PhoneIcon color="primary" fontSize="small" />
                                            </InputAdornment>
                                        ),
                                    }}
                                />

                                <StyledSelect defaultValue="">
                                    <option value="" disabled>Select Service</option>
                                    <option>Website Development</option>
                                    <option>Custom Website</option>
                                    <option>SEO</option>
                                    <option>Digital Marketing</option>
                                    <option>Google Ads</option>
                                    <option>Social Media Marketing</option>
                                </StyledSelect>

                                <Button
                                    fullWidth
                                    size="medium"
                                    endIcon={<ArrowForwardRoundedIcon />}
                                    sx={{
                                        py: 1.3,
                                        borderRadius: "12px",
                                        textTransform: "none",
                                        fontSize: 16,
                                        fontWeight: 700,
                                        color: "#fff",
                                        background: "linear-gradient(135deg, #2563eb, #3b82f6)",
                                        boxShadow: "0 8px 20px -4px rgba(37, 99, 235, 0.3)",
                                        transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                                        "&:hover": {
                                            background: "linear-gradient(135deg, #1d4ed8, #2563eb)",
                                            boxShadow: "0 12px 25px -4px rgba(37, 99, 235, 0.45)",
                                            transform: "translateY(-1px)",
                                        },
                                        "&:active": {
                                            transform: "translateY(1px)",
                                        }
                                    }}
                                >
                                    Book Free Consultation
                                </Button>

                                <Stack
                                    direction="row"
                                    spacing={1}
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <CheckCircleRoundedIcon
                                        sx={{
                                            color: "#4ade80",
                                            fontSize: 16,
                                        }}
                                    />

                                    <Typography
                                        variant="caption"
                                        color="text.secondary"
                                        sx={{ color: "#94a3b8" }}
                                    >
                                        Your information is 100% secure.
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;
