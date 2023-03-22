import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';
import { fetchCustomerByID } from '../../services/customerService';
import { useDispatch } from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { registerLocale } from "react-datepicker";
import vi from 'date-fns/locale/vi';
registerLocale('vi', vi)



const ContractModal = (props) => {
    const [orderDate, setOrderDate] = useState(new Date());

    const dispatch = useDispatch()
    const { show, setShow } = props
    const [CustomerID, setCustomerID] = useState("");
    const [CustomerName, setCustomerName] = useState("");
    const handleClose = () => {
        setShow(false);
        setCustomerID("")
        setCustomerName("")
    }

    const handleCheckCustomerID = async (event) => {
        if (event.key === "Tab" | "Enter") {
            const data = await fetchCustomerByID(CustomerID)
            setCustomerName(data.EC === 0 ? data.EM.CustomerName : "")
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
                className='modal-contract'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Tạo mới hợp đồng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <Row >
                            <Col>
                                <label className="form-label">Customer ID: </label>
                            </Col>
                            <Col>  <input
                                type="text"
                                value={CustomerID}
                                onChange={(e) => setCustomerID(e.target.value)}
                                onKeyDown={(e) => handleCheckCustomerID(e)}
                            />
                            </Col>
                            <Col>
                                <label className="form-label">Name: </label>
                            </Col>
                            <Col>
                                <input type="text" disabled value={CustomerName} />
                            </Col>
                            {/* <Col></Col>
                            <Col></Col> */}
                        </Row>
                        <Row >
                            <Col>
                                <label className="form-label">Order date:  </label>

                            </Col>
                            <Col>
                                <DatePicker
                                    selected={orderDate}
                                    onChange={(date) => setOrderDate(date)}
                                    locale="vi"
                                    dateFormat="dd/MM/yyyy"
                                />
                            </Col>
                            <Col>
                                <label className="form-label">Term: </label>
                            </Col>
                            <Col>
                                <input type="text" />
                            </Col>
                            {/* <Col></Col>
                            <Col></Col> */}
                        </Row>
                        <Row >
                            <Col>
                                <label className="form-label">Interest Rate: </label>

                            </Col>
                            <Col>
                                <input type="text" disabled />
                            </Col>
                            <Col>
                                <label className="form-label">Maturity Date </label>
                            </Col>
                            <Col>
                                <input type="text" disabled />
                            </Col>
                            {/* <Col></Col>
                            <Col></Col> */}
                        </Row>
                        <Row >
                            <Col>
                                <label className="form-label">Investment Principal: </label>
                            </Col>
                            <Col>
                                <input type="value" />
                            </Col>
                            <Col>
                                <label className="form-label">Profit: </label>
                            </Col>
                            <Col>
                                <input type="value" disabled />
                            </Col>
                            {/* <Col></Col>
                            <Col></Col> */}
                        </Row>
                        <Row >
                            <Col>
                                <label className="form-label">Gross Income: </label>
                            </Col>
                            <Col>
                                <input type="text" disabled />
                            </Col>
                            <Col>
                            </Col>
                            <Col>
                            </Col>
                            {/* <Col></Col>
                            <Col></Col> */}
                        </Row>
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