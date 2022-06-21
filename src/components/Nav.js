import styled from "styled-components";
import logo from '../components/media/assets/shared/logo.svg'
import { NavLink } from 'react-router-dom';



    



function Nav() {
    const Navigator = styled.nav`
    height: 9vh;
    width: 59vw;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81px);
    z-index: 19;

`
const NavigatorContainer = styled.header`
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    justify-content: space-between;
    z-index: 100;
    @media screen and (max-width: 768px){
        height: 15%;
        justify-content: space-around;

        .logo {
            height: 35px;
            position: absolute;
            top: 1rem;
            left: 0;

        }

        b {
            display: none;
        }

        li {
            font-size: 0.8rem;
        }
    }
`

const NavigatorUl = styled.ul`
    list-style: none;
    align-items: center;
    color: white;
    font-family: Barlow Condensed;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    letter-spacing: 0.1em;
    font-size: 1.1rem;
`


const ListItem = styled.li`
    height: 100%;
    display: flex;
    align-items: center;
    z-index: 0;
    
    &:hover {
        cursor: pointer;
    }

    a {
        border-bottom: 3px solid transparent;
        color: white;
        text-decoration: none;
        height: 100%;
        display: flex;
        align-items: center;
        gap: 0.2rem;
    }

    a:hover {
        border-bottom-color: rgba(255,255,255, 0.4);
    }

    .Active {
        border-bottom-color: rgb(255,255,255);
    }

    .Active:hover {
        border-bottom-color: rgb(255,255,255)
    }
`

    return (

        <NavigatorContainer>
        <NavLink to='/'><img 
        className='logo'
        style={{margin: '0 0 3rem 1.3rem'}}
        height='50'
        src= {logo} /></NavLink>
        

        <Navigator>
            <NavigatorUl>
                <ListItem>
                    <NavLink 
                    className={({isActive}) => isActive ? 'Active' : ''}
                    to='/'
                    ><b>00</b>HOME</NavLink>
                    </ListItem>
                <ListItem><NavLink 
                to='/Destination' 
                className={({isActive}) => isActive ? 'Active' : ''}
                ><b>01</b> DESTINATION</NavLink>
                </ListItem>
                <ListItem>
                    <NavLink 
                    to='/Crew'
                    className={({isActive}) => isActive ? 'Active' : ''}
                    ><b>02</b> CREW</NavLink>
                </ListItem>
                <ListItem>
                    <NavLink 
                    to='/Technology'
                    className={({isActive}) => isActive ? 'Active' : ''}
                    ><b>03</b> TECHNOLOGY</NavLink>
                </ListItem>
            </NavigatorUl>
        </Navigator>
        </NavigatorContainer>

      );
}


export default Nav;