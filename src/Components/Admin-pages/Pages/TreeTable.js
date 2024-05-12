import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Button, TablePagination } from "@mui/material";
import Paper from "@material-ui/core/Paper";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../FirebaseConfig.js";
import CreationPage from "../CreationPage.js";
import Search from '../assets/Search.svg'
import { Container, InputAdornment, TextField, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import QRCode from "qrcode.react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const TreeTable = (props) => {
  const classes = useStyles();
  const [treeList, setTreeList] = useState(props.treeList)
  const [selectedData, setSelectedData] = useState("null")

  const [rows, setRows] = useState(treeList);
  const [pg, setpg] = useState(0);
  const [rpg, setrpg] = useState(5);
  const [searchText, setSearchText] = useState("")
  console.log(treeList)



  React.useEffect(() => {
    const getData = setTimeout(() => {
      console.log("hii")
      const filteredRows = treeList.filter((row) => {
        return row.name ? row.name.toLowerCase().includes(searchText.toLowerCase()) : [];
      });
      setRows(filteredRows);
      setpg(0)
    }, 500)
  }, [searchText])


  function handleChangePage(event, newpage) {
    setpg(newpage);
  }

  async function deleteTree(name) {
    console.log(name)
    // deleteDoc(doc(db, "trees", name)).then(() => {
    //   setTreeList((current) =>
    //     current.filter((tree) => tree.name !== name)
    //   );
    //   setRows((current) =>
    //     current.filter((tree) => tree.name !== name)
    //   );
    // }).catch((e) => {
    //   console.error(e);
    // })
  }

  function handleChangeRowsPerPage(event) {
    setrpg(parseInt(event.target.value, 10));
    setpg(0);
  }

  const handleDownloadQR = (name) => {
    var resizedCanvas = document.createElement("canvas");
    var resizedContext = resizedCanvas.getContext("2d");

    resizedCanvas.height = "200";
    resizedCanvas.width = "200";
    setTimeout(() => {
      var canvas = document.getElementById("generated-qr2");
      resizedContext.drawImage(canvas, 0, 0, 200, 200);

      const downloadLink = document.createElement("a");
      downloadLink.href = canvas.toDataURL("image/png");
      downloadLink.download = name + ".png";
      downloadLink.click();
    }, 1000);

  };
  const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

  return (
    <div style={{ marginLeft: 20, marginRight: 20, paddingTop: 100 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: 20, marginRight: 20 }}>
        <p style={{ fontSize: 24, fontWeight: 600, color: '#656565', margin: 0 }}> Woodie Datas</p>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Container >
            <TextField
            
              color="grey"
              id="search"
              type="search"
              label="Search"
              size="small"
              // className={classes.textField}
              
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}

              sx={{
                width: 300,
                '& .MuiInputBase-root': {
                  borderRadius:6,
                },
              }}
              InputProps={{
                // className: classes.input,
                endAdornment: (
                  <InputAdornment  position="end" >
                    <SearchIcon />

                  </InputAdornment>
                ),
              }}
            />
          </Container>
          <CreationPage title="Upload" setTreeList={setTreeList} setRows={setRows} />
        </div>
      </div>


      <Paper style={{ marginTop: 54, borderRadius: 20 }}>

        <TableContainer style={{ width: '100%', borderRadius: 20 }}>
          <Table className={classes.table} aria-label="simple table" style={{ width: 3000 }}>
            <TableHead style={{ backgroundColor: '#252525', height:45}}>
              <TableRow style={{ width: 45 }}>
                <TableCell align=""> <p style={{ color: '#fff',padding:0,margin:0}}><b>Name</b></p></TableCell>
                <TableCell align="center"> <p style={{ color: '#fff' ,padding:0,margin:0}}><b>Sci- Name</b></p></TableCell>
                <TableCell align="center" > <p style={{ color: '#fff' ,padding:0,margin:0}}><b>Location</b></p></TableCell>
                <TableCell align="center" > <p style={{ color: '#fff',padding:0,margin:0}}><b>Common Name</b></p></TableCell>
                <TableCell align="center" > <p style={{ color: '#fff' ,padding:0,margin:0}}><b>Tamil Name</b></p></TableCell>
                <TableCell align="center" > <p style={{ color: '#fff' ,padding:0,margin:0}}><b>Family</b></p></TableCell>
                <TableCell align="center"> <p style={{ color: '#fff' ,padding:0,margin:0}}><b>Description</b></p></TableCell>
                <TableCell align="center"> <p style={{ color: '#fff' ,padding:0,margin:0}}><b>Uses</b></p></TableCell>
                <TableCell align="center" > <p style={{ color: '#fff',padding:0 ,margin:0}}><b>Kingdom</b></p></TableCell>
                <TableCell align="center" > <p style={{ color: '#fff',padding:0,margin:0 }}><b>Phylum</b></p></TableCell>
                <TableCell align="center" > <p style={{ color: '#fff' ,padding:0,margin:0}}><b>Class</b></p></TableCell>
                <TableCell align="center" > <p style={{ color: '#fff' ,padding:0,margin:0}}><b>Order</b></p></TableCell>
                <TableCell align="center" > <p style={{ color: '#fff' ,padding:0,margin:0}}><b>Genus</b></p></TableCell>
                <TableCell align="center" > <p style={{ color: '#fff' ,padding:0,margin:0}}><b>Species</b></p></TableCell>
                <TableCell align="center" > <div></div></TableCell>
                <TableCell align="center" > <div></div></TableCell>
                <TableCell align="center" > <div></div></TableCell>


              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(pg * rpg, pg * rpg + rpg).map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row" width="120"> {row.name} </TableCell>
                  <TableCell align="left">{row.scientificName}</TableCell>
                  <TableCell align="left">{row.location}</TableCell>
                  <TableCell align="left">{row.commonName}</TableCell>
                  <TableCell align="left">{row.tamilName}</TableCell>
                  <TableCell align="left">{row.family}</TableCell>
                  <TableCell align="left" width="600">{row.botanicalDes}</TableCell>
                  <TableCell align="left" width="600">{row.uses}</TableCell>
                  <TableCell align="left">{row.kingdom}</TableCell>
                  <TableCell align="left">{row.phylum}</TableCell>
                  <TableCell align="left">{row.class}</TableCell>
                  <TableCell align="left">{row.order}</TableCell>
                  <TableCell align="left">{row.genus}</TableCell>
                  <TableCell align="left">{row.species}</TableCell>
                  <TableCell align="left">

                    
                    <Button variant="contained"  onClick={handleClickOpen} style={{ background: '#F25C6F', borderRadius: 6, height: 32, width: 80, marginTop: 0 }}>Delete</Button>    
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"    
                        >
                            <DialogTitle id="alert-dialog-title">
                            {"Delete Confirmation"}
                            </DialogTitle>
                            <DialogContent >
                            <DialogContentText id="alert-dialog-description">
                               Are you sure you want to delete this Data permanently from the Woodie ?
                            </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleClose} style={{background:'#EEEE',color:'#656565'}} >Cancel</Button>
                            <Button  onClick={() => { deleteTree(row.name) }}  autoFocus style={{background:'#F25C6F',color:'#ffff'}}>
                                Delete
                            </Button>
                            </DialogActions>
                        </Dialog>

                        

                  </TableCell>
                  <TableCell align="center">

                    <button  onClick={() => {
                      setSelectedData("https://biodiversity.srmist.edu.in/#/Info?tree=" + row.name);
                      handleDownloadQR(row.name)
                    }} style={{ background: '#252525', borderRadius: 6, height: 32, marginTop:0,width:100,color:'#ffff'}}>Generate QR</button>

                  </TableCell>

                  <TableCell align="center">

                  <CreationPage title="Edit" setTreeList={setTreeList} setRows={setRows} row={row} />

                  </TableCell>



                </TableRow>
              ))}
            </TableBody>
          </Table>
          

        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rpg}
          page={pg}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <div  style={{ width: "100%",height:500 ,
              backgroundImage: "url(/QRcover.jpg)",
              backgroundSize: 'cover', 
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              marginTop:80,
              borderRadius:32
              
              }} >

      <div className="qrexplains" style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}> 

      <p style={{fontSize:32,color:'#ffff',fontWeight:600}}>QR Example</p>

      <QRCode style={{}} id="generated-qr2" value={selectedData} size={200} />

      <p style={{fontSize:18,color:'#eeee',fontWeight:400,textAlign:'center',marginTop:32}}>The above QR is a example of the QR which will be downloaded <br/>once you click on the Generate QR button</p>

      </div>
      </div>


    </div>
  );
};

// const styles = theme => ({
//   textField: {
//       width: 700,
//       borderRadius:20,
//       fontWeight: 500
//   },
//   input: {
//       color: 'white'
//   }
// });

export default TreeTable;
