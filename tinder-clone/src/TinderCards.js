import React, { useState } from 'react'
import TinderCard from 'react-tinder-card';
import "./TinderCards.css"
//import axios from './axios';

function TinderCards() {
   
    const [people] = useState([
        {
            name: "Nikola Tesla",
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Nikola_Tesla.jpg/240px-Nikola_Tesla.jpg",
        },
        {
            name: "Elon Musk",
            imgUrl: "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSStEXQ52SE6txqvnwfAyOZ-dt6fkkBqzcir0RaZkoG54dYK7UByieR90Nb18ON4rdZ6VyDNVuQdk1kXik",
        },
        {
            name: "Jeff Bezos",
            imgUrl: "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQcKtPg4LQ1A7_j_7_ph7FfTTTjQrnqOdC2EPUHdeqAZ01JOImw19i9gvYHROXo0HahI13E_dZ1ZekfGEE",
        },
    ]);
    // useEffect(() => {
    //     async function fetchData() {
    //         const req = await axios.get('/tinder/cards');

    //         setPeople(req.data);
    //     }
    //     fetchData();
        
    // }, []);
    
    console.log(people);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        //setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log (name + " left the screen")
    }


    return (
        <div className='tinderCards'>
            <div className= 'tinderCards_cardContainer'>
                {people.map((person) => (
                    <TinderCard
                        className = "swipe"
                        key = {person.name}
                        preventSwipe={["up","down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen = {() =>outOfFrame(person.name)}
                    >
                        <div 
                            style = {{backgroundImage: `url(${person.imgUrl})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>

                        </div>
                    </TinderCard>

                ))}
            </div>
            
        </div>
    );

}

export default TinderCards;