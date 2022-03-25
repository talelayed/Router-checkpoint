import * as React from 'react';
import { data } from '../data/data';
import YouTube from 'react-youtube';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import CardList from './cardList';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function CardDetails(props){
    const navigate = useNavigate();
    return(
        <div>
            <div style={{textAlign:"center", display:"grid"}}>
                {(data.filter(elt => props.id == elt.id)).map(elt=>((<>
                <YouTube videoId={elt.trailer}/>
                <p>{elt.desc}</p>
                <Button style={{fontFamily:"Verdana", fontSize:"10px",width:"20%", margin:"auto"}} onClick={()=>navigate('/')} variant="contained" endIcon={<SendIcon />}>
                 Back To Home
                </Button></>
                )))}
            </div>
        </div>
    )
}