import {Box, Flex, Image, Spacer} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import home from "../assets/navbar/home.png";
import etherscan from "../assets/social-media-icons/etherscan.png";
import twitter from "../assets/social-media-icons/twitter.png";
import discord from "../assets/social-media-icons/discord.png";
import roadmap from "../assets/Images/roadmap.png"
import '../App.css';


export default function Roadmap (){


    return(
        
        <div className='roadmap'>
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
      
        
            <div className='background' >
        
            <Image src={roadmap} width="87%" />
                 
            </div>
    
         </div>
    )}

