import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Textarea from '@mui/joy/Textarea';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState, useEffect } from 'react'
import { db } from "../../FirebaseConfig";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import axios from 'axios'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


export default function CreationPage(props) {
    const [type, setType] = React.useState('');

    const [name, setName] = useState("")
    const [scientificName, setScientificName] = useState("")
    const [location, setLocation] = useState("")
    const [commonName, setCommonName] = useState("")
    const [tamilName, setTamilName] = useState("")
    const [family, setFamily] = useState("")
    const [botanicalDes, setBotanicalDes] = useState("")
    const [uses, setUses] = useState("")
    const [kingdom, setKingdom] = useState("")
    const [phylum, setPhylum] = useState("")
    const [_class, _setClass] = useState("")
    const [order, setOrder] = useState("")
    const [genus, setGenus] = useState("")
    const [species, setSpecies] = useState("")
    const [modalUri, setModalUri] = useState("")

    const [severity, setSeverity] = useState("success")

    async function updateExt() {
        const ref = doc(db, "trees", name);
        
        await setDoc(ref, {ext1: image.name.toLowerCase().split(".").pop(),ext2: image2.name.toLowerCase().split(".").pop(),ext3: image3.name.toLowerCase().split(".").pop(),ext4: image4.name.toLowerCase().split(".").pop()},{merge: true});
        handleOpen("Success")

      }

    async function uploadTree() {
        // console.log(type)
        try {
            const userObj = {
                name: name.trim(),
                scientificName: scientificName,
                location: location,
                commonName: commonName,
                tamilName: tamilName,
                family: family,
                botanicalDes: botanicalDes,
                uses: uses,
                kingdom: kingdom,
                phylum: phylum,
                class: _class,
                order: order,
                genus: genus,
                species: species,
                modaluri: modalUri ?? " ",
                type: type
            }
            const treeRef = doc(db, 'trees', name.trim());
            await setDoc(treeRef, userObj, { merge: true });
            props.setTreeList(oldArray => [...oldArray, userObj]);
            props.setRows(oldArray => [...oldArray, userObj]);

            //
            setName("")
            setScientificName("")
            setLocation("")
            setCommonName("")
            setTamilName("")
            setFamily("")
            setBotanicalDes("")
            setUses("")
            setKingdom("")
            setPhylum("")
            _setClass("")
            setOrder("")
            setGenus("")
            setSpecies("")
            setModalUri("")
            setType("")

            //

            setSeverity("success")

            handleOpen("Success")

            setOpen(false)
        } catch (e) {
            setSeverity("error")
            handleOpen("Unknown error occured")
            console.error(e);

        }
    }


    useEffect(() => {
        if (props.row != undefined && props.row != null) {
            setName(props.row.name)
            setScientificName(props.row.scientificName)
            setLocation(props.row.location)
            setCommonName(props.row.commonName)
            setTamilName(props.row.tamilName)
            setFamily(props.row.family)
            setBotanicalDes(props.row.botanicalDes)
            setUses(props.row.uses)
            setKingdom(props.row.kingdom)
            setPhylum(props.row.phylum)
            _setClass(props.row.class)
            setOrder(props.row.order)
            setGenus(props.row.genus)
            setSpecies(props.row.species)
            setModalUri(props.row.modalUri)
            setType(props.row.type)
        }

    }, [])


    const handleChange = (event) => {
        setType(event.target.value);
        // console.log(event.target.value)
    };

    async function uploadImages() {
        if (name.trim().length == 0) {
            handleOpen("Fill the name before proceeding")
            return
        }
        let data = new FormData();
        data.append("image", image)
        let config = {
            method: 'post',
            url: 'https://biodiversity.srmist.edu.in/api/upload',
            headers: {
                'name': name,
            },
            data: data
        };


        let data2 = new FormData();
        data2.append("image", image2)
        let config2 = {
            method: 'post',
            url: 'https://biodiversity.srmist.edu.in/api/upload',
            headers: {
                'name': name + "2",
            },
            data: data2
        };


        let data3 = new FormData();
        data3.append("image", image3)
        let config3 = {
            method: 'post',
            url: 'https://biodiversity.srmist.edu.in/api/upload',
            headers: {
                'name': name + "3",
            },
            data: data3
        };



        let data4 = new FormData();
        data4.append("image", image4)
        let config4 = {
            method: 'post',
            url: 'https://biodiversity.srmist.edu.in/api/upload',
            headers: {
                'name': name + "4",
            },
            data: data4
        };

        try {

            const promise1 = axios.request(config)
            const promise2 = axios.request(config2)
            const promise3 = axios.request(config3)
            const promise4 = axios.request(config4)

            Promise.all([promise1, promise2, promise3,promise4]).then((values) => {
                updateExt()

            }).catch ((e)=>{
                console.error(e)
                setSeverity("error")
                handleOpen("Unknown error occured")
    
            });


        } catch (e) {
            console.error(e)
            setSeverity("error")
            handleOpen("Unknown error occured")

        }
    }

    async function uploadPano() {
        if (name.trim().length == 0) {
            handleOpen("Fill the name before proceeding")
            return
        }
        let data = new FormData();
        data.append("image", panoImage)
        let config = {
            method: 'post',
            url: 'https://biodiversity.srmist.edu.in/api/upload',
            headers: {
                'name': name + "Pano",
            },
            data: data
        };
        try {

            await axios.request(config)
            setModalUri(true)
            handleOpen("Success")

        } catch (e) {
            console.error(e)
            handleOpen("Unknown error occured")

        }
    }

    const [panoImage, setPanoImage] = useState("")
    const [image, setImage] = useState("")
    const [image2, setImage2] = useState("")
    const [image3, setImage3] = useState("")
    const [image4, setImage4] = useState("")
    const [message, setMessage] = useState("")

    const [openSnack, setOpenSnack] = useState(false);

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
    return (
        <React.Fragment>
            <Button variant="outlined" color="neutral" onClick={() => setOpen(true)} style={{ width: 100, height: 35, fontSize: 16, fontWeight: 500, backgroundColor: '#252525', color: '#fff', borderRadius: 8 }}>
                {props.title}
            </Button>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={() => setOpen(false)}
                sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}
            >
                <Sheet
                    variant="outlined"
                    sx={{

                        width: "90%",

                        borderRadius: "md",
                        p: 3,
                        boxShadow: "lg",
                        height: '90%'
                    }}
                >

                    <ModalClose
                        variant="outlined"
                        sx={{
                            top: "calc(-1/4 * var(--IconButton-size))",
                            right: "calc(-1/4 * var(--IconButton-size))",
                            boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
                            borderRadius: "50%",
                            bgcolor: "background.body"
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
                        Upload new data
                    </Typography>
                    <Typography id="modal-desc" textColor="text.tertiary">
                        Fill all the field To avoid unwanted Server error
                        which may lead to server down.
                    </Typography>

                    <div className="input-container" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>

                        <div className="inputRow-1">

                            <div style={{ marginTop: 20, width: 300 }}>
                                <FormControl>
                                    <FormLabel>Name</FormLabel>
                                    <Textarea value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Enter Name here" minRows={1} maxRows={1} />
                                    {/* <FormHelperText>This is a helper text.</FormHelperText> */}
                                </FormControl>
                            </div>
                            <div style={{ marginTop: 20, width: 300 }}>
                                <FormControl>
                                    <FormLabel>Location</FormLabel>
                                    <Textarea value={location} onChange={(e) => { setLocation(e.target.value) }} placeholder="Inside Campus" minRows={1} maxRows={1} />
                                    {/* <FormHelperText>This is a helper text.</FormHelperText> */}
                                </FormControl>
                            </div>
                            <div style={{ marginTop: 20, width: 300 }}>
                                <FormControl>
                                    <FormLabel>Scientific Name</FormLabel>
                                    <Textarea value={scientificName} onChange={(e) => { setScientificName(e.target.value) }} placeholder="Use Italic font" minRows={1} maxRows={1} />
                                    {/* <FormHelperText>This is a helper text.</FormHelperText> */}
                                </FormControl>
                            </div>
                            <div style={{ marginTop: 20, width: 300 }}>
                                <FormControl>
                                    <FormLabel>Common Name</FormLabel>
                                    <Textarea value={commonName} onChange={(e) => { setCommonName(e.target.value) }} placeholder="" minRows={1} maxRows={1} />
                                    {/* <FormHelperText>This is a helper text.</FormHelperText> */}
                                </FormControl>
                            </div>
                            <div style={{ marginTop: 20, width: 300 }}>
                                <FormControl>
                                    <FormLabel>Tamil Name</FormLabel>
                                    <Textarea value={tamilName} onChange={(e) => { setTamilName(e.target.value) }} placeholder="" minRows={1} maxRows={1} />
                                    {/* <FormHelperText>This is a helper text.</FormHelperText> */}
                                </FormControl>
                            </div>
                            <div style={{ marginTop: 20, width: 300 }}>
                                <FormControl>
                                    <FormLabel>Family</FormLabel>
                                    <Textarea value={family} onChange={(e) => { setFamily(e.target.value) }} placeholder="" minRows={1} maxRows={1} />
                                    {/* <FormHelperText>This is a helper text.</FormHelperText> */}
                                </FormControl>
                            </div>
                        </div>

                        <div className="inputRow-2" style={{marginLeft: 24}}>

                            <div style={{ marginTop: 20, width: 300 }}>
                                <FormControl>
                                    <FormLabel>Description</FormLabel>
                                    <Textarea value={botanicalDes} onChange={(e) => { setBotanicalDes(e.target.value) }} placeholder="Enter here" minRows={2} maxRows={3} />
                                    {/* <FormHelperText>This is a helper text.</FormHelperText> */}
                                </FormControl>
                            </div>
                            <div style={{ marginTop: 20, width: 300 }}>
                                <FormControl>
                                    <FormLabel>Uses</FormLabel>
                                    <Textarea value={uses} onChange={(e) => { setUses(e.target.value) }} placeholder="Enter here" minRows={2} maxRows={3} />
                                    {/* <FormHelperText>This is a helper text.</FormHelperText> */}
                                </FormControl>
                            </div>
                            <div style={{ marginTop: 20, width: 300 }}>
                                <FormControl>
                                    <FormLabel>Kingdom</FormLabel>
                                    <Textarea value={kingdom} onChange={(e) => { setKingdom(e.target.value) }} placeholder="" minRows={1} maxRows={1} />
                                    {/* <FormHelperText>This is a helper text.</FormHelperText> */}
                                </FormControl>
                            </div>
                            <div style={{ marginTop: 20, width: 300 }}>
                                <FormControl>
                                    <FormLabel>Phylum</FormLabel>
                                    <Textarea value={phylum} onChange={(e) => { setPhylum(e.target.value) }} placeholder="" minRows={1} maxRows={1} />
                                    {/* <FormHelperText>This is a helper text.</FormHelperText> */}
                                </FormControl>
                            </div>
                            <div style={{ marginTop: 20, width: 300 }}>
                                <FormControl>
                                    <FormLabel>Class</FormLabel>
                                    <Textarea value={_class} onChange={(e) => { _setClass(e.target.value) }} placeholder="" minRows={1} maxRows={1} />
                                    {/* <FormHelperText>This is a helper text.</FormHelperText> */}
                                </FormControl>
                            </div>

                        </div>

                        <div className="inputRow-3" style={{marginLeft: 24}}>

                            <div style={{ marginTop: 20, width: 300 }}>
                                <FormControl>
                                    <FormLabel>Genus</FormLabel>
                                    <Textarea value={genus} onChange={(e) => { setGenus(e.target.value) }} placeholder="" minRows={1} maxRows={1} />
                                    {/* <FormHelperText>This is a helper text.</FormHelperText> */}
                                </FormControl>
                            </div>

                            <div style={{ marginTop: 20, width: 300 }}>
                                <FormControl>
                                    <FormLabel>Order</FormLabel>
                                    <Textarea value={order} onChange={(e) => { setOrder(e.target.value) }} placeholder="" minRows={1} maxRows={1} />
                                    {/* <FormHelperText>This is a helper text.</FormHelperText> */}
                                </FormControl>
                            </div>

                            <div style={{ marginTop: 20, width: 300 }}>
                                <FormControl>
                                    <FormLabel>Species</FormLabel>
                                    <Textarea value={species} onChange={(e) => { setSpecies(e.target.value) }} placeholder="" minRows={1} maxRows={1} />
                                    {/* <FormHelperText>This is a helper text.</FormHelperText> */}
                                </FormControl>
                            </div>



                            <Typography id="modal-desc" textColor="text.tertiary" style={{ marginTop: 20 }}>
                                Upload 4 images for this Flora
                            </Typography>

                            <input
                                accept="image/*"
                                className=""
                                id="raised-button-file"
                                multiple
                                onChange={(event) => {
                                    if (!event.target.files) return
                                    console.log(event.target.files[0].name.split('.').pop())
                                    setImage(event.target.files[0])
                                }}
                                type="file"
                            />
                            <input
                                accept="image/*"
                                className=""
                                id="raised-button-file"
                                multiple
                                onChange={(event) => {
                                    if (!event.target.files) return
                                    setImage2(event.target.files[0])
                                }}
                                type="file"
                            />
                            <input
                                accept="image/*"
                                className=""
                                id="raised-button-file"
                                multiple
                                onChange={(event) => {
                                    if (!event.target.files) return
                                    setImage3(event.target.files[0])
                                }}
                                type="file"
                            />
                            <input
                                accept="image/*"
                                className=""
                                id="raised-button-file"
                                multiple
                                onChange={(event) => {
                                    if (!event.target.files) return
                                    setImage4(event.target.files[0])
                                }}
                                type="file"
                            />
                            <label htmlFor="raised-button-file">
                                <Button onClick={() => { uploadImages() }}variant="outlined"style={{color: '#252525', marginTop: 16,borderColor:'#252525' }}>
                                    Upload
                                </Button>
                            </label>


                            <Typography id="modal-desc" textColor="text.tertiary" style={{ marginTop: 20 }}>
                                Upload 360° image if available
                            </Typography>

                            <input
                                accept="image/*"
                                id="raised-button-file"
                                multiple
                                onChange={(event) => {
                                    if (!event.target.files) return
                                    setPanoImage(URL.createObjectURL(event.target.files[0]))
                                }}
                                type="file"
                            />
                            <label htmlFor="raised-button-file">
                                <Button onClick={() => { uploadPano() }} variant="outlined" style={{color: '#252525', marginTop: 16,borderColor:'#252525' }}>
                                    Upload
                                </Button>
                            </label>

                            <div style={{ marginTop: 20 }}>
                                <FormControl sx={{ width: 200 }} >

                                    <InputLabel  id="demo-select-small-label">Type</InputLabel>
                                    <Select
                                        labelId="demo-select-small-label"
                                        id="demo-select-small"
                                        value={type}
                                        size="small"
                                        label="Age"
                                        

                                        
                                        onChange={handleChange}
                                    >


                                        <MenuItem value="">
                                        </MenuItem>
                                        <MenuItem value="Trees">Trees</MenuItem>
                                        <MenuItem value="Palm">Palm</MenuItem>
                                        <MenuItem value="Climbers">Climbers</MenuItem>
                                        <MenuItem value="Creepers">Creepers</MenuItem>
                                        <MenuItem value="Flowering Shurbs">Flowering Shurbs</MenuItem>
                                        <MenuItem value="Foliage Shurbs">Foliage Shurbs</MenuItem>
                                        <MenuItem value="Medicinal Plants">Medicinal Plants</MenuItem>
                                        <MenuItem value="Indoor Plants">Indoor Plants</MenuItem>


                                    </Select>
                                </FormControl>
                            </div>
                        </div>


                    </div>

                    <label htmlFor="raised-button-file">
                        <Button onClick={() => {
                            uploadTree()
                        }} style={{ background: '#252525', color: '#fff', position: 'absolute', bottom: 40, right: 40, width: 160 }}>
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
