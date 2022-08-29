import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MapIcon from '@mui/icons-material/Map';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';

const Container = styled.div`
    display: flex;    
`
const Left = styled.div`
    flex: 1;
    display:flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``

const Desc = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display:flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center; 
`

const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>HaiNguyen</Logo>
                <Desc>Get timely updates from your favorite products.</Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <TwitterIcon />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <PinterestIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><MapIcon style={{ marginRight: "10px" }} />Ha Dong, Ha Noi</ContactItem>
                <ContactItem><PhoneInTalkIcon style={{ marginRight: "10px" }} />+84 966666666</ContactItem>
                <ContactItem><EmailIcon style={{ marginRight: "10px" }} />hainguyen@gmail.com</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer