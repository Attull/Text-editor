import React ,{useState} from 'react'
import "./sideToolbar.css"
import Performance from './performance'
import AddOns from "./addons"
import KeyWords from "./keywords"

const SideToolbar = ({Tlength}) => {

    const [tgs,setTgs] = useState([]);
    console.log(tgs)
    return (
        <div className="sideToolbar"> 
            <Performance Tlength={Tlength} />
            <AddOns />
            <KeyWords tgs={tgs} setTgs={setTgs}/>
        </div>
    )
}

export default SideToolbar
