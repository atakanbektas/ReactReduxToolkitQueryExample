import React from 'react'
import ExpandablePanel from './ExpandablePanel'
import AlbumList from './AlbumList'
import { TfiTrash } from "react-icons/tfi";
import '../styles/UserListItem.css'
import { useRemoveUserMutation } from '../store';
import { CircularProgress } from '@mui/material';


const UserListItem = ({user}) => {

    const [removeUser,results] = useRemoveUserMutation();
console.log(results);

    const handleClick = () => {
        removeUser(user);
    }




    const header = (
        <div>
        <button className='listItemButton' onClick={handleClick}>

        {results.isLoading ? <CircularProgress style={{width:15,height:15}} /> : <TfiTrash size={18} />}
   
        </button>
        {user.name}
        </div>
    )

  return (
      <div>
      <ExpandablePanel header={header}>
        <AlbumList user={user} />
      </ExpandablePanel>
    </div>
  )
}

export default UserListItem
