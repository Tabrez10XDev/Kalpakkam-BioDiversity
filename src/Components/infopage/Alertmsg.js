import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import close from '../assets/close.svg';

const Alertmsg=()=>{
  const [open, setOpen] = React.useState(true);

  return (
   <div>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
             <img src={close} style={{width:24,height:24}}/>
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          This place is available in 360°
        </Alert>
      </Collapse>
      {/* <Button
        disabled={open}
        variant="outlined"
        onClick={() => {
          setOpen(true);
        }}
      >
        Re-open
      </Button> */}
      </div>
  
  );
}

export default Alertmsg;
