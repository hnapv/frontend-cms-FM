import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllContracts } from '../../services/contractService';

const Contracts = () => {
    const dispatch = useDispatch()
    const listContracts = useSelector(state => state?.contract?.listContracts)
    useEffect(() => {
        dispatch(fetchAllContracts())
    }, [])

    return (
        <div>
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Term</th>
                            <th>Investment Principal</th>
                            <th>Status</th>
                            <th>Created At</th>
                            <th>Updated At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listContracts && listContracts.length > 0
                            && listContracts.map((a, index) => {
                                return (
                                    <tr key={`${index}-listContracts`}>
                                        <td>{a.OrderNo}</td>
                                        <td>{a.CustomerName}</td>
                                        <td>{a.CustomerID}</td>
                                        <td >{a.Term}</td>
                                        <td>{a.InvestmentPrincipal}</td>
                                        <td>{a.ContractStatus}</td>
                                        <td>{a.createdAt}</td>
                                        <td>{a.updatedAt}</td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default Contracts