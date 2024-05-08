import React from 'react'
import { useRemovePhotoMutation } from '../store';
import { CircularProgress } from '@mui/material';
import { TfiTrash } from 'react-icons/tfi';
import '../styles/PhotoListItem.css';

const PhotoListItem = ({photo}) => {

    const [removePhoto,results] = useRemovePhotoMutation();
    console.log(results);
    
        const handleRemovePhoto = () => {
            console.log(photo);
            removePhoto(photo);
        }
  return (
    <div onClick={handleRemovePhoto} className='photo-container'>
       <img src={photo.url}/>
       <div className='photo-delete'>
        {results.isLoading ? <CircularProgress style={{width:15,height:15}} /> : <TfiTrash size={18} />}
       </div>
    </div>
  )
}

export default PhotoListItem
