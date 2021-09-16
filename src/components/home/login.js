import React, { useState } from "react";

import {Container, Typography,Paper,Button,TextField,Link} from "@material-ui/core";
import useStyles from "./loginstyles";

function Login() {
    const classes = useStyles();
    const [islogin, setLoginstate] = useState(true);
    const [mobilelogin,setMobileLogin] = useState(true);

    const handleChange = () => {

    }

    const handleSubmit = () =>{
        
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

    return(
        <div>
            <Container maxWidth="xs" >
                <Paper className={classes.mainpaper} elevation={10}>
                    {mobilelogin ? 
                    <>
                    <Typography className={classes.heading} align="center">Login</Typography>
                    <form onSubmit={handleSubmit}>
                    <div className={classes.fieldiv}>
                    <TextField className={classes.loginfield} onChange={handleChange} label="Mobile Number" name="number" type="number"  variant="outlined" required  />
                    </div>
                    <Button variant="contained" className={classes.button}>Get OTP</Button>
                    </form>
                    </>
                    : 
                    <>
                    <Typography className={classes.heading} align="center">{islogin ? "Login" : "Sign up"}</Typography>
                    <form onSubmit={handleSubmit}>
                    <div className={classes.fieldiv}>
                        {islogin ? 
                        <>
                        <TextField className={classes.loginfield} onChange={handleChange} label="Email" name="email" type="text"  variant="outlined" required  />
                        <TextField className={classes.loginfield} onChange={handleChange} label="Password" name="password" type="text"  variant="outlined" required  />
                        </> 
                        : 
                        <>
                        <TextField className={classes.loginfield} onChange={handleChange} label="Name" name="name" type="text"  variant="outlined" required  />
                        <TextField className={classes.loginfield} onChange={handleChange} label="Email" name="email" type="text"  variant="outlined" required  />
                        <TextField className={classes.loginfield} onChange={handleChange} label="Password" name="password" type="text"  variant="outlined" required  />
                        <TextField className={classes.loginfield} onChange={handleChange} label="Confirm Password" name="confirmpassword" type="password" variant="outlined" required />
                        </>
                        }
                    </div>
                    <Button variant="contained" className={classes.button}>{islogin ? "Login" : "Sign up"}</Button>
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