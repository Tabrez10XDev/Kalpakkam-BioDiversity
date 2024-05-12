import React from "react";
import Delete from "../Admin-pages/assets/delete.svg"
import Edit from "../Admin-pages/assets/edit.svg"
import Techpark from "../Admin-pages/assets/Techpark.jpg"
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../FirebaseConfig";
import '../Admin-pages/Dashboard.css'
import UploadPlace from "./UploadPlace";
import MapcardUpload from "./MapcardUpload";

const Mapcard = ({ item, values, setPlacesList, }) => {

  const [open, setOpen] = React.useState(false);


  async function deletePlace() {
    deleteDoc(doc(db, "places", item.title)).then(() => {
      setPlacesList((current) =>
        current.filter((tree) => tree.title !== item.title)
      );
    }).catch((e) => {
      console.error(e);
    })
  }

  return (
    <div>
      <div className="mapadmincard" style={{ width: 330, height: 300, borderRadius: 20, backgroundColor: '#ffff', marginTop: 32 }}>
        <img src={("https://biodiversity.srmist.edu.in/assets/images/" + encodeURIComponent(item.title) + "Place." + encodeURIComponent(item.ext)).toString().replace("jpg", "jpeg")} style={{ width: 330, height: 180, borderTopLeftRadius: 20, borderTopRightRadius: 20, objectFit: 'cover' }} />
        <p style={{ fontSize: 12, fontWeight: 400, margin: 0, color: '#656565', textAlign: 'center' }}>{item.title}</p>
        <p style={{ fontSize: 18, fontWeight: 600, margin: 0, color: '#252525', textAlign: 'center' }}>{item.location}</p>

        <div style={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
          {/* <Button variant="contained" style={{background:'#656565',borderRadius:10,color:'#ffff'}}>Edit</Button>
            <Button variant="contained" style={{background:'#F25C6F',borderRadius:10,color:'#ffff'}}>Delete</Button> */}
          <img onClick={()=>{
            console.log(item)
            setOpen(true)}} src={Edit} style={{ width: 32, height: 32 }} />
          <img onClick={deletePlace} src={Delete} style={{ width: 32, height: 32 }} />


        </div>


      </div>
      <MapcardUpload item={item} values={values} setPlacesList={setPlacesList} open={open} setOpen={setOpen} />

    </div>
  )
}
export default Mapcard;