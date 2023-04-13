import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';
import { fetchCustomerByID } from '../../services/customerService';
import { useDispatch } from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { registerLocale } from "react-datepicker";
import vi from 'date-fns/locale/vi';
import { numberWithCommas } from '../../utils/otherUtils';
import { fetchApplicablePolicyRate } from '../../services/contractService';
registerLocale('vi', vi)



const ContractModal = (props) => {

    const dispatch = useDispatch()
    const { show, setShow } = props
    const [CustomerID, setCustomerID] = useState("");
    const [CustomerName, setCustomerName] = useState("");
    const [orderDate, setOrderDate] = useState("");
    const [applicablePolicyRate, setApplicablePolicyRate] = useState({});
    const [term, setTerm] = useState("");
    console.log("term",term)
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
        console.log(event.target.value);

    }

    const handleChangeOrderDate = async (e) => {
        setOrderDate(e)
        const applicablePolicyRate = await fetchApplicablePolicyRate(e)
        console.log("applicablePolicyRate==>", applicablePolicyRate)
        setApplicablePolicyRate(applicablePolicyRate)
    }

    const handleSubmit = async () => {
        alert("me")
    }

    return (
        <>
            <Modal
                size="lg"
                show={show}
                onHide={handleClose}
            // fullscreen
            // className='modal-contract'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Tạo mới hợp đồng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='row'>
                        <Col >
                            <div className='d-flex justify-content-between align-self-center' style={{ marginBottom: 12 }}>
                                <label className="form-label" >Customer ID: </label>
                                <input
                                    className="form-control"
                                    style={{ maxWidth: 200 }}
                                    type="text"
                                    value={CustomerID}
                                    onChange={(e) => setCustomerID(e.target.value)}
                                    onKeyDown={(e) => handleCheckCustomerID(e)}
                                />
                            </div>
                            <div className='d-flex justify-content-between align-self-center' style={{ marginBottom: 12 }}>
                                <label className="form-label">Order date:  </label>
                                <div style={{ maxWidth: 200 }}>
                                    <DatePicker
                                        className="form-control"
                                        selected={orderDate}
                                        onChange={(e) => handleChangeOrderDate(e)}
                                        locale="vi"
                                        dateFormat="dd/MM/yyyy"
                                    />
                                </div>

                            </div>
                            <div className='d-flex justify-content-between align-self-center' style={{ marginBottom: 12 }}>
                                <label className="form-label">Term: </label>
                                <select className="form-control" style={{ maxWidth: 200 }} value={term} onChange={e=>setTerm(e.target.value)} >
                                    {applicablePolicyRate && applicablePolicyRate.rate_term &&
                                        applicablePolicyRate.rate_term
                                            .sort((a, b) => a.term.localeCompare(b.term))
                                            .map((a) => {
                                                return (
                                                    <option value={a.term}>{a.term} - {a.rate}%</option>
                                                )
                                            })
                                    }
                                </select>
                            </div>
                            <div className='d-flex justify-content-between align-self-center' style={{ marginBottom: 12 }}>
                                <label className="form-label">Investment Principal: </label>
                                <input className="form-control" style={{ maxWidth: 200 }} type="value" name="abc" />
                            </div>

                        </Col>
                        <Col>
                            <div className='d-flex justify-content-between align-self-center' style={{ marginBottom: 12 }}>
                                <label className="form-label">Name: </label>
                                <input
                                    className="form-control"
                                    style={{ maxWidth: 200 }}
                                    type="text"
                                    disabled
                                    value={CustomerName}
                                />
                            </div>
                            {/* <div className='d-flex justify-content-between align-self-center' style={{ marginBottom: 12 }}>
                                <label className="form-label">Interest Rate: </label>
                                <input className="form-control" style={{ maxWidth: 200 }} type="text" disabled />
                            </div> */}
                            <div className='d-flex justify-content-between align-self-center' style={{ marginBottom: 12 }}>
                                <label className="form-label">Maturity Date </label>
                                <input className="form-control" style={{ maxWidth: 200 }} type="text" disabled />
                            </div>
                            <div className='d-flex justify-content-between align-self-center' style={{ marginBottom: 12 }}>
                                <label className="form-label">Profit: </label>
                                <input className="form-control" style={{ maxWidth: 200 }} type="value" disabled />
                            </div>
                            <div className='d-flex justify-content-between align-self-center' style={{ marginBottom: 12 }}>
                                <label className="form-label">Gross Income: </label>
                                <input className="form-control" style={{ maxWidth: 200 }} type="text" disabled />
                            </div>
                        </Col>
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