import ContractTable from './ContractTable';


import "./Contracts.scss"
import { useState } from 'react';
import ContractModal from './ContractModal';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';


const Contracts = () => {
    const [show, setShow] = useState(false);
    const [currentPage, setCurrentPage] = useState(1)
    const handleShow = () => setShow(true);
    const totalPages = useSelector(state => state?.contract?.data?.totalPages)


    const handlePageClick = (event) => {
        console.log(
            `User requested page number ${+event.selected + 1}, which is offset`
        );
        setCurrentPage(+event.selected + 1)
    };

    return (
        <div className='container contract-container'>
            <div className='header-contract'>
                <span className='title-contract'>Contract</span>
                <button
                    className='btn-add-new'
                    onClick={() => handleShow()}
                >Create</button>
            </div>
            <ContractTable
                handlePageClick={handlePageClick}
                currentPage={currentPage}
            />

            <ContractModal
                show={show}
                setShow={setShow}
            />
            <ReactPaginate
                nextLabel="Next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={1}
                marginPagesDisplayed={3}
                pageCount={totalPages||0}
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
        </div>
    )
}

export default Contracts