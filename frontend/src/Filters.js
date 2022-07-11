import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';
import './Filter.css'
import { useState } from 'react';
import axios from 'axios';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [{data},dispatch] = useStateValue();


  const [end_year,setEndyear] = useState("");
  const [country,setCountry] = useState("");
  const [region,setRegion] = useState("");
  const [pestle,setPestle] = useState("");
  const [sector,setSector] = useState("");
  const [topic,setTopic] = useState("");
  const [source,setSource] = useState("");

  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = ()=>{
    setOpen(false);
  }

  const applyFilters = async() => {
    const resp = await axios.get(`https://rocky-earth-98141.herokuapp.com/api/v1/data/filters?end_year=${end_year}&&country=${country}&&region=${region}&&source=${source}&&pestle=${pestle}&&topic=${topic}&&sector=${sector}`);
    const res = await resp.data.result;
    console.log(res);
    var groupby = (xs, key)=> {
      return xs.reduce((rv, x)=> {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {})
      
     
    };
    const finalObj = {};
    const charts = ["topic","country","region","intensity","relevance","end_year"];
    charts.forEach(e => {
      const result = groupby(res,e);
      for(let e in result)
      {
        result[e] = result[e].length;
      }
      finalObj[e] = result;
      
    });
    dispatch({type:actionTypes.type,
    data:finalObj})
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} >
        Filters
      </Button>
      <Dialog 
        className='filters'
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Filters"}</DialogTitle>
        <DialogContent >
          <div className='filter-container'>
            <TextField id="outlined-basic" label="End year" variant="outlined" value={end_year} onChange={e=>{setEndyear(e.target.value)}} />
            <TextField id="outlined-basic" label="Country" variant="outlined" value={country} onChange={e=>{setCountry(e.target.value)}}/>
            <TextField id="outlined-basic" label="Region" variant="outlined" value={region} onChange={e=>{setRegion(e.target.value)}}/>
            <TextField id="outlined-basic" label="Source" variant="outlined" value={source} onChange={e=>{setSource(e.target.value)}}/>
            <TextField id="outlined-basic" label="Topic" variant="outlined" value={topic} onChange={e=>{setTopic(e.target.value)}}/>
            <TextField id="outlined-basic" label="Sector" variant="outlined" value={sector} onChange={e=>{setSector(e.target.value)}}/>
            <TextField id="outlined-basic" label="Pestle" variant="outlined" value={pestle} onChange={e=>{setPestle(e.target.value)}}/>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={applyFilters}>Apply</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}