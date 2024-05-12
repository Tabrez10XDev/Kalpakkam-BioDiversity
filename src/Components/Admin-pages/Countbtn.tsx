import * as React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
import Add from '@mui/icons-material/Add';
import Typography from '@mui/joy/Typography';
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../../FirebaseConfig';

export default function BasicModalDialog(props) {
  const [open, setOpen] = React.useState<boolean>(false);
  const [count, setCount] = React.useState(props.count)

  function updateCount() {
    const countRef = doc(db, "stats", "totalCount");
    updateDoc(countRef, {[props.title]: count});
    props.setCount({...props.currentCount, [props.title]: count })
    setOpen(false)
  }
  

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="neutral"
        // startDecorator={<Add/>}
        onClick={() => setOpen(true)}
        style={{ width: 75, backgroundColor: '#1B4A35', color: '#fff'}}
      >
        Update
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{ maxWidth: 500 }}
        >
          <Typography id="basic-modal-dialog-title" component="h2">
            Update
          </Typography>
          <Typography id="basic-modal-dialog-description" textColor="text.tertiary">
            Fill in the Total count
          </Typography>
          <form
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Count</FormLabel>
                <Input value={count ?? '0'} onChange={(e) => { setCount(e.target.value) }} autoFocus required />
              </FormControl>

              <Button onClick={()=>{updateCount()}}>Update</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
