import styled from "styled-components";
import backgroundImage from '../assets/home/desktop.jpg'
import TabletImage from '../assets/home/tablet.jpg'
import MobileImage from '../assets/home/mobile.jpg'
import Nav from '../../Nav';
import { Link } from 'react-router-dom';
import { Devices } from "./Devices";


const Background = styled.div`
    padding: 0;
    margin: 0;
    background-image: url(${backgroundImage});
    height: 100vh;
    width: 100vw;
    background-size: cover;
    @media screen and (max-width: 768px){
        background-image: url(${TabletImage});
            
        h2 {
            text-align: center;
            }


    }

`
const Main = styled.main`
.a {
        text-decoration: none;

    };
    width: 100%;
    height: 70vh;
    color: white;
    display: flex;
    justify-content: space-evenly;
    @media screen and (max-width: 768px){
        display: grid;


        h1 {
            text-align: center;
        }

    }

    
`

const ExploreButton = styled.button`
    height: 20rem;
    width: 20rem;
    background-color: white;
    border-radius: 50%;
    margin: 3rem 3rem;
    text-align: center;
    border: none;
    font-size: 2rem;
    font-family: 'bellefair';
    cursor: pointer;
    position: relative;
    right: 15rem;
    top: 5rem;
    

   @media screen and (max-width: 768px){
    height: 13rem;
    width: 13rem;
    font-size: 2rem;
    margin: 1rem auto;
    display: block;
    top: 0;
    right: 0;
    

   }
    
    &::before {
        content: '';
        position: absolute;
        inset: 0;
        transition: 300ms transform;
        border-radius: 50%;
        border: 5rem solid rgba(255, 255, 255, 0.4);
    }

    &:hover::before {
        transform: scale(1.3)
    }

    a {
        text-decoration: none;
        color: black;
        display: flex;
        width: 100%;
        justify-content: center;
        height: 100%;
        align-items: center;

    
    }


`

const Space = styled.h1`
    font-size: 10rem;
    font-family: bellefair;
    font-weight: 400;
    @media screen and (max-width: 768px){
        font-size: 6rem;
    };



    
`

const Desc = styled.p`
    font-size: 1.2rem;
    opacity: 0.8;
    font-family: Barlow Condensed;
    width: 50%;
    color: rgb(208, 214, 249);

    @media screen and (max-width: 768px){
        width: 100%;
        text-align: center;
        font-size: 1.5rem;
    }

`

function Home() {
    return ( 
        <Background className='Background'>
             <Nav style='borderBottomColor: rgba(255,255,255, 0.4)' />
             <Main>
            <div 
            className='content'
            style={{
                width: '70%',
                justifyContent: 'center',
                margin: 'auto',
                height: '100%'
            }}>
                <h2
                style={{
                    fontWeight: '100',
                    letterSpacing: '0.5rem',
                    fontFamily: 'Barlow Condensed',
                    color: 'rgb(208, 214, 249)',
                    fontSize: '1.4rem'
                }}
                >SO, YOU WANT TO TRAVEL<br /> TO</h2>
                <br />
                <Space>SPACE</Space>
                <Desc
                >Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge
                of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</Desc>
             </div>
             <Link className='a' to='/Destination'><ExploreButton>EXPLORE</ExploreButton></Link>
        </Main>
        </Background>
     );
}

export default Home;