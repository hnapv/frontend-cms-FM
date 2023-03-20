import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';
import { fetchCustomerByID } from '../../services/customerService';
import { useDispatch } from 'react-redux';

const ContractModal = (props) => {
    const dispatch = useDispatch()
    const { show, setShow } = props
    const [CustomerID, setCustomerID] = useState("");
    const [CustomerName, setCustomerName] = useState("");
    const handleClose = () =>{
        setShow(false);
        setCustomerID("")
        setCustomerName("")
    }
    console.log("data=>>", CustomerID)

    const handleCheckCustomerID = async (event) => {
        if (event.key === "Tab" | "Enter") {
            const data = await fetchCustomerByID(CustomerID)
            setCustomerName(data.EC===0? data.EM.CustomerName:"") 
        }
        console.log(event);

    }

    const handleSubmit = async () => {
        alert("me")
    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
            // fullscreen  
            >
                <Modal.Header closeButton>
                    <Modal.Title>Tạo mới hợp đồng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <Row>
                            <Col xs={6} md={4}>
                                <div className="mb-3">
                                    <label className="form-label">Customer ID: </label>
                                    <input
                                        type="text"
                                        value={CustomerID}
                                        onChange={(e) => setCustomerID(e.target.value)}
                                        onKeyDown={(e) => handleCheckCustomerID(e)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Name: </label>
                                    <input type="text" disabled value={CustomerName} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Order date:  </label>
                                    <input type="date" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Term: </label>
                                    <input type="text" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Interest Rate: </label>
                                    <input type="text" disabled />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Maturity Date </label>
                                    <input type="text" disabled />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Investment Principal: </label>
                                    <input type="value" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Profit: </label>
                                    <input type="value" disabled />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Gross Income: </label>
                                    <input type="text" disabled />
                                </div>
                            </Col>
                            <Col xs={6} md={4}>
                                {/* <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" />
                                </div> */}
                            </Col>
                        </Row>
                        {/* <Row>
                            <Col xs={6} md={4}>
                                .col-xs-6 .col-md-4
                            </Col>
                            <Col xs={6} md={4}>
                                .col-xs-6 .col-md-4
                            </Col>
                            <Col xs={6} md={4}>
                                .col-xs-6 .col-md-4
                            </Col>
                        </Row> */}
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmit()}>
                        Tạo mới
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ContractModal