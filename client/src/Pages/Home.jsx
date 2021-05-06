import React, { useState } from 'react';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import querystring from 'querystring';

import Typist from 'react-typist';
import './css/Typist.css';

import Layout from '../Components/Layout';

import {
    Typography,
    Button,
    Grid
} from '@material-ui/core';

const AnalysisText = styled.p`
	font-size:1.32rem;
	display: inline;
`

const LandingText = styled(Typography)`
	font-weight: 400 !important;
`

const ButtonWrapper = styled.a`
    color: inherit;
    height:100%;
    text-decoration: none !important;
    &:focus {
        text-decoration: none;
    }
    &:active {
        text-decoration: none;
	}
	&:hover {
        text-decoration: none;
    }
`

const NewButton = styled(Button)`
  && {
	@media (max-width: 768px) {
	margin:15px;
	width: 60vw;
	height: 60px;
  }
	margin: 30px;
	color: inherit;
	width: 150px;
	height: 50px;
	border-radius: 0px;
	border: solid 1px white;
	box-shadow: 4px 4px;
	&:hover {
		color: white;
		transform: translate(1px,1px);
		opacity: 0.7;
		text-decoration: none;
		box-shadow: 2px 2px;
    }
  }
`

const TypistWrapper = styled.div`
	min-height: 50px;
`

const HoverAlertWrapper = styled.div`
	min-height: 50 px;
`

const HoverAlert = styled.p`
	font-size: 1.5rem;
	text-transform: none;
	opacity: 1;
	animation: fadeIn ease s;
	-webkit-animation: fadeIn ease 1s;
	@keyframes fadeIn {
	0% {opacity:0;}
	100% {opacity:1;}
	}
	@-moz-keyframes fadeIn {
	0% {opacity:0;}
	100% {opacity:1;}
	}
	@-webkit-keyframes fadeIn {
	0% {opacity:0;}
	100% {opacity:1;}
	}
	@-o-keyframes fadeIn {
	0% {opacity:0;}
	100% {opacity:1;}
	}
	@-ms-keyframes fadeIn {
	0% {opacity:0;}
	100% {opacity:1;}
}
`

const Footer = styled.footer`
	margin-left:200px;
	margin-right:200px;
	opacity: 0.9;
	@media (max-width: 768px) {
		margin:5px;
		paddin-bottom:10px;
		font-size: 0.7rem;
  }
`

const LinkWrapper = styled.a`
	color: inherit;
    height:100%;
    text-decoration: none;
    &:focus {
        text-decoration: none;
    }
    &:active {
        text-decoration: none;
	}
	&:hover {
        color: #1F64AC;
        text-decoration: none;
    }
`

const scope = 'user-read-private user-read-email user-read-playback-state user-top-read streaming';

const base_url = 'https://accounts.spotify.com/authorize?'

const payload = {
    client_id: '7d7cfc8ba99847eb8a155cc0b831c7b0',
    response_type: 'token',
    scope: scope,
    //redirect_uri: 'https://spotifidia.herokuapp.com/callback',
    redirect_uri: 'http://localhost:3000/callback',
    show_dialog: true
}

const authorizationURL = base_url + querystring.stringify(payload);

const Home = () => {
    const [letsGo, setLetsGo] = useState(false);
    const [gitHub, setGitHub] = useState(false);

    const letsGoHoverChange = () => {
        setLetsGo(!letsGo);
    };

    const gitHubHoverChange = () => {
        setGitHub(!gitHub);
    };
    
    return (
        <div>
            <Layout>
            <Grid container
                direction='column'
                justify='center'
                alignItems='center'
                style={{width: '100%', height: isMobile ? '80vh' : '90vh'}}
            >
                <Grid item>
                    <LandingText variant="h2">Welcome to Spotifidia</LandingText>
                    <br></br>
                    <TypistWrapper>
                        <Typist 
                            avgTypingDelay={70}
                            startDelay={1000}
                            cursor={{blink:true, hideWhenDone: true, hideWhenDoneDelay: 1000}}
                        >
                        <AnalysisText className='lead'>Discover within your song:</AnalysisText>
                            <Typist.Delay ms={500} />
                                <AnalysisText>&nbsp;Artist.</AnalysisText>
                            <Typist.Delay ms={500} />
                            <Typist.Backspace count={7} delay={200}/>
                            <Typist.Delay ms={500} />
                                <AnalysisText>&nbsp;Album.</AnalysisText>
                            <Typist.Delay ms={500} />
                            <Typist.Backspace count={6} delay={200}/>
                            <Typist.Delay ms={500} />
                                <AnalysisText>&nbsp;Lyrics.</AnalysisText>
                            <Typist.Delay ms={500} />
                            <Typist.Backspace count={7} delay={200}/>
                            <Typist.Delay ms={500} />
                                <AnalysisText><em>&nbsp;For free.</em></AnalysisText>
                        </Typist>
                    </TypistWrapper>
                    <ButtonWrapper onMouseEnter={() => {letsGoHoverChange()}} onMouseLeave={() => letsGoHoverChange()} href={authorizationURL}>
                        <NewButton variant='outlined'>Lets Go</NewButton>
                    </ButtonWrapper>
                    <ButtonWrapper onMouseEnter={() => {gitHubHoverChange()}} onMouseLeave={() => gitHubHoverChange()} href='https://github.com/christinatka/spotifidia/'>
                        <NewButton variant='outlined'>GitHub</NewButton>
                    </ButtonWrapper>
                    {
                        isMobile ? '' :
                        <HoverAlertWrapper style={{minHeight: '75px'}}>
                            <br></br>
                            <div>
                                {letsGo ? <HoverAlert>Discover your song <span style={{fontSize: '1rem'}}> &nbsp;&nbsp;➡️</span></HoverAlert> : ''}
                                {gitHub ? <HoverAlert>View source on GitHub <span style={{fontSize: '1rem'}}> &nbsp;&nbsp;🚀</span></HoverAlert> : ''}
                            </div>
                        </HoverAlertWrapper>
                    }
                    <br></br>
                    <div>
                        <LinkWrapper href='https://open.spotify.com/user/1228294402?si=rpRkOJcUTiWz2eTMaUoyWQ'>Follow me on Spotify</LinkWrapper>🤘🏼
                    </div>
                </Grid>
            </Grid>
            <Footer>
                <Grid container
                    direction='row'
                    justify='space-between'
                    alignItems='center'
                    style={{width: '100%', textAlign: 'center'}}
                >
                    <Grid item lg={4} xs={11} style={{width: '100%'}}>
                        Created by <LinkWrapper href='https://www.linkedin.com/in/christinatka'>Christina Tkatchenko 👩🏻‍💻</LinkWrapper>
                    </Grid>
                    <Grid item lg={4} xs={11} style={{width: '100%'}}>
                        © 2021
                    </Grid>
                    <Grid item lg={4} xs={11} style={{width: '100%'}}>
				        <LinkWrapper href='https://github.com/christinatka/spotifidia/issues'>Report an issue</LinkWrapper>
			        </Grid>
                </Grid>
            </Footer>
            </Layout>
        </div>
    );
}

export default Home;

