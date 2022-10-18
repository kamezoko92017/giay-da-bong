import * as React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

const pages = ['Products', 'Sales', 'News', 'Blog'];
const subPages = ['Nike', 'Adidas', 'Mizuno'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const MyAppBar = () => {
    let navigate = useNavigate();
    const quantity = useSelector(state => state.cart.quantity);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    }

    function handleClose() {
        setAnchorEl(null);
    }

    // const boxStyle = {
    //     color: 'red',
    //     textDecoration: 'none',
    // }

    return (
        <AppBar position="static" style={{
            backgroundColor: 'teal',
            top: '0',
            left: '0',
            zIndex: '99',
            position: 'sticky',
        }}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters>
                    <Link to="/">
                        <Avatar alt="Remy Sharp" src="logo.jpg" sx={{ width: 66, height: 66 }} />
                    </Link>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => {
                                if (page == 'Products') return (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                )
                            }

                            )}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => page !== 'Products' ? (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ) : (
                            <>
                                <Button
                                    aria-owns={anchorEl ? "simple-menu" : undefined}
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                    onMouseOver={handleClick}
                                    sx={{ color: 'white' }}
                                >
                                    PRODUCTS
                                </Button>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                    MenuListProps={{ onMouseLeave: handleClose }}

                                >
                                    {subPages.map((subPage) => (
                                        <Link to={`/products/${subPage}`}  >
                                            <MenuItem
                                                onClick={handleClose}

                                            >
                                                {subPage}
                                            </MenuItem>
                                        </Link>
                                    ))}
                                </Menu>
                            </>
                        )
                        )}
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <Link to="/login">
                            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                LOGIN
                            </Button>
                        </Link>
                        <IconButton >
                            <Link to="/cart">
                                <Badge badgeContent={quantity} color="secondary">
                                    <ShoppingCartIcon sx={{ color: 'white', }}
                                        fontSize="large" />
                                </Badge>

                            </Link>
                        </IconButton>
                        <Tooltip title="Open settings" sx={{ border: '1px solid yellow', marginLeft: '66px' }}>
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <PersonIcon sx={{ color: 'white' }} fontSize="large" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container >
        </AppBar >
    );
};
export default MyAppBar;
