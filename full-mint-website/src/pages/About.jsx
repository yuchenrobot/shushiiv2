import {Box, Flex, Image, Spacer,Button, Text, Stack} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import home from "../assets/navbar/home.png";
import etherscan from "../assets/social-media-icons/etherscan.png";
import twitter from "../assets/social-media-icons/twitter.png";
import discord from "../assets/social-media-icons/discord.png";
import shushii from "../assets/Images/shushii.GIF"
import '../App.css';


export default function About(){


    return(
        
        <div className='about'>

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

            <Flex justify="space-around" align="center" width="44%" padding="0.75px" fontSize="26px"
          
            >
       
            <Box margin="10px" >
            <Link to="/about" style={{ textDecoration: 'none', color:'black'}}
            >About 
            </Link ></Box>
            <Spacer/>

             <Box margin="10px" >
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
                <Box margin="10px">
                <Link to="/">
                <Image src={home} boxSize="48px" margin="0.15px"/>
               
                </Link>
                 </Box>

               <Spacer/>
              
         </Flex>
        </Flex>
        <Stack direction={['column', 'row']} spacing='24px' padding="60px">
      
        
        <Box marginLeft="50px" >
        <Image src={shushii} boxSize="520px"/>
       
        </Box>
      
        <Spacer/>
       
            <Box 
            
            width="580px" 
            height="500px"
            backgroundColor="White" 
            border="dashed black 5px"
            borderRadius="30px"
            overflow="scroll"
            marginRight="70px"
            marginTop="15px"
            >
          
                <Text fontSize="46px" font="Concert One" margin="65px">What is Shushii?</Text>
                 <Text fontSize="20px" 
                    letterSpacing="-5.5%"
                    font="Varela Round"
                    margin="0px 50px 50px 50px"
                    color="#424242"
                    >
                   "Shushii" is a collection of 8,888 NFTs. 
                   It embodied a spirit of rebellion, shattering stereotypes, 
                   challenging biases, and fighting against discrimination. 
                   Each Shushii NFT featured a finger over the lips, as if hushing the noise of negativity. 

                    </Text>
                   

                    <Box marginBottom="20px"> 
                    <Button as="a" href="https://opensea.io/collection/shushii"
                    backgroundColor="#F2BA1B"
                    borderRadius="5px"
                    border=" 3px solid #4e4d4d"
                     color="Black"
                     cursor="pointer"
                     fontSize="24px"
                     fontFamily="inherit"
                     padding="15px"
                     textDecoration= "none"
                     > Buy on OpenSea</Button> 
                    </Box>
                    </Box>
         </Stack>



         </div>
    )

    }
