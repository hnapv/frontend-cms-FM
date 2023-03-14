import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchAllUsers } from '../../services/userService';

const Users = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    // if (!isAuthenticated) {
    //     navigate("/login")
    // }
    const listUsers = useSelector(state => state?.user?.listUsers)
    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [])
    console.log("listUsers==>", listUsers)
    console.log("tesst=>>>")
    return (
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User ID</th>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0
                        && listUsers.map((a, index) => {
                            return (
                                <tr key={`${index}-listUsers`}>
                                    <td>{index}</td>
                                    <td>{a.userid}</td>
                                    <td>{a.username}</td>
                                    <td>{a.fullname}</td>
                                    <td>{a.email}</td>
                                </tr>
                            )
                        })}
                </tbody>
            </Table>
        </Container>
    )
}

export default Users