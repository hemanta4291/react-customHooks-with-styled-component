import React from 'react'
import DataTable from 'react-data-table-component';
import useUsers from '../hooks/useUsers';
import { Company, UserListTop, UserListWrapper } from '../components/styled/UserList.styled';
import { BtnMediumPrimaryContained } from '../components/styled/Button.styled';
import { Link } from 'react-router-dom';
import GlobalLoading from '../components/GlobalLoading';
import GlobalError from '../components/GlobalError';

const UserList = () => {
  const { users: data, isLoading, fetchError } = useUsers()
  const columns = [
    {
      name: '#',
      cell: (row, index) => index + 1,
      maxWidth: "150px"

    },
    {
      name: 'Name',
      selector: row => row.firstName,
      sortable: true,
      width: "250px"

    },

    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
      width: "300px",
    },
    {
      name: 'Company',
      allowOverflow: true,
      width: "400px",
      selector: row => {
        return (
          <Company>
            <p><span>Name </span> : {row.company.name}</p>
            <p><span>Title </span> : {row.company.title}</p>
            <p><span>Department </span> : {row.company.department}</p>
            <p><span>Address </span> : {row.company.address.address}</p>
          </Company>
        )
      },
      // sortable: true,
    },
    {
      name: 'action',
      width: "200px",
      cell: row => (
        <BtnMediumPrimaryContained >
          <Link to={`users/${row.id}/posts`} state={{ name: row.firstName, email: row.email, company: row.company.name }}>Details</Link>

        </BtnMediumPrimaryContained>
      )
    }
  ];
  return (
    <UserListWrapper>
      <UserListTop>
        <h2>User List</h2>
        <input placeholder='Search' />
      </UserListTop>
      <DataTable
        columns={columns}
        data={data}
        noDataComponent={fetchError && <GlobalError errorText={fetchError} />}
        pagination
        progressPending={isLoading}
        progressComponent={<GlobalLoading imgSize="large" />}
      />
    </UserListWrapper>
  )
}

export default UserList