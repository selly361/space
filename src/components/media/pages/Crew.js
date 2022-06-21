
import styled, { withTheme } from "styled-components";
import Nav from '../../Nav';
import backgroundImage from '../assets/crew/desktop.jpg';
import douglasImage from '../assets/crew/douglas.png'
import markImage from '../assets/crew/mark.png'
import victorImage from '../assets/crew/victor.png'
import ansariImage from '../assets/crew/ansari.png'
import { useState } from "react";





const people = {
    douglas: {
        name: 'DOUGLAS HURLEY',
        
        text: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',

        image: douglasImage
    },

    mark: {
        name: 'MARK SHUTTLEWORTH',

        text: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',

        image: markImage
    },

    victor: {
        name: 'VICTOR GLOVER',

        text: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',

        image: victorImage
    },

    ansari: {
        name: 'ANOUSHEH ANSARI',

        text: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',

        image: ansariImage
    }
}


let style = {
    backgroundColor: 'white'
}



function Crew() {

    const [ person, setPerson ] = useState(people.douglas)
    const [ clicked, setClick ] = useState([true, false, false, false])

    return (
        <Body>
            <Nav />
            <Main>
                <Navigate>
                <h1
                style={{
                    fontFamily: 'bellefair',
                    color: 'rgba(255, 255, 255, 0.4)',
                    fontWeight: '400',
                    fontSize: '2.2rem'
                }} 
                >COMMANDER</h1>
                <h1
                style={{
                    fontFamily: 'bellefair',
                    fontSize: '4rem',
                    fontWeight: '400'
                }}
                >{person.name}</h1>
                <p
                style={{
                    fontSize: '1.5rem',
                    fontFamily: 'Barlow Condensed'
                }}
                >{person.text}</p>
                <ul className='nav'>
                    <Circle
                    onClick={() => {setPerson(people.douglas); setClick([true, false, false, false])}}
                    style={clicked[0] ? style : undefined}
                    ></Circle>
                    <Circle
                    onClick={() => {setPerson(people.mark); setClick([false, true, false, false])}}
                    style={clicked[1] ? style : undefined}
                    ></Circle>
                    <Circle
                    onClick={() => {setPerson(people.victor); setClick([false, false, true, false])}}
                    style={clicked[2] ? style : undefined}
                    ></Circle>
                    <Circle
                    onClick={() => {setPerson(people.ansari); setClick([false, false, false, true])}}
                    style={clicked[3] ? style : undefined}
                    ></Circle>
                </ul>
                </Navigate>
                <Image src={person.image} />
            </Main>

        </Body>
      );
}


const Circle = styled.div`
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: grey;

    &:hover {
        background-color: lightgray;
        cursor: pointer;
    }

`


const Body = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: url(${backgroundImage});
    background-size: cover;
    position: relative;
`

const Navigate = styled.div`
    width: 28vw;
    color: white;
    display: flex;
    flex-flow: column;
    gap: 3rem;
    margin-left: 10rem;

    .nav {
        width: 15rem;
        display: flex;
        color: white;
        justify-content: space-around;
    }
`

const Image = styled.img`
    right: 10rem;
    top: 4rem;
    position: absolute;
    z-index: 3;
    height: 40rem;
`

const Main = styled.div`
height: 75vh;
width: 100vw;
display: flex;
justify-content: space-between;



`
export default Crew;
