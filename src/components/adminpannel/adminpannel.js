import React,{useState} from "react";
import {Container, Typography,Paper,Button} from "@material-ui/core";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import useStyles from "./pannelstyles";

function Adminpannel () {
    const [user,setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = () => {
        dispatch({type: "LOGOUT"});
        history.push("/");
        setUser(null);
    }

    return(
        <div>
            <Container maxWidth="xs" >
                <Paper elevation={10} className={classes.headingpaper}>
                <Typography variant="h3" align="center" >Admin Panel</Typography>
                <Typography variant="h5" align="center" >You are now authorized</Typography>
                {user &&
                <Typography variant="caption" align="center" className={classes.caption}>Welcome {user.result}</Typography> }
                <Button className={classes.button} variant="contained" onClick={handleLogout}>Logout</Button>
                </Paper>
            </Container>
        </div>
    )
}

export default Adminpannel