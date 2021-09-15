import React from "react";
import {Container, Typography,Button} from "@material-ui/core";

import useStyles from "./homestyles";

function Home () {
    const classes=useStyles();

    return(
        <div>
            <Container maxWidth="xs" className={classes.maincontainer}>
                <Typography variant="h3" className={classes.heading}>Admin Panel</Typography>
                <Typography variant="caption" className={classes.caption}>Central Authentication and Maintenance of Users</Typography>
                <div className={classes.buttondiv}>
                <Button className={classes.button} variant="contained">Sign Up</Button>
                <Button className={classes.button} variant="contained">Sign IN</Button>
                </div>
            </Container>
        </div>
    )
}

export default Home