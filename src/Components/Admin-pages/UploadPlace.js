import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Textarea from '@mui/joy/Textarea';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState, useEffect } from 'react'
import Multiselect from 'multiselect-react-dropdown';
import { db } from "../../FirebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import mockup from '../Admin-pages/assets/mockup.mp4'
import axios from 'axios';

export default function UploadPlace(props) {

  async function uploadImage() {
    if (state.title.trim().length == 0) {
        handleOpen("Fill the name before proceeding")
        return
    }
    let data = new FormData();
    data.append("image", image)
    let config = {
        method: 'post',
        url: 'https://biodiversity.srmist.edu.in/api/upload',
        headers: {
            'name': state.title + "Place",
        },
        data: data
    };
    try {

        await axios.request(config)
        setState({})
        handleOpen("Success")


    } catch (e) {
        console.error(e)
        handleOpen("Unknown error occured")

    }
}

  const [openSnack, setOpenSnack] = useState(false);
  const [message, setMessage] = useState("")
  const [image, setImage] = useState()

  const handleClose = () => {
      setOpenSnack(false);
  };

  const handleOpen = (message) => {
      if(message == "Success"){
          setSeverity("success")
      }else{
          setSeverity("error")
      }
      setMessage(message)
      setOpenSnack(true);
  };

  const [open, setOpen] = React.useState(false);
  const [state, setState] = useState({})
  let options = []
  console.log(props.values)
  props.values.map((ele,index)=>{
    if(ele !== undefined)
    options.push({name: ele, id: index+1})
  })
  const [selectedValues, setSelectedValues] = useState([])
  const [severity, setSeverity] = useState("info")


  function onSelect(selectedList, selectedItem) {
    setSelectedValues(selectedList)
  }

  function onRemove(selectedList, removedItem) {
    setSelectedValues(selectedList)
  }


  async function uploadPlace() {
    // try {
      let temp = []
      selectedValues.map((ele)=>{
        temp.push(ele.name)
      })
        const userObj = {
            title: state.title.trim(),
            location: state.location,
            tags: temp,
            ext: image.name.split(".").pop()
        }
        const treeRef = doc(db, 'places', state.title);
       await setDoc(treeRef, userObj, { merge: true });
       await uploadImage()
       props.setPlacesList(oldArray => [...oldArray, userObj]);


        handleOpen("Success")

        setOpen(false)
    // } catch (e) {
    //     handleOpen("Unknown error occured")
    //     console.error(e);

    // }
}


  return (
    <React.Fragment>
      <Button variant="contained" color="neutral" style={{background:'#252525',color:'#ffff',paddingRight:20,paddingLeft:20}} onClick={() => setOpen(true)}>
        Upload
      </Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: '50%',
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
            padding:10
          }}
        >
          <ModalClose
            variant="outlined"
            sx={{
              top: 'calc(-1/4 * var(--IconButton-size))',
              right: 'calc(-1/4 * var(--IconButton-size))',
              boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
              borderRadius: '50%',
              bgcolor: 'background.body',
            }}
          />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            Upload Hotspot
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
            Upload the Title of the hotspot and the nearby greeneries

          </Typography>

          <div style={{ marginTop: 20, width: 600 }}>
            <FormControl>
              <FormLabel>Department/Block/Campus</FormLabel>
              <Textarea value={state.title} onChange={(e) => { setState(current=> ({...current, title: e.target.value}))}} placeholder="Enter Title" minRows={1} maxRows={1} />
              {/* <FormHelperText>This is a helper text.</FormHelperText> */}
            </FormControl>
          </div>

          <div style={{ marginTop: 20, width: 600 }}>
            <FormControl>
              <FormLabel>Hotspot name</FormLabel>
              <Textarea value={state.location} onChange={(e) => { setState(current=> ({...current, location: e.target.value}))}} placeholder="Enter Location" minRows={1} maxRows={1} />
              {/* <FormHelperText>This is a helper text.</FormHelperText> */}
            </FormControl>
          </div>
          <Multiselect
            style={{chips:{background:'black'}, option: {color:'black'}, multiselectContainer:{width:600, marginTop:20}, }}
            options={options} 
            selectedValues={selectedValues} 
            onSelect={onSelect} 
            onRemove={onRemove} 
            displayValue="name" 
          />
          <input
             
            accept="image/*"
            className=""
            id="raised-button-file"
            multiple
            onChange={(event) => {
              if (!event.target.files) return
              setImage(event.target.files[0])
            }}
            type="file"
          />
          <label htmlFor="raised-button-file">
            <Button onClick={() => { uploadPlace() }} style={{ background: '#252525', color: '#fff', marginTop: 16 }}>
              Upload
            </Button>
          </label>


        </Sheet>
      </Modal>
      <Snackbar anchorOrigin={{horizontal: 'center', vertical:'bottom' }}
                sx={{ width: '60%', minWidth: '300px' }} open={openSnack} autoHideDuration={3000} onClose={handleClose}>
                <MuiAlert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                    {message}
                </MuiAlert>
            </Snackbar>
    </React.Fragment>
  );
}
