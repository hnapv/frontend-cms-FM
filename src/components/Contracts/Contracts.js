import ContractTable from './ContractTable';


import "./Contracts.scss"
import { useState } from 'react';
import ContractModal from './ContractModal';

const Contracts = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    return (
        <div className='container contract-container'>
            <div className='header-contract'>
                <span className='title-contract'>Contract</span>
                <button 
                className='btn-add-new'
                onClick={()=>handleShow()}
                >Create</button>
            </div>
            {/* <hr /> */}
            <ContractTable />

            <ContractModal
                show={show}
                setShow={setShow}
            />

        </div>
    )
}

export default Contracts