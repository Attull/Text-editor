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

    const powerWords=["Basic", "Cheat-Sheet", "Easy", "Effortless", "Ingredients", "Minimalist", "On-Demand", "Painless", "Rules", "Savvy", "Simple", "Step-by-Step", "Stupid-simple", "Tricks", "Tweaks", "Agonizing", "Apocalypse", "Armageddon", "Battle", "Corrupt", "Crazy", "Deadly", "Disgusting", "Fight", "Frenzy", "Hate", "Insane", "Lunatic", "Menacing", "Painful", "Poison", "Rowdy", "Sabotaging", "Savage", "Sins", "Struggle", "Treacherous", "Uncontrollable", "Vicious", "Violent", "Weak", "Wild", "Dying", "Horrifying", "Attack", "Traumatized", "Insult", "Horribly", "Hell", "Alarming", "Crushing", "Dead", "Deceptive", "Devastating", "Excruciating", "Exposed", "Heartbreaking", "Sadly", "Shaming", "Suffer", "Avoid", "Demoralizing", "Problem", "Challenge", "Discover", "Extraordinary", "Hack", "Latest", "Life-changing", "Magic", "Miracle", "New", "Remarkable", "Revolutionary", "Sensational", "Shocking", "Spoiler", "Startling", "Suddenly", "Surprising", "Unexpected", "Strange", "Weird", "Odd", "Unusual", "Bold", "Exciting", "Fascinating", "Intriguing", "Riveting", "Tempting", "Thrilling", "Transform", "Guilt", "Guilt-free", "Indulgent", "Obsessed", "Ravenous", "Lazy", "Adorable", "Awe-Inspiring", "Beautiful", "Breathtaking", "Dazzling", "Gorgeous", "Stunning", "Swoon", "Swoon-worthy", "Begging", "Crave", "Decadent", "Delirious", "Fantasy", "Forbidden", "Irresistible", "Naked", "Provocative", "Seductive", "Sexy", "Sinful", "Tantalizing", "Amp", "Blast", "Ignite", "Jumpstart", "Kickstart", "Launch", "Quick-start", "Speedy", "Supercharge", "Turbo-charge", "Smuggle", "Captivate", "Genius", "Memorable", "Undeniable", "Unforgettable", "Unpopular", "Impressive", "Embarrassing", "Heartwarming", "Inspiring", "Profound", "Zen", "Alive", "Light", "Healthy", "Expensive", "Glamorous", "Luxurious", "COMPLETENESS", "Completely", "Copy", "Detailed", "Essential", "Impenetrable", "Meticulous", "Overcome", "Painstaking", "Practical", "Recreate", "Replicate", "Relentless", "Ultimate", "Master", "Perfect", "Super", "Create", "Step-by-Step", "Best", "Truly", "Packed", "Extremely", "Deep", "Better", "GRAVITY", "Gargantuan", "Gigantic", "Huge", "Intense", "Massive", "Gripping", "Goddamn", "Seriously", "GREED", "Affordable", "Bargain", "Barrage", "Bonus", "Budget", "Cheap", "Convert", "Double", "Drive", "Forever", "Free", "Immediately", "Increase", "Instantly", "Money", "Never", "Now", "Off-limits", "Overnight", "Profit", "Promote", "Sale", "Today", "Triple", "Unlimited", "Envy", "Master", "Lucrative", "Steal", "HUMOR", "Funniest", "Hilarious", "Laugh", "Ridiculous", "AUTHORITY", "Absolute", "All-Inclusive", "Authentic", "Authoritative", "Authority", "Backed", "Bona fide", "Complete", "Comprehensive", "Conclusive", "Definitive", "Document", "Expert", "Final", "Formula", "Genuine", "Guaranteed", "Honest", "Iron-clad", "Legitimate", "Literally", "Official", "Powerful", "Proven", "Psychological", "Reliable", "Report", "Research", "Results", "Solution", "Strategy", "Studies", "Surefire", "Validate", "Masterclass", "EXCLUSIVITY", "Admit", "Breaking", "Confess", "Confession", "Divulge", "Elite", "Emerging", "First", "Hidden", "Insider", "Little-known", "New", "Popular", "Priceless", "Rare", "Release", "Reveal", "Secret", "Sly", "Sneak-Peek", "Sneaky", "Special", "Stealthy", "Trend", "Truth", "Unadulterated", "Unconventional", "Uncovered", "Undercover", "Underused", "Unique", "Unseen", "Untapped", "Worst", "PRIDE", "Absurd", "Achieve", "Awkward", "Blunder", "Clueless", "Cringeworthy", "Dumb", "Fail", "Fail-Proof", "Failure", "Faux Pas", "Fool", "Foolish", "Idiot", "Lame", "Last", "Mediocre", "Mistake", "Obvious", "Pitiful", "Reject", "Rookie", "Ruin", "Senseless", "Shameful", "Silly", "Stupid", "Success", "Threaten", "Triggers", "Unknowingly", "Useless", "Waste", "SAFETY", "Accuse", "Assault", "Beware", "Broke", "Catastrophe", "Caution", "Cheat", "Dangerous", "Diagnosed", "Dirty", "Emergency", "Ethical", "Exactly", "Fierce", "Hoax", "Horror", "Jeopardy", "Lifetime", "Protect", "Provoke", "Punch", "Recession-Proof", "Sacred", "Safe", "Scam", "Scared", "Shaking", "Signs", "Survive", "Terrifying", "Unstoppable", "Belong", "Promise", "Stop", "MIND-BLOWING", "Alluring", "Amazing", "Astonishing", "Astounding", "Awesome", "Badass", "Bomb", "Brilliant", "Catapult", "Charming", "Defying", "Delicious", "Delightful", "Dreamy", "Epic", "Explosive", "Exquisite", "Greatness", "Heavenly", "Incredible", "Jaw-dropping", "Kickass", "Legendary", "Mesmerizing", "Mouth-watering", "Nail", "Spellbinding", "Sublime", "Triumph", "Unbelievable", "Unleashed", "Polarizing", "Dominate"].map(v => v.toLowerCase());
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
