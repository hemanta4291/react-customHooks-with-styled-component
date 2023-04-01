import React from 'react'
import DataTable from 'react-data-table-component';
import useUsers from '../hooks/useUsers';
import { Company, UserListTop, UserListWrapper } from '../components/styled/UserList.styled';
import { BtnMediumPrimaryContained } from '../components/styled/Button.styled';
import { Link } from 'react-router-dom';

const UserList = () => {
  const {users:data} =useUsers()
  console.log(data)
  const columns = [
    {
      name: '#',
      cell: (row, index) => index + 1  //RDT provides index by default
    },
    {
      name: 'Name',
      selector: row => row.firstName,
      sortable: true,
    },
   
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'Company',
      selector: row => (
        <Company>
          <p><span>Name </span> : {row.company.name}</p>
          <p><span>Title </span> : {row.company.title}</p>
          <p><span>Department </span> : {row.company.department}</p>
        </Company>
      ),
      // sortable: true,
    },
    {
      name:'action',
      cell: row => (
        <BtnMediumPrimaryContained >
          <Link to={`users/${row.id}/posts`}>Details</Link>
          
          </BtnMediumPrimaryContained>
      )
    }
  ];


  const handleViewRowData = () =>{

  }
  const handleEditRowData = () =>{
    
  }
  const handleDeleteRowData = () =>{
    
  }
  
  

  return (
    <UserListWrapper>
      <UserListTop>
          <h2>User List</h2>
          <input placeholder='Search'/>
      </UserListTop>
          <DataTable
              columns={columns}
              data={data}
              pagination
            />
    </UserListWrapper>
  )
}

export default UserList