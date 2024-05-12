import React from "react";
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';



 const Imageviewer=()=>{

    


    return(
        <div>

          <ReactPhotoSphereViewer src="360img.jpg" height={'100vh'} width={"100%"}></ReactPhotoSphereViewer>

        </div>
    )
 }
 export default Imageviewer