import React from 'react'
import { useAddAlbumMutation, useFetchAlbumsQuery } from '../store'
import '../styles/AlbumList.css'
import { Button, Skeleton } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import AlbumListItem from './AlbumListItem'

const AlbumList = ({user}) => {

   const {data,isFetching,isError} = useFetchAlbumsQuery(user)
   const [addAlbum,results] = useAddAlbumMutation();

   const handleAlbumAdd = () => {
    addAlbum(user);
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
    content = data.map((album)=>{
      return <AlbumListItem key={album.id} album={album}/>
    })
}

  return (
    <div className='album-container'>
    <div>
      <div className='navbar'>
        <h3>{user.name} ALBÜMÜ</h3>
        <Button variant='contained' color='secondary' onClick={handleAlbumAdd}>
            {results.isLoading ? <CircularProgress color="success"/> : "Albüm Ekle +"}
        </Button>
      </div>
    </div>
    <div className='album-container'>
        {content}
    </div>
    </div>
  )
}

export default AlbumList
