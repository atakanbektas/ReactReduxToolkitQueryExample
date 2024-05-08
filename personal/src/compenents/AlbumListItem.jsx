import React from 'react'
import ExpandablePanel from './ExpandablePanel'
import PhotoList from './PhotoList'
import { CircularProgress } from '@mui/material'
import { TfiTrash } from 'react-icons/tfi'
import { useRemoveAlbumMutation } from '../store'

const AlbumListItem = ({album}) => {

    const [removeAlbum,results] = useRemoveAlbumMutation();
    console.log(results);
    
        const handleClick = () => {
            removeAlbum(album);
        }
    


    const header = (
        <div>
        <button className='listItemButton' onClick={handleClick}>

        {results.isLoading ? <CircularProgress style={{width:15,height:15}} /> : <TfiTrash size={18} />}
   
        </button>
        {album.title}
        </div>
    )




  return (
    <>
    <div>
    <ExpandablePanel header={header}>
      <PhotoList album={album} />
    </ExpandablePanel>
  </div>
    </>
  )
}

export default AlbumListItem
