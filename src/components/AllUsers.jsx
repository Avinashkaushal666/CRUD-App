import React from "react";
import { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  Button
} from "@mui/material";
import { getUsers, deleteUser } from "../service/api";
import { Link } from 'react-router-dom'

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px 0 0 50px;
`;

const Thead = styled(TableRow)`
  & > th {
    font-size: 20px;
    background: #000000;
    color: #ffffff;
  }
`;

const TRow = styled(TableRow)`
  & > td {
    font-size: 18px;
  }
`;

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsersDetails();
  }, []);

  const getUsersDetails = async () => {
    let response = await getUsers();
    console.log(response);
    setUsers(response.data);
  };

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getUsersDetails();
  }


  return (
    <StyledTable>
      <TableHead>
        <Thead>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </Thead>
      </TableHead>

      <TableBody>
        {users.map((user) => (
          <TRow key={user.id}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
          <TableCell>
            <Button variant="outlined" style={{marginRight: 10}} component={Link} to={`/edit/${user.id}`} >Edit</Button>
            <Button variant="outlined" color="error" onClick={() => deleteUserData(user.id)}>Delete</Button>
          </TableCell>

          </TRow>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default AllUsers;
