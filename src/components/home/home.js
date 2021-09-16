import React from "react";
import {Container, Typography,Button,Paper} from "@material-ui/core";
import { useHistory } from "react-router";

import useStyles from "./homestyles";
import Twitter from "../../images/twitter.png";
import Facebook from "../../images/facebook.png";
import Insta from "../../images/instagram.png";
import LinkedIn from "../../images/linkedin.png";

function Home () {
    const classes=useStyles();
    const history = useHistory();

    const handleLogin = () => {
        history.push("./login")
    }

    return(
        <div>
            <Paper elevation={5} className={classes.paper}>
            <Container maxWidth="xs" className={classes.maincontainer}>
                <Typography variant="h3" className={classes.heading}>Admin Panel</Typography>
                <Typography variant="caption" className={classes.caption}>Central Authentication and Maintenance of Users</Typography>
                <div className={classes.buttondiv}>
                <Button className={classes.button} onClick={handleLogin} variant="contained">Sign Up</Button>
                <Button className={classes.button} onClick={handleLogin} variant="contained">Sign IN</Button>
                </div>
            </Container>
            </Paper>
            <div className={classes.helpdiv}>
            <Paper className={classes.helpaper} elevation={3}>
                <Typography variant="h5" className={classes.headingtwo} align="center">Support</Typography>
                <div className={classes.maildiv}>
                <Typography variant="subtitle1">Account : help@mernaccount.com</Typography>
                <Typography variant="subtitle1">FAQ'S : help@mernfaq.com</Typography>
                <Typography variant="subtitle1">TEL : 1800 143 343</Typography>
                <Typography variant="subtitle1">HOURS : MON-FRI 9 AM TO 5 PM (IST)</Typography>
                </div>
            </Paper>
            </div>
            <div className={classes.footerdiv}>
                <Paper className={classes.footerpaper} elevation={5}>
                    <Typography variant="h5" align="center" className={classes.headingtwo}>MERN AUTHENTICATION</Typography>
                    <Typography variant="subtitle2" align="center">USER SECURITY IS OUR FIRST PRIORITY</Typography>
                    <div className={classes.anchorsdiv} align="center">
                    <a className={classes.anchors} href="https://twitter.com"><img src={Twitter} alt="Twitter"/></a>
                    <a className={classes.anchors} href="https://facebook.com"><img src={Facebook} alt="Twitter"/></a>
                    <a className={classes.anchors} href="https://instagram.com"><img src={Insta} alt="Twitter"/></a>
                    <a className={classes.anchors} href="https://linkedin.com"><img src={LinkedIn} alt="Twitter"/></a>
                    </div>
                    <Typography variant="subtitle1" align="center" className={classes.caption}>2021 Ⓒ</Typography>
                </Paper>
            </div>
        </div>
    )
}

export default Home