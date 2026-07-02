import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Divider,
    useMediaQuery,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";

const Header = () => {
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

    const [openDrawer, setOpenDrawer] = useState(false);

    const menus = [
        "Services",
        "Blog",
        "Portfolio",
        "About"
    ];

    return (
        <>
            <AppBar
                position="sticky"
                elevation={0}
                sx={{
                    bgcolor: "rgba(255, 255, 255, 0.07)",
                    backdropFilter: "blur(20px)",
                    color: "#fff",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                    width: "90%",
                    mx: "auto",
                    mt: "12px",
                    top: "12px",
                    borderRadius: "16px",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
                }}
            >
                <Toolbar
                    sx={{
                        maxWidth: "1400px",
                        width: "100%",
                        mx: "auto",
                        py: 1,
                        justifyContent: "space-between",
                    }}
                >
                    {/* Logo */}

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                            cursor: "pointer",
                        }}
                    >
                        <Box
                            sx={{
                                width: 38,
                                height: 38,
                                borderRadius: "10px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(37, 99, 235, 0.05) 100%)",
                                border: "1px solid rgba(59, 130, 246, 0.3)",
                            }}
                        >
                            <RocketLaunchRoundedIcon sx={{ color: "#60a5fa", fontSize: 20 }} />
                        </Box>

                        <Typography
                            sx={{
                                fontWeight: 800,
                                fontSize: 24,
                                color: "#fff",
                                letterSpacing: "-0.5px",
                            }}
                        >
                            scale
                        </Typography>
                    </Box>

                    {/* Desktop Menu */}

                    {!isMobile && (
                        <Box
                            sx={{
                                display: "flex",
                                gap: 4,
                            }}
                        >
                            {menus.map((menu) => (
                                <Typography
                                    key={menu}
                                    sx={{
                                        cursor: "pointer",
                                        fontWeight: 600,
                                        fontSize: "18px",
                                        color: "#cbd5e1",
                                        transition: "color 0.2s ease",
                                        "&:hover": {
                                            color: "#3b82f6",
                                        },
                                    }}
                                >
                                    {menu}
                                </Typography>
                            ))}
                        </Box>
                    )}

                    {/* Right */}

                    {!isMobile ? (
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                                mr: 4, // Space at the right after "Get a demo"
                            }}
                        >

                            <Button
                                variant="contained"
                                sx={{
                                    bgcolor: "rgba(255, 255, 255, 0.08)",
                                    color: "#fff",
                                    borderRadius: 10,
                                    textTransform: "none",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    px: 3,
                                    py: 1.2,
                                    boxShadow: "none",
                                    border: "1px solid rgba(255, 255, 255, 0.08)",
                                    transition: "all 0.2s ease",
                                    "&:hover": {
                                        bgcolor: "rgba(255, 255, 255, 0.16)",
                                        boxShadow: "none",
                                        borderColor: "rgba(255, 255, 255, 0.2)",
                                    },
                                }}
                            >
                                Contact Us
                            </Button>
                        </Box>
                    ) : (
                        <IconButton onClick={() => setOpenDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}

            <Drawer
                anchor="right"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <Box
                    sx={{
                        width: 280,
                    }}
                >
                    <List>
                        {menus.map((item) => (
                            <ListItem key={item} disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={item} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>

                    <Divider />

                    <Box
                        sx={{
                            p: 2,
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                        }}
                    >
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{
                                borderRadius: 10,
                                textTransform: "none",
                                bgcolor: "#f5f5f5",
                                color: "#000",

                                "&:hover": {
                                    bgcolor: "#ececec",
                                },
                            }}
                        >
                            Get a demo
                        </Button>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
};

export default Header;