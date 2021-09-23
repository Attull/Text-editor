import React, { useState,useEffect } from 'react'
import "./performance.css"
import PowerWords from './powerWords'


const Performance = ({Tlength}) => {

    const para = Tlength.toString().replace(/,/g, ' ');
    const paraLen = para.split(/[.?!]|\n\s/g).length;

    function syllbaleCount(para){
        let word = para.toLowerCase();                                     
            if(word.length <= 3) { return 1; }                             
            word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');   
            word = word.replace(/^y/, '');                                
            return( word.match(/[aeiouy]{1,2}/g).length); 
    }
    const syllableLen = syllbaleCount(para);

    const powerWords=[
        "Amp","Blast",
        "Ignite",
        "Jumpstart",
        "Kickstart",
        "Launch",
        "Quick-star","Speedy","Supercharge","Turbo-charge",
        "Smuggle",
        "Captivate",
        "Genius",
        "Memorable",
        "Undeniable",
        "Unforgettable",
        "Unpopular",
        "Impressive",
        "Embarrassing",
        "Heartwarming",
        "Inspiring",
        "Profound",
        "Zen",
        "Alive",
        "Light",
        "Healthy",
        "Alarming",
        "Crushing",
        "Dead",
        "Deceptive",
        "Devastating",
        "Excruciating",  
        "Alluring",
        "Amazing",
        "Astonishing",
        "Astounding",
        "Awesome",
        "Badass",
        "Bomb",
        "Brilliant",
        "Catapult",
        "Charming",
        "Defying",
        "Delicious",
        "Delightful",
        "Epic",
        "Dreamy",
        "Exquisite",
        "Explosive",
        "Greatness",
        "Heavenly",
        "Incredible",
        "Jaw-dropping",
        "Kickass",
        "Legendary",
        "Mesmerizing",
        "Mouth-watering",
        "Nail",
        "Spellbinding",
        "Sublime",
        "Triumph",
        "Unbelievable",
        "Unleashed",
        "Polarizing",
        "Dominate",
        "Accuse",
        "Assault",
        "Beware",
        "Broke",
        "Catastrophe",
        "Caution",
        "Cheat",
        "Dangerous",
        "Diagnosed",
        "Dirty",
        "Emergency",
        "Ethical",
        "Exactly",
        "Fierce",
        "Hoax",
        "Horror",
        "Jeopardy",
        "Lifetime",
        "Protect",
        "Provoke",
        "Punch",
        "Recession-Proof",
        "Sacred",
        "Safe",
        "Scam",
        "Scared",
        "Shaking",
        "Signs",
        "Survive",
        "Terrifying",
        "Unstoppable",
        "Belong",
        "Promise",
        "Stop"
    ]

    var array3= Tlength.filter(value => powerWords.includes(value));

    console.log("hello",array3)

    function readLevel(num){
       
        var ans
        if(num>90 && num < 150)
            ans=" Very Easy";
        else if(num>80 && num < 90)
            ans="Easy"
        else if(num>70 && num < 80)
            ans="Fairly Easy"
        else if(num>60 && num < 70)
            ans="Plain English"
        else if(num>50 && num < 60)
            ans="Fairly Difficult"
        else if(num>30 && num < 50)
            ans="Difficult"
        else if(num>10 && num < 30)
            ans="Very Difficult"
        else if(num>0 && num < 10)
            ans="Extremely Difficult"
        return ans
    }

    return (
        <div className="performance-container">
            <h4 style={{color:"skyblue"}}>Performance</h4>
            <div className="feature-boxes">
                <div className="box1" >
                    <h5>Power Word</h5>
                    <div>{array3.length}</div>
                </div>
                <div className="box1">
                    <h5>Readabilty</h5>
                    <div>
                      {readLevel(206.835 -1.015*(Tlength.length/paraLen) -84.6*(syllableLen/Tlength.length))}
                    </div>
                </div>
                <div className="box1">
                    <h5>Words count</h5>
                    <div>{Tlength.length}</div>
                </div>
            </div>
        </div>
    )
}

export default Performance
