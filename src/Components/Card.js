import React from "react";
import tree from "./assets/treebg.jpg";
import Woodie from '../Components/assets/woodie.png'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


const Card = (props) => {

    let navigate = useNavigate();

    return (

        <div className="cardui" onClick={() => {
            navigate("/Info", { state: props.data });
        }} style={{
            width: 250, height: 300, justifyContent: 'center', backgroundColor: '#FFFF', borderRadius: 20, position: 'relative', shadowColor: "#000",
            margin: 16,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.35,
            shadowRadius: 3.84,

            elevation: 5,
        }}    >
            <img src={Woodie} style={{ width: 55, height: 55, position: 'absolute', marginTop: 150, paddingLeft: "40%" }} />
            <div className="imgcontainer" style={{ width: 250, height: 74 }}>
                <img src={("https://biodiversity.srmist.edu.in/assets/images/" +  encodeURIComponent(props.data.name.trim()) + "." + encodeURIComponent(props.data.ext1)).toString().replace("jpg","jpeg")} style={{ width: 250, borderTopLeftRadius: 20, borderTopRightRadius: 20, height:170, objectFit:'cover'}} />
            </div>

            <p style={{ fontSize: 18, color: "#252525", fontWeight: 500, position: 'absolute', top: "64%", marginLeft: 16 }}>{props.data.name}</p>
            <p style={{ fontSize: 16, color: "#767676", fontWeight: 400, marginLeft: 16, position: 'absolute', top: "76%", fontStyle:'italic' }}>{props.data.scientificName}</p>

        </div>

    )
}



export default Card;