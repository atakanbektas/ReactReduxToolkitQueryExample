import React from 'react'
import { useAddPhotoMutation, useFetchPhotosQuery } from '../store';
import { Skeleton, Button, CircularProgress } from '@mui/material';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.css';

const PhotoList = ({album}) => {

    const {data,isFetching,isError} = useFetchPhotosQuery(album)
    const [addPhoto,results] = useAddPhotoMutation();
 
    const handlePhotoAdd = () => {
     addPhoto(album);
 }
 
 
 let content;
 if(isFetching){
   content = (
     <Skeleton variant='rectangular' sx={{width:'100%',height:'50px'}}/>
   )
 }
 else if(isError){
     content = <div>Hata Var</div>
 }
 else{
     content = data.map((photo)=>{
       return <PhotoListItem key={photo.id} photo={photo}/>
     })
 }



  return (
    <>
    <div>
      <div className='navbar'>
        <h3>{album.title} FOTOĞRAFLARI</h3>
        <Button variant='outlined' color='secondary' onClick={handlePhotoAdd}>
            {results.isLoading ? <CircularProgress color="success"/> : "Fotoğraf Ekle +"}
        </Button>
      </div>
    </div>
    <div className='content-container'>
        {content}
    </div>
    </>
  )
}

export default PhotoList
