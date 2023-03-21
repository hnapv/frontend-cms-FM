import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllContracts, fetchContractsWithPaginate } from '../../services/contractService';
import { numberWithCommas } from '../../utils/otherUtils';
import { AiFillEye, AiOutlineSync } from "react-icons/ai"

import ReactPaginate from 'react-paginate';


function PaginatedItems({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    console.log(
      `User requested page number ${event.selected}, which is offset`
    );
  };

  return (
    <>
      <ReactPaginate
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={4}
        previousLabel="Prev"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

const ContractTable = () => {
  const dispatch = useDispatch()
  const [listContracts, setListContracts] = useState([])
  // const listContracts = useSelector(state => state?.contract?.listContracts)
  // useEffect(() => {
    // dispatch(fetchAllContracts())
    const fetchContracts = async () => {
      const data = await fetchContractsWithPaginate(5, 1)
      setListContracts(data.DT.data)
    }
    fetchContracts()
  // }, [])

  return (
    <>
      <PaginatedItems />

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
                  <td className='text-end'>{numberWithCommas(a.InvestmentPrincipal)}</td>
                  <td>{a.ContractStatus}</td>
                  <td className='text-end'>{a.createdAt}</td>
                  <td className='text-end'>{a.updatedAt}</td>
                  <td className='action'>
                    <AiFillEye
                      className="action-button"
                      data-bs-toggle="tooltip"
                      title="View contract"
                      onClick={() => alert("clickme")}
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