import { useState, useEffect } from "react";

// External
import { useLockBodyScroll } from "react-use";

// Components
import SinglePicture from "./single-picture";


import { Grid } from "./styles";



const ImageGrid = ({ selectedImage, setSelectedImage }) => {

  const [places,setPlaces] = useState([{}])

  async function fetchPlaces() {
 
    
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
