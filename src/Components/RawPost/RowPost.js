import React,{useEffect,useState}from 'react'
import './RowPost.css';
import YouTube from 'react-youtube';
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../Constants/constants';

const RowPost = (props) => {
  const [movies,setMovies] = useState([])
  const [urlId,seturlId] = useState('')
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      setMovies(response.data.results)
    })
    .catch(err =>
      { alert('network error')}
      )
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // url :  "https://developers.google.com/youtube/player_parameters",
      autoplay: 1,
    },
  };
 const handleMovie = (id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      console.log(response)
      if(response.data.results.length!==0){
        seturlId(response.data.results[0])
      }else{
        console.log('trailer Not available');
      }
    })
 }
  return (
    <div className='row'>
       <h2>{props.title}</h2>
       <div className="posters">
         {movies.map((obj)=>
           <img onClick={ ()=> handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="Poster" />
         )}
          
       </div>
{ urlId && <YouTube videoId={urlId.key} opts={opts} /> }
    </div>
  )
}

export default RowPost
