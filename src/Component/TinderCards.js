import { SwipeableDrawer } from '@material-ui/core';
import React ,{useEffect, useState} from 'react'
import TinderCard  from 'react-tinder-card';
import axios from './axios'
import './Tinder.css'
function TinderCards() {
 const [people,setPeople]=useState([]);

useEffect(()=>{
async function fetchData(){
    const req=await axios.get('/tinder/card');
    setPeople(req.data);
}
fetchData();
},[])

const Swiped=(direction,nameToDelete)=>{
    console.log("removing"+nameToDelete);
};
const outOfFrame=(name)=>{
    console.log(name+"left the screen");
};
    return (
        <div className="TinderCards">
            <div className="TinderCadrs__cardContainer">
 {people.map((person)=>
             (
            <TinderCard className="Swipe"
            Key={person.name}
            preventSwipe={["up","down"]}
            onSwipe={(dir)=>Swiped(dir,person.name)}
            onCardleftScreen={()=>outOfFrame(person.name)}
            >
                  <div style={{backgroundImage:"url("+person.imgurl+")"}} className="card">
             <h3>{person.name}</h3>
                  </div>

            </TinderCard>
            
            ))}
            </div>
           
        </div>
    )
}

export default TinderCards
