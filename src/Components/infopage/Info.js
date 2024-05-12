import React, { useEffect } from 'react';
import './Info.css';
import Alert from './Alertmsg'
import Speech from 'react-speech';
import TextToSpeech from './TextToSpeech';
import Marquee from "react-fast-marquee";
import Classification from './Classification';
import { Button } from "@mui/material";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
// import Colors from './Colors'
import DetailsThumb from './DetailsThumb';
import Tabular from './Tabular';
import Chip from '@mui/material/Chip';
import Woodie from '../assets/woodie.png'
import Banner1 from '../assets/banner1.png';
import Banner2 from '../assets/banner2.png';
import Banner3 from '../assets/banner3.png';
import Banner4 from '../assets/banner4.png';
import Locationicon from '../assets/location.svg';
import { useSearchParams } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { doc, getDoc, collection, getDocs, updateDoc, increment } from "firebase/firestore";
import { db } from '../../FirebaseConfig';

import { useNavigate } from "react-router-dom";





const Info = () => {

  const navigate = useNavigate()

  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams();
  const [tree, setTree] = useState({})

  const [src, setSrc] = useState([
    ("https://biodiversity.srmist.edu.in/assets/images/" + encodeURIComponent(tree.name) + "." + encodeURIComponent(tree.ext1)).toString().replace("jpg", "jpeg"),
    ("https://biodiversity.srmist.edu.in/assets/images/" + encodeURIComponent(tree.name) + "2." + encodeURIComponent(tree.ext2)).toString().replace("jpg", "jpeg"),
    ("https://biodiversity.srmist.edu.in/assets/images/" + encodeURIComponent(tree.name) + "3." + encodeURIComponent(tree.ext3)).toString().replace("jpg", "jpeg"),
    ("https://biodiversity.srmist.edu.in/assets/images/" + encodeURIComponent(tree.name) + "4." + encodeURIComponent(tree.ext4)).toString().replace("jpg", "jpeg"),
  ])

  useEffect(() => {
    console.log(("https://biodiversity.srmist.edu.in/assets/images/" + encodeURIComponent(tree.name) + "." + encodeURIComponent(tree.ext1)).toString().replace("jpg", "jpeg"),
    )
    if (tree.name !== undefined) {
      setSrc([
        ("https://biodiversity.srmist.edu.in/assets/images/" + encodeURIComponent(tree.name.trim()) + "." + encodeURIComponent(tree.ext1)).toString().replace("jpg", "jpeg"),
        ("https://biodiversity.srmist.edu.in/assets/images/" + encodeURIComponent(tree.name) + "2." + encodeURIComponent(tree.ext2)).toString().replace("jpg", "jpeg"),
        ("https://biodiversity.srmist.edu.in/assets/images/" + encodeURIComponent(tree.name) + "3." + encodeURIComponent(tree.ext3)).toString().replace("jpg", "jpeg"),
        ("https://biodiversity.srmist.edu.in/assets/images/" + encodeURIComponent(tree.name) + "4." + encodeURIComponent(tree.ext4)).toString().replace("jpg", "jpeg"),
      ])
    }
  }, [tree])

  const myRef = React.createRef();

  const handleTab = (index) => {
    setIndex(index)
    console.log(index);
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };


  const increaseFieldByOne = async (fieldToUpdate) => {
    try {
      const docRef = doc(db, 'stats', "scanned");
      await updateDoc(docRef, {
        [fieldToUpdate]: increment(1),
      });
      console.log('Field updated successfully!');
    } catch (error) {
      console.error('Error updating field:', error);
    }
  };

  useEffect(() => {
    if (location.state !== null) {
      setTree(location.state)
    } else {
      const tree = searchParams.get("tree")
      console.log("******")
      console.log(tree)
      const docRef = doc(db, "trees", tree);
      getDoc(docRef).then((doc) => {
        setTree(doc.data())
      })
      increaseFieldByOne(tree)


    }


  }, [])

  const [index, setIndex] = useState(0)
  const products = [{}]
  return (


    <div className="app"
    >
      <div className="details"
      // key={item._id}
      > 
        <div onClick={() => { navigate("/") }} className={'titleheader'} style={{ position: 'sticky', top: 0, width: "100%", zIndex: 8 }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <img src={Woodie} style={{ height: 55, width: 55, paddingRight: 20 }} />
            <h3 style={{ textAlign: 'center' }}>{tree.name}</h3>
          </div>
          {tree.modalUri !== "" && tree.modalUri !== undefined && <Alert />}
        </div>
        <div className="big-img">
          <img src={src[index]} alt="" />
        </div>
        <div>
          <DetailsThumb images={src} tab={handleTab} myRef={myRef} />
        </div>


        <div className="box">




          {/* <Colors colors={item.colors} /> */}


          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', marginLeft: 16 }} >
            <img src={Locationicon} style={{ width: 32, height: 32 }} />
            <p style={{ fontSize: 14, color: '#656565' }}>{tree.location != "" ? tree.location : "Location not provided"}</p>
          </div>

          <div className={'infobox'} style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap' }}>

            <div className={'infocard'} style={{ borderRadius: 12, justifyContent: 'center', marginTop: 32, height: 200, width: 160 }}>
              <img src={Banner1} style={{ width: 160, height: 100, objectFit: 'cover', borderTopLeftRadius: 12, borderTopRightRadius: 12 }} />
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Chip label="Common Name" style={{ fontSize: 12, backgroundColor: '#EEEE', color: '#252525', position: 'relative', top: -20 }} />
              </div>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#656565', textAlign: 'center', position: 'relative', top: -20 }}> {tree['commonName']}</p>
            </div>

            <div className={'infocard'} style={{ borderRadius: 12, justifyContent: 'center', marginTop: 32, height: 200, width: 160 }}>
              <img src={Banner2} style={{ width: 160, height: 100, objectFit: 'cover', borderTopLeftRadius: 12, borderTopRightRadius: 12 }} />
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Chip label="Tamil Name" style={{ fontSize: 12, backgroundColor: '#EEEE', color: '#252525', position: 'relative', top: -20 }} />
              </div>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#656565', textAlign: 'center', position: 'relative', top: -20 }}> {tree['tamilName']}</p>
            </div>

            <div className={'infocard'} style={{ borderRadius: 12, justifyContent: 'center', marginTop: 32, height: 200, width: 160 }}>
              <img src={Banner3} style={{ width: 160, height: 100, objectFit: 'cover', borderTopLeftRadius: 12, borderTopRightRadius: 12 }} />
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Chip label="Scientific Name" style={{ fontSize: 12, backgroundColor: '#EEEE', color: '#252525', position: 'relative', top: -20 }} />
              </div>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#656565', textAlign: 'center', position: 'relative', top: -20, fontStyle:'italic' }}> {tree['scientificName']}</p>
            </div>

            <div className={'infocard'} style={{ borderRadius: 12, justifyContent: 'center', marginTop: 32, height: 200, width: 160 }}>
              <img src={Banner4} style={{ width: 160, height: 100, objectFit: 'cover', borderTopLeftRadius: 12, borderTopRightRadius: 12 }} />
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Chip label="Family" style={{ fontSize: 12, backgroundColor: '#EEEE', color: '#252525', position: 'relative', top: -20 }} />
              </div>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#656565', textAlign: 'center', position: 'relative', top: -20 }}> {tree['family']}</p>
            </div>



          </div>


          <div style={{ marginRight: 16, marginLeft: 16, marginTop: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

              <p style={{ fontSize: 16, fontWeight: 500, justifyItems: 'center' }}>Description</p>

              <TextToSpeech text={tree.botanicalDes} />
            </div>
            <p style={{ color: '#656565', textAlign:'justify' }}>{tree.botanicalDes}</p>
            <p style={{ fontSize: 16, fontWeight: 500, }}>Uses</p>
            <p style={{ color: '#656565', textAlign:'justify' }}>{tree.uses}</p>
          </div>
        </div>
      </div>




      <p style={{ fontSize: 18, fontWeight: 600, marginLeft: 20 }}>Classification</p>
      <p style={{ fontSize: 16, fontWeight: 400, marginLeft: 20, marginRight: 20, color: '#656565' }}> Linnaeus' hierarchical system of classification includes seven levels. They are, from largest to smallest</p>

      <Marquee direction="right" pauseOnClick="True" style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', paddingTop: 20, paddingBottom: 20 }}>

        <Classification title='Kingdom' class={tree['kingdom']} />
        <Classification title='Phylum' class={tree['phylum']} />
        <Classification title='Class' class={tree['class']} />
        <Classification title='Order' class={tree['order']} />
        <Classification title='Family' class={tree['family']} />
        <Classification title='Genus' class={tree['genus']} />
        <Classification title='Species' class={tree['species']} />
      </Marquee>

      {tree.modalUri !== "" && tree.modalUri !== undefined && <Tabular />}
    </div>
  );




}






export default Info;