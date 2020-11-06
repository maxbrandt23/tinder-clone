import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';

function Header() {

   const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
    return (
        <div className="header">
          
            <IconButton  onClick={handleClickOpen} ><PersonIcon fontSize="large" className="header__icon"/></IconButton>
        
           <img className="header__logo" src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt=""/>
        
               <IconButton> <ForumIcon fontSize="large" className="header__icon"/></IconButton>


 <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle  className="DiaTitle"id="alert-dialog-title"><h1>Login</h1></DialogTitle>
        <DialogContent >
          <DialogContentText className="DiaContent" id="alert-dialog-description">
           <form className="Login">
               <label className="MailIcon"><MailIcon/></label>
               <input className="" type="text" placeholder="Email" />
               <label className="Lockicon"><LockIcon/></label>
               <input type="password" placeholder="password"/>
               <p ClassName="P"></p>
               <button className="SubBtn">SIGN IN</button>
               <label><img className="Gogimg" src="https://dpi.wi.gov/sites/default/files/imce/wiselearn/logos/Google_-G-_Logo.svg.png" alt=""/></label>
               <button className="GogBtn">Sign up With Google</button>
               
           </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
            
         
        </DialogActions>
      </Dialog>

        </div>
    )
}

export default Header
