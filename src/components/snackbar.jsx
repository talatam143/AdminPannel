import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Slide } from '@material-ui/core';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Snackbarcomp(){
  const [openSuccess, setOpensuccess] = React.useState(false);
  const [openFailure, setOpenfailure] = React.useState(false);


  const handleSuccess =  () => {
    if(openFailure){setOpenfailure(false)}
    setOpensuccess(true);
  };

  const handleClose = (event,reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpensuccess(false);
    setOpenfailure(false);
  };

  const handleFailure = () => {
    if(openSuccess){setOpensuccess(false)}
    setOpenfailure(true);
  };


  return (
      <div>
        <button onClick={handleSuccess}>Success</button>
        <button onClick={handleFailure}>Failure</button>
        <Snackbar 
        anchorOrigin={{ vertical:"top", horizontal:"right" }}
        open={openSuccess} 
        autoHideDuration={3000} 
        onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" 
        >
          This is a success message!
        </Alert>
        </Snackbar>
        <Snackbar open={openFailure} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          This is a failure message!
        </Alert>
        </Snackbar>
        </div>)
  }
export default Snackbarcomp;
