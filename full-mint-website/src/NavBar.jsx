import React, {useState} from 'react';
import {Box, Flex, Image, Spacer, Button} from '@chakra-ui/react';
import etherscan from "./assets/social-media-icons/etherscan.png";
import twitter from "./assets/social-media-icons/twitter.png";
import discord from "./assets/social-media-icons/discord.png";
import {Link} from 'react-router-dom';




const NavBar = ({accounts, setCurrentAccount})=>{
    const isConnected = Boolean(accounts[0]);
    async function connectAccount() {
    if (window.ethereum) {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' ,});
    console.log('Found authorized Account: ', accounts[0])
    setCurrentAccount(accounts[0]);
}}
    
const [getNetwork, setCorrectNetwork] = useState(false);
    async function checkCorrectNetwork () {
    const getNetwork = await window.ethereum.request({ method: 'eth_chainId' })
    console.log('Connected to chain:' + getNetwork)
    const ChainId = '0x1'
    const devChainId = 1337
    const localhostChainId = `0x${Number(devChainId).toString(16)}`

    if (getNetwork !== ChainId && getNetwork !== localhostChainId) {
        alert('Please switch your network to Ethereum Mainet! ')
        setCorrectNetwork(false)
    } else {
        setCorrectNetwork(true)
    }
}

    return(
        <Flex justify="space-between" align="center" padding="30px" >
            {/* Left Side-Social Media Icons*/}
            <Flex justify="space-around" width="25%" padding="0.75px">
                <a href="https://etherscan.io/address/0x5df02cb5d5ad552e5728d3ca20f650cb0d5a94fb"  target="_SEJ" rel="noreferrer">
                
                    <Image src={etherscan} boxSize="43px" margin="0.15px"/>
                </a>
                <a href="https://twitter.com/Shushii_NFT"  target="_SEJ" rel="noreferrer">
                    <Image src={twitter} boxSize="48px" margin="0.15px"/>
                </a>
                <a href="https://discord.gg/KZ3dVGs2" target="_SEJ" rel="noreferrer">
                    <Image src={discord} boxSize="48px" margin="0.15px"/>
                </a>

            </Flex>

            <Flex justify="space-around" align="center" width="44%" padding="0.75px" 
            fontSize="26px" 
             
            >
            <Box margin="10px" >
            <Link to="/about" style={{ textDecoration: 'none', color:'black'}}
            >About </Link></Box>
            <Spacer/>

             <Box margin="10px">
             < Link to="/roadmap"  
                 style={{ textDecoration: 'none', color:'black'}}
                 >
                 Road Map
                 </Link>
               </Box>
             
             
                <Spacer/>
                <Box margin="10px">
                < Link to="/store"  
                  style={{ textDecoration: 'none', color:'black'}}>
                 Store
                 </Link>
               </Box>

             <Spacer/>



            { getNetwork ? (
                isConnected ? (
                <Box margin="0.15px"
                fontSize="24px"
                align="left">Connected</Box>
                 ):(
                <Button
                backgroundColor="#F2BA1B"
                borderRadius="5px"
                box="0px 2px 2px 1px #d9d9d9"
                color="Black"
                cursor="pointer"
                fontSize="24px"
                fontFamily="inherit"
                padding="15px"
                margin="0.15px"
                onClick={connectAccount}>Connect Wallet</Button> 
                )
                ):(
                    <Button
                backgroundColor="#F2BA1B"
                borderRadius="5px"
                box="0px 2px 2px 1px #d9d9d9"
                color="Black"
                cursor="pointer"
                fontSize="24px"
                fontFamily="inherit"
                padding="15px"
                margin="0.15px"
                onClick={checkCorrectNetwork}>Connect Wallet</Button> )
                }

</Flex>
        </Flex>
    );
};

export default NavBar;