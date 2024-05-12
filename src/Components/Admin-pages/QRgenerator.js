import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import QRsearchbar from "./QRsearchbar";
import QRCode from "qrcode.react";
import { useState } from "react";


export default function QRgenerator({values}) {
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [selectedName, setSelectedName] = useState("Woodie")

  const handleDataSelection = (data) => {
    console.log("Done");
    setSelectedName(data)
    setSelectedData("https://biodiversity.srmist.edu.in/#/Info?tree="+data);
  };

  const handleDownloadQR = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = document.getElementById("generated-qr").toDataURL("image/png").replace("image/png", "image/octet-stream");

    downloadLink.download = selectedName+".png";
    document.body.appendChild(downloadLink);

    downloadLink.click();
    document.body.removeChild(downloadLink);

  };

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="neutral"
        onClick={() => setOpen(true)}
        style={{
          width: 100,
          height: 35,
          fontSize: 16,
          fontWeight: 500,
          backgroundColor: "#252525",
          color: "#fff",
          borderRadius: 8,
          marginTop: 12
        }}
      >
        Generate
      </Button>

      {/* Modal */}
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Sheet
          variant="outlined"
          sx={{
            width: "60%",
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
            height: "60%"
          }}
        >
          <ModalClose
          onClick={()=>setSelectedData(null)}
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
            Generate QR
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
            Search and select the uploaded data, then generate the QR code by clicking "Generate".
          </Typography>

          {/* QR search bar */}
          <div style={{ display:'flex',justifyContent:'center', alignItems:'center',marginTop:20}}>
          <QRsearchbar onSearch={handleDataSelection} options={values} />
          </div>

          {/* Generated QR code */}
          <div style={{ display:'flex',justifyContent:'center', alignItems:'center',marginTop:32}}>
          {selectedData && (
            <div id="generated-qr-div">
              <QRCode id="generated-qr" value={selectedData} size={200} />
            </div>
          )}
          </div>

          {/* Download button */}
          <div style={{ display:'flex',justifyContent:'center', alignItems:'center'}}>
          {selectedData && (
            <Button
              variant="contained"
              
              onClick={handleDownloadQR}
              style={{ marginTop: 20 ,background:'#252525',color:'#ffff'}}
            >
              Download QR
            </Button>
          )}
          </div>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
