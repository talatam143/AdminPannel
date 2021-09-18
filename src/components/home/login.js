import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import {Container, Typography,Paper,Button,TextField,Link} from "@material-ui/core";
import useStyles from "./loginstyles";
import {signin,signup} from "../../actions/auth";
import MobileLogin from "./mobileLogin";


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const initialState = { name: '', email: '', username: '', password: '', confirmPassword: ''};

function Login() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history =  useHistory();
    const [islogin, setLoginstate] = useState(true);
    const [mobilelogin,setMobileLogin] = useState(true);
    const [formData, setformData] = useState(initialState);
    

    const userstate = useSelector((state) => state.userState);

    const handleChange = (e) => {
        setformData({...formData,[e.target.name] : e.target.value});
    }

    const handleSubmit =  (e) => {
        e.preventDefault();
        if(islogin){
            dispatch(signin(formData,history));
        } else{
            dispatch(signup(formData,history));
        }
    }
    
    const handleLogin = () => {
        if(islogin) {
            setLoginstate(false);
        } else {
            setLoginstate(true);
        }
    }

    const handleMobileLogin = () => {
        if(mobilelogin) {
            setMobileLogin(false);
        } else {
            setMobileLogin(true);
        }
    }
    const homeRoute = () => {
        history.push("/");

    }

    return(
        <div>
            {!userstate.isLoading &&
            userstate.signupsuccess && 
            <Snackbar 
            anchorOrigin={{ vertical:"bottom", horizontal:"center" }}
            open={true}
            >
            <Alert severity="success">{userstate.signupmessage}
            <Button variant="contained" color="success" size="small" onClick={homeRoute}>Home</Button>
            </Alert>
            </Snackbar> 
            }
            {!userstate.isLoading &&
            userstate.mobilestatus && 
            <Snackbar 
            anchorOrigin={{ vertical:"bottom", horizontal:"center" }}
            open={true}
            >
            <Alert severity="success">{userstate.mobilemessage}
            </Alert>
            </Snackbar> 
            }

            {!userstate.isLoading && 
            userstate.failurestatus && 
            <Snackbar 
            anchorOrigin={{ vertical:"bottom", horizontal:"center" }}
            open={true}>
            <Alert  severity="error">{userstate.errormessage}</Alert>
            </Snackbar>
            }

            <Container maxWidth="xs" >
                <Paper className={classes.headingpaper} elevation={10}>
                <Typography variant="h4" align="center" className={classes.heading}>Admin Panel</Typography>  
                </Paper>
                <Paper className={classes.mainpaper} elevation={10}>
                    {mobilelogin ? 
                    <>
                    <MobileLogin />
                    </>
                    :
                    <>
                    <Typography className={classes.headingtwo} align="center">{islogin ? "Login" : "Sign up"}</Typography>
                    <form  onSubmit={handleSubmit}>
                    <div className={classes.fieldiv}>
                        {islogin ? 
                        <>
                        <TextField className={classes.loginfield} onChange={handleChange} label="Email" name="email" type="email"  variant="outlined" required  />
                        <TextField className={classes.loginfield} onChange={handleChange} label="Password" name="password" type="password"  variant="outlined" required  />
                        </> 
                        : 
                        <>
                        <TextField className={classes.loginfield} onChange={handleChange} label="Name" name="name" type="text"  variant="outlined" required  />
                        <TextField className={classes.loginfield} onChange={handleChange} label="Email" name="email" type="email"  variant="outlined" required  />
                        <TextField className={classes.loginfield} onChange={handleChange} label="Username" name="username" type="text"  variant="outlined" required  />
                        <TextField className={classes.loginfield} onChange={handleChange} label="Password" name="password" type="password"  variant="outlined" required  />
                        <TextField className={classes.loginfield} onChange={handleChange} label="Confirm Password" name="confirmPassword" type="password" variant="outlined" required />
                        </>
                        }
                    </div>
                    <Button type="submit" variant="contained" className={classes.button}>{islogin ? "Login" : "Sign up"}</Button>
                    </form>
                    </>
                    }
                <div className={classes.selectiondiv}>
                    {mobilelogin ? 
                    <></> 
                    : 
                    <Button  onClick={handleLogin}><Link>{islogin ? "Don't have account? Sign up..." : "Have account? Log In.."}</Link></Button>}
                    <Button  onClick={handleMobileLogin}><Link>{mobilelogin ? "Login with Gmail" : "Login with Mobile Number"}</Link></Button>
                </div>
                </Paper>
            </Container>
        </div>
    )
}

export default Login