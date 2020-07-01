import React from 'react'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Chip from '@material-ui/core/Chip';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
export default function JobModal(props) {
    // const [open, setOpen] = React.useState(false);  
    // const handleOpen = () => {
    //     setOpen(true);
    //   };
    
    //   const handleClose = () => {
    //     setOpen(false);
    //   };
    return (
        <div>
        <Dialog
          open={props.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={()=>props.setOpen(false)}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {props.job.title} - 
            {props.job.company}
            <img className={'detail-logo'} src={props.job.company_logo} alt='company-logo' />
          </DialogTitle>
          <DialogContent>
            <DialogContentText 
                id="alert-dialog-slide-description"
            >
              <Chip size="small" label={`from ${props.job.source}`} />
            </DialogContentText>
            <DialogContentText 
                id="alert-dialog-slide-description"
                dangerouslySetInnerHTML={{__html: props.job.description}}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>props.setOpen(false)} color="primary">
              Close
            </Button>
            <a href={props.job.url} rel="noopener noreferrer" target="_blank">
                <Button color="primary">
                Apply
                </Button>
            </a>
          </DialogActions>
        </Dialog>
      </div>
    )
}
