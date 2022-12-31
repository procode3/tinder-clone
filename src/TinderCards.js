import React, { useState } from 'react'
import TinderCard from 'react-tinder-card';
import "./TinderCards.css"

function TinderCards() {
   
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url:
                "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSStEXQ52SE6txqvnwfAyOZ-dt6fkkBqzcir0RaZkoG54dYK7UByieR90Nb18ON4rdZ6VyDNVuQdk1kXik",
        },
        {
            name: 'Jeff Bezos',
            url:
                "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQcKtPg4LQ1A7_j_7_ph7FfTTTjQrnqOdC2EPUHdeqAZ01JOImw19i9gvYHROXo0HahI13E_dZ1ZekfGEE",
        },
       
    ]);
    
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
                            style = {{backgroundImage: `url(${person.url})` }}
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