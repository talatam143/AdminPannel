import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import {Typography,Paper,Button,TextField} from "@material-ui/core";
import useStyles from "./loginstyles";
import {mobilesignup,mobilesignin} from "../../actions/auth";


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const initialData = { number : 0, otp: 0};

function Mobilelogin() {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const [otpstate,setotpstate] = useState(false);
    const [numberData, setnumberData] = useState(initialData);

    const userstate = useSelector((state) => state.userState);

    const handleChange = (e) => {
        setnumberData({...numberData,[e.target.name] : e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(otpstate) {
            dispatch(mobilesignin(numberData,history));
            setotpstate(false);
        } else {
            dispatch(mobilesignup(numberData,history));
            setotpstate(true);
        }
    }

     return(
         <div>
             <Typography className={classes.headingtwo} align="center">Login</Typography>
                    <form onSubmit={handleSubmit}>
                    <div className={classes.fieldiv}>
                    <TextField className={classes.loginfield} onChange = {handleChange} label="Mobile Number" name="number" type="tel"  variant="outlined" required  />
                    {
                    userstate.mobilestatus &&  
                    otpstate && 
                    <>
                    <TextField className={classes.loginfield} onChange = {handleChange} label="OTP" name="otp" type="tel"  variant="outlined" required  />
                    </>
                    }
                    </div>
                    <Button type="submit" variant="contained" className={classes.button}>{!otpstate ? "GET OTP" : "LOGIN"}</Button>
                    </form>
         </div>
     )
}

export default Mobilelogin;