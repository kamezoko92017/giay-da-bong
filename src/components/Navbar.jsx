import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from "../responsive";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled as mystyle } from '@mui/system';
import MyAppBar from './MyAppBar';
import { Typography } from '@mui/material';

const Container = styled.div`
    height:60px;
    ${mobile({ height: "50px" })}
`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align - items: center;
justify - content: space - between;
${mobile({ padding: "10px 0px" })}
`
const Left = styled.div`
flex: 1;
display: flex;
align - items: center;
`
const Language = styled.span`
font - size: 14px;
cursor: pointer;
${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align - items: center;
margin - left: 25px;
padding: 5px;
`
const Input = styled.input`
border: none;
${mobile({ width: "50px" })}
`
const Center = styled.div`
flex: 1;
text - align: center;
`
const Logo = styled.h1`
font - weight: bold;
${mobile({ fontSize: "24px" })}
`
const Right = styled.div`
flex: 1;
display: flex;
align - items: center;
justify - content: flex - end;
${mobile({ flex: 2, justifyContent: "center" })}
`
const MenuItem = styled.div`
font - size: 14px;
cursor: pointer;
margin - left: 25px;
${mobile({ fontSize: "12px", marginLeft: "10px" })}
`
const Navbar = () => {
    const MyTypography = mystyle(Typography)({
        backgroundColor: '#52A388',
        color: 'red'
    })
    const quantity = useSelector(state => state.cart.quantity);
    console.log('quantity: ', quantity)
    return (
        // <Container>
        //     <Wrapper>
        //         <Left>
        //             <Language>EN</Language>
        //             <SearchContainer>
        //                 <Input placeholder='Search'></Input>
        //                 <SearchIcon style={{ color: 'gray', fontSize: 16 }} />
        //             </SearchContainer>

        //         </Left>
        //         <Center>
        //             <Logo>HN Store</Logo>
        //         </Center>
        //         <Right>
        //             <MenuItem>REGISTER</MenuItem>
        //             <MenuItem>LOGIN</MenuItem>
        //             <Link to="/cart">
        //                 <MenuItem>
        //                     <Badge badgeContent={quantity} color="primary">
        //                         <ShoppingCartOutlinedIcon />
        //                     </Badge>
        //                 </MenuItem>
        //             </Link>
        //         </Right>
        //     </Wrapper>
        // </Container >


        <>
            <MyAppBar />
            <MyTypography>My Typography</MyTypography>

        </>

    )
}

export default Navbar