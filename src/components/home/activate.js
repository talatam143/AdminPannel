import {React,useState,useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import {Container,Paper,Button,Typography,CircularProgress} from "@material-ui/core"; 
import { activate } from "../../actions/auth";
import useStyles from "./loginstyles";
import { useHistory } from "react-router";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const Activate = ({match}) => {
    const classes = useStyles();
    const [realtoken,setrealToken] = useState(" ");
    const dispatch = useDispatch();
    const history = useHistory();
    const userstate = useSelector((state) => state.userState);

    useEffect(() => {
        let token = match.params.token;
        setrealToken(token);
    },[match.params.token])

    const handleActivate = () => {
        dispatch(activate(realtoken));
    }

    const signinRoute = () => {
        history.push("/login");
    }

    return(
        <div>
            <Container maxWidth="xs" >
            {!userstate.isLoading && 
            userstate.activatestatus && 
            <Snackbar 
            anchorOrigin={{ vertical:"bottom", horizontal:"center" }}
            open={true} 
            autoHideDuration={3000} 
            >
            <Alert severity="success" 
            >
            {userstate.activatemessage}
            <Button variant="contained" color="success" size="small" onClick={signinRoute}>SignIn</Button>
            </Alert>
            </Snackbar>
            }
            {!userstate.isLoading && 
            userstate.failurestatus && 
            <Snackbar 
            anchorOrigin={{ vertical:"bottom", horizontal:"center" }}
            open={true} 
            autoHideDuration={3000} >
            <Alert severity="error" 
            >
            {userstate.errormessage}
            </Alert>
            </Snackbar>
            }
                <Paper className={classes.headingpaper} elevation={10}>
                <Typography variant="h3" align="center"  className={classes.heading}>Admin Panel</Typography>  
                </Paper>
                <Paper className={classes.mainpaper} elevation={10}>
                <Typography variant="h5" className={classes.verifyinfo} align="center">Please click on verify to activate your account</Typography>
                {userstate.isLoading ?
                <Button type="submit" variant="contained" className={classes.button}><CircularProgress size="28px"/> </Button>
                :
                <Button variant="contained" onClick={handleActivate} className={classes.button}>Activate</Button>
                }
                </Paper>
            </Container>
        </div>
    );
}

export default Activate;