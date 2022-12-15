import React from 'react'
import { Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faPencil,faTrash } from '@fortawesome/free-solid-svg-icons'

let ListofUsers = ({users,deleteuser,edituser}) => {

    let userList = users.map((user)=>{

        let deleteUser = ()=> {
            deleteuser(user.id)
        }

        let editUser = ()=>{
             //edituser(user)
            edituser(user.id)
        }

        return (
        <tr key={user.id}>
          <td></td>
          <td>{user.name}</td>
          <td>{user.number}</td>
          <td>{user.location}</td>
          <td><FontAwesomeIcon onClick={editUser} icon={faPencil} /></td>
          <td><FontAwesomeIcon onClick={deleteUser} icon={faTrash} /></td>
        </tr>
        )
    })

  return (
    





    <div>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th colSpan={2}></th>
        </tr>
      </thead>
      <tbody>
        
        {userList}
      </tbody>
    </Table>
    </div>
  )
}

export default ListofUsers
