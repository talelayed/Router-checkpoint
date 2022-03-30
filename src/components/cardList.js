import {data} from './../data/data'
import CardItem from './card';
import { Route, Routes, useNavigate } from 'react-router-dom';
export default function CardList(){
    const navigate = useNavigate()
    const goTo = (id) =>{
      navigate('/cardDetail/'+id)
    }
    return(
        <div style={{display:"grid", gridColumnGap:"15px" ,gridTemplateColumns:"repeat(4,1fr)",gridRowGap:"10px",margin:"auto",paddingTop:"30px",width:"80%"}}>
        {data.map((elt,key)=><CardItem key={key} name={elt.name} writer={elt.writer} desc={elt.desc} url={elt.url} id={elt.id} navig={goTo}/>)}
        </div>
    )
}