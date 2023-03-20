import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllContracts } from '../../services/contractService';
import { numberWithCommas } from '../../utils/otherUtils';
import {AiFillEye,AiOutlineSync} from "react-icons/ai"

const ContractTable = ()=>{
    const dispatch = useDispatch()
    const listContracts = useSelector(state => state?.contract?.listContracts)
    useEffect(() => {
        dispatch(fetchAllContracts())
    }, [])
    return(
        <>
         <Table hover className='contract-table' >
                    <thead>
                        <tr className='text-center'>
                            <th>No.</th>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Term</th>
                            <th>Investment Principal</th>
                            <th>Status</th>
                            <th>Created At</th>
                            <th>Updated At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listContracts && listContracts.length > 0
                            && listContracts.map((a, index) => {
                                return (
                                    <tr key={`${index}-listContracts`}>
                                        <td>{a.OrderNo}</td>
                                        <td>{a.CustomerName}</td>
                                        <td className='text-end'>{a.CustomerID}</td>
                                        <td className='text-center'>{a.Term}</td>
                                        <td className='text-end'>{numberWithCommas(a.InvestmentPrincipal) }</td>
                                        <td>{a.ContractStatus}</td>
                                        <td className='text-end'>{a.createdAt}</td>
                                        <td className='text-end'>{a.updatedAt}</td>
                                        <td className='action'> 
                                            <AiFillEye
                                             className="action-button" 
                                             data-bs-toggle="tooltip" 
                                             title="View contract"
                                             onClick={()=>alert("clickme")}
                                             />
                                            <AiOutlineSync 
                                            className="action-button" 
                                            data-bs-toggle="tooltip"
                                             title="Sync"
                                             />
                                        </td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </Table>
        </>
    )
}
export default ContractTable