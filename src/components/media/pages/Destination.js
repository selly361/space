
import styled from "styled-components"
import Nav from '../../Nav'
import backgroundImage from '../../media/assets/destination/desktop.jpg'
import React, { useState } from 'react';

import Moon from '../assets/destination/moon.png'
import Mars from '../assets/destination/mars.png'
import Titan from '../assets/destination/titan.png'
import Europa from '../assets/destination/europa.png'


let Planets = {
    moon: {
        planetName: 'MOON',

        text: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',

        distance: '384,400 KM',

        distance2: '3 DAYS',

        image: Moon
    },

    mars: {
        planetName: 'MARS',

        text: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',

        distance: '225 MIL. KM',

        distance2: '9 MONTHS',

        image: Mars
    },

    europa: {
        planetName: 'EUROPA',

        text: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',

        distance: '628 MIL. KM',

        distance2: '3 YEARS',

        image: Europa
    },


    
    titan: {
        planetName: 'TITAN',

        text: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',

        distance: '1.6 BIL. KM',

        distance2: '7 YEARS',

        image: Titan
    }
}
    







function Destination() {

    const [ clicked, setClicked ] = useState([true, false, false, false])
    const [ planet, setPlanet ] = useState(Planets.moon);
    let style = {
        borderBottom: '3px solid white'
    }











    return (
        <Body>
            <Nav />
        <div className='bottomContainer'>
            <div class='image'>
                <h1 className='imageHeader'><b className='b'>01</b> PICK YOUR DESTINATION</h1>
                <img 
                style={{
                    marginTop: '3rem',
                    height: '80%'
                }}
                src={planet.image} />
            </div>
            <div className='Navigate'>
            <ul className='nav'>
                <li
                onClick={() => {setClicked([true, false, false, false]); setPlanet(Planets.moon)}}
                style={clicked[0] ? style : undefined}
                >MOON</li>
                <li
                 onClick={() => {setClicked([false, true, false, false]); setPlanet(Planets.mars)}}
                 style={clicked[1] ? style : undefined}
                >MARS</li>
                <li
                 onClick={() => {setClicked([false, false, true, false]); setPlanet(Planets.europa)}}
                 style={clicked[2] ? style : undefined}
                >EUROPA</li>
                <li
                 onClick={() => {setClicked([false, false, false, true]); setPlanet(Planets.titan)}}
                 style={clicked[3] ? style : undefined}
                >TITAN</li>
            </ul>
            <Name>
                {planet.planetName}
            </Name>
            <PlanetText>
                {planet.text}
            </PlanetText>
                <Line />
                <DistanceContainer>
                    <div className='div1'>
                    <p className='p'>AVG. DISTANCE</p>
                    <p>{planet.distance}</p>
                    </div>
                    <div className='div2'>
                    <p className='p'>AVG. DISTANCE</p>
                    <p>{planet.distance2}</p>
                    </div>
                </DistanceContainer>
            </div>
        </div>
        </Body>
      );
}

const DistanceContainer = styled.div`
    width: 100%:
    height: 20rem;
    display: flex;
    
`


const Body = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: url(${backgroundImage});
    background-size: cover;

    p {
        color: rgb(208, 214, 249);
    }

    .div1, .div2 {
        width: 50%;
        height: 100%;
        font-size: 2rem;
        font-family: bellefair;

                
    }

    .p {
        font-size: 1.1rem;
        line-height: 2.3rem;
        font-family: Barlow condensed;
    }


    .bottomContainer {
        height: 72vh;
        width: 100%;
        display: flex;
        justify-content: space-around;
        transform: translateY(-8%);
        align-items: center;
    }
    .image {
        height: 85%;
        width: 40%;
        position: relative;
        left: 8rem;
    }

    .imageHeader {
        color: white;
        font-family: 'Barlow condensed';
        font-size: 2.3rem;
        letter-spacing: 0.3rem;

        .b {
            opacity: 0.5;
        }

    }

    .Navigate {
        height: 100%;
        width: 25%;
        margin: 0 5rem 0 0 ;
        display: flex;
        flex-flow: column;
        justify-content: flex-start;
        gap: 1.5rem;
    }

    .nav {
        font-family: Barlow Condensed;
        list-style: none;
        font-size: 2rem;
        color: white;
        display: flex;
        justify-content: space-around;
        width: 100%;
        

    }

    li {
        cursor: pointer;
    }


`

const Name = styled.h1`
    text-align: center;
    font-size: 7rem;
    color: white;
    font-family: Bellefair;
    font-weight: 400;
    
    
`

const PlanetText = styled.p`
    color: rgb(208, 214, 249);
    font-family: Barlow Condensed;
    font-weight: 400;
    font-size: 1.4rem;
`

const Line = styled.hr`
    border: none;
    height: .07px;
    background-color: white;
    opacity: 0.4;
`

export default Destination;