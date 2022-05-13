import React from "react";
import {Typography, Box, Grid} from "@material-ui/core";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "./Footer.css";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";

function Footer(){

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );  
    const dispatch = useDispatch();

    var footerComponent;
    
    if(token !== ""){
        footerComponent = <Grid container direction = "row" justifyContent="center" alignItems = "center">
        <Grid alignItems="center" item xs = {12}>
            <Box className = 'box1'>
                <Box paddingTop={1} display = "flex" alignItems="center" justifyContent = "center">
                    <Typography variant = "h5" align = "center" gutterBottom className = 'textos'>Siga nas redes sociais</Typography>
                </Box>

                <Box display="flex" alignItems = "center" justifyContent = "center">
                    <a href="https://web.facebook.com/gustavo.sousasantos.56" target="_blank">
                       <FacebookIcon className='redes'/>
                    </a>

                    <a href="https://www.instagram.com/guuhss_/" target="_blank">
                       <InstagramIcon className='redes'/>
                    </a>

                    <a href="https://www.linkedin.com/in/gustavossantos41/" target="_blank">
                       <LinkedInIcon className='redes'/>
                    </a>

                </Box>
            </Box>

            <Box className = 'box2'>
                <Box paddingTop={1}>
                    <Typography variant = "subtitle2" align = "center" gutterBottom className = 'textos textSize5'>© 2020 Copyright:</Typography>
                </Box>

                <Box>
                    <a href="https://brasil.generation.org" target="_blank" >
                        <Typography variant = "subtitle2" align = "center" gutterBottom className = 'textos textSize5' >brasil.generation.org</Typography>
                    </a>
                </Box>
            </Box>
        </Grid>
    </Grid>
    }
    return(
        <>
            {footerComponent}
        </>
    )
}

export default Footer;