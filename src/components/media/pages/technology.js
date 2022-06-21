
import styled from "styled-components";
import { useState } from "react";
import Nav from '../../Nav';
import backgroundImage from '../../media/assets/technology/desktop.jpg'
import vehicle from '../../media/assets/technology/vehicle.jpg'
import spaceport from '../../media/assets/technology/spaceport.jpg'
import capsule from '../../media/assets/technology/capsule.jpg'


const terminology = {
    vehicle: {
        name: "LAUNCH VEHICLE",

        text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",

        image: vehicle
    },

    spaceport: {
        name: "SPACEPORT",

        text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",

        image: spaceport
    },

    capsule: {
        name: "SPACE CAPSULE",

        text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",

        image: capsule
    }
}




const Body = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: url(${backgroundImage});
    background-size: cover;
`

const Container = styled.div`

    height: 70vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const CircleNav = styled.div`
    height: 90px;
    width: 90px;
    border-radius: 50%;
    font-size: 2.6rem;
    border: 1px solid grey;
    color: rgb(208, 214, 249);
    display: grid;
    place-items: center;

    &:hover {
        border-color: white;
        color: white;
        cursor: pointer;
    }
`

const CircleNavContainer = styled.div`
    height: 70%;
    width: 10vw;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 10rem;
    justify-content: space-around;
    align-self: center;

    .Active {
        background-color: white;
        color: black;
    }
`


const Content = styled.article`
    height: 70%;
    width: 35vw;
    color: white;
    display: flex;
    flex-flow: column;
    gap: 2rem;
    justify-content: center;
    position: relative;
    right: 4rem


    
`



function Technology() {

    const [ term, setTerm ] = useState(terminology.vehicle)
    const [clicked, setClicked] = useState([true, false, false])
    return (
        <Body>
            <Nav />
            <Container>
                <CircleNavContainer>
                    <CircleNav
                    className={clicked[0] ? 'Active' : ''}
                    onClick={() => {setTerm(terminology.vehicle); setClicked([true, false, false])}}
                    >1</CircleNav>
                    <CircleNav
                    className={clicked[1] ? 'Active' : ''}
                    onClick={() => {setTerm(terminology.spaceport); setClicked([false, true, false])}}
                    >2</CircleNav>
                    <CircleNav
                    className={clicked[2] ? 'Active' : ''}
                    onClick={() => {setTerm(terminology.capsule); setClicked([false, false, true])}}
                    >3</CircleNav>
                </CircleNavContainer>
                <Content>
                <h2 style={{
                    fontSize: '1rem',
                    fontFamily: 'Barlow Condensed'
                }}>THE TERMINOLOGY</h2>
                <h1 style={{
                    fontFamily: 'Bellefair',
                    fontWeight: '400',
                    fontSize: '3rem',
                    
                }}>{term.name}</h1>
                <p style={{
                    color: 'rgb(208, 214, 249)',
                    fontSize: '1.3rem'
                }}>{term.text}</p>
                </Content>
                <img 
                
                src={term.image} />

            </Container>
        </Body>
      );
}

export default Technology;