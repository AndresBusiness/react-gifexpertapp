import {useState, useEffect} from 'react';
import getGif from './../helpers/getGif'

const useFetchGif = (categoria) => {
 const [state, setState] = useState({
   data:[],
   loading:true
 });

 useEffect(()=>{
   getGif(categoria)
   .then(imgs=>{
     setState({
       data:imgs,
       loading:false
     })
   })

 }, [categoria])

 return state;
}

export default useFetchGif
