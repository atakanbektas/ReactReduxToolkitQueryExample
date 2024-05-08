import React from 'react'
import { useFetchUsersQuery, useAddUserMutation } from '../store'
import Skeleton from '@mui/material/Skeleton';
import UserListItem from './UserListItem';
import { Button, CircularProgress } from '@mui/material';
import '../styles/UserList.css'

const UserList = () => {

    const {data,isError,isFetching} = useFetchUsersQuery();

    const [addUser,results] = useAddUserMutation();

    const handleUserAdd = () => {
        addUser();
    }

    let content;
    if(isFetching){
      content = (
        <Skeleton variant='rectangular' sx={{width:'100%',height:'600px'}}/>
      )
    }
    else if(isError){
        content = <div>Hata Var</div>
    }
    else{
        content = data.map((user)=>{
          return <UserListItem key={user.id} user = {user}/>
        })
    }



  return (
    <div>
      <div className='navbar'>
        <h1>Kişiler</h1>
        <Button variant='outlined' onClick={handleUserAdd}>
            {results.isLoading ? <CircularProgress color="success"/> : "KISI Ekle +"}
        </Button>
      </div>
      {content}
    </div>
  )
}

export default UserList
