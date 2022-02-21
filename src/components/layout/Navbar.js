import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import CartItem from '../CartItems';

const pages = [
    {
        name: "cart",
        to: "/cart"
    }
]

const ResponsiveAppBar = () => {

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link to={"/"}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                            sx={{ mr: 2, textDecoration: "none", color: "white", display: { xs: 'none', md: 'flex' } }}
                    >
                        Store
                        </Typography>
                    </Link>

                
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ textDecoration: "none", flexGrow: 2, display: { xs: 'flex', md: 'none' } }}
                    >
                        Store
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>
          
                    <Box sx={{ textDecoration: "none", flexGrow: 0 }}>
                        {Object.keys(pages).map((item, i) => (                 
                            <Link to={pages[item].to}>
                                <Button
                                    key={pages[ item ].name}
                                    sx={{
                                        textDecoration: "none",
                                        my: 2,
                                        color: 'white',
                                        display: 'block'
                                    }}
                                >
                                    {pages[item].name}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;