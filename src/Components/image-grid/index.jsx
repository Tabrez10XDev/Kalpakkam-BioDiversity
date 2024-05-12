import { useState, useEffect } from "react";

// External
import { layoutId } from "framer-motion";
import { useLockBodyScroll } from "react-use";

// Components
import SinglePicture from "./single-picture";


import { Grid } from "./styles";

import { db } from "../../FirebaseConfig";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";


const ImageGrid = ({ selectedImage, setSelectedImage }) => {

  const [places,setPlaces] = useState([{}])

  async function fetchPlaces() {
    let placesTemp = []
    const querySnapshot = await getDocs(collection(db, "places"));
    querySnapshot.forEach((doc) => {
        const data = doc.data()
        placesTemp.push(data)        
    });
    console.log(placesTemp);
        setPlaces(placesTemp)
    
}


useEffect(() => {
    fetchPlaces()
}, [])


  const [isScrollLocked, setScrollLocked] = useState(false);
  useLockBodyScroll(isScrollLocked);

  useEffect(() => {
    if (selectedImage !== -1) {
      setScrollLocked(true);
    } else {
      setScrollLocked(false);
    }
  }, [selectedImage]);

  return (
    <layoutId>
      <Grid>
        {places.map((data, index) => (
          <SinglePicture
            key={`${data.name}-${index}`}
            isSelected={selectedImage === index}
            index={index}
            setSelectedImage={setSelectedImage}
            data={data}
          />
        ))}
      </Grid>
    </layoutId>
  );
};

export default ImageGrid;
