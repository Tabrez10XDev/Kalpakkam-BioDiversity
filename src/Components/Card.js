import React from "react";
import Woodie from '../Components/assets/woodie.png'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import placeholder from "./assets/placeholder.jpeg"

const Card = (props) => {

    let navigate = useNavigate();

    const getImage = (imagePath) => {
        try {
          return require(`./assets/${imagePath.trim()}/one.jpg`);
        } catch (err) {

            return require(`./assets/placeholder.jpeg`);
        }
      };

      const imageSrc = getImage(props.data.name);


    return (

        <div className="cardui card-shadow" onClick={() => {
            navigate(`/Info?tree=${props.data.name}`);
        }} style={{
            width: 250, height: 300, justifyContent: 'center', backgroundColor: '#FFFF', borderRadius: 6, position: 'relative', shadowColor: "#000",
            margin: 16,
        

            elevation: 4,
        }}    >
            <div className="imgcontainer" style={{ width: 250, height: 74 }}>
                <img src={imageSrc} style={{ width: 250, borderTopLeftRadius: 6, borderTopRightRadius: 6, height:170, objectFit:'cover'}} />
            </div>

            <p style={{ fontSize: 18, color: "#252525", fontWeight: 500, position: 'absolute', top: "64%", marginLeft: 16 }}>{props.data.name}</p>
            <p style={{ fontSize: 16, color: "#767676", fontWeight: 400, marginLeft: 16, position: 'absolute', top: "76%", fontStyle:'italic' }}>{props.data.scientificName}</p>

        </div>

    )
}



export default Card;