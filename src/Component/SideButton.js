import React from 'react'
import './SideButton.css'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';
function SideButton() {
    return (
        <div className="swipeButton">
         <IconButton className="repeat">
             
             <ReplayIcon fontSize="large" className="rp"/>
             </IconButton>   
            
         <IconButton  className="swipeButtons__left">
             <CloseIcon fontSize="large" className="lf"/>
             </IconButton>

          <IconButton  className="swipeButtons__star">
             <StarRateIcon fontSize="large" className="st"/>
             </IconButton>

            <IconButton  className="swipeButtons__rate">
             <FavoriteIcon fontSize="large" className="rt"/>
             </IconButton>  

             <IconButton  className="swipeButtons__lightning">
             <FlashOnIcon fontSize="large" className="li"/>
             </IconButton>
             </div>
    )
}

export default SideButton
