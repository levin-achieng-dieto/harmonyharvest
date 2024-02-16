import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood, faCircleDollarToSlot, faHandsHoldingChild } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
// import DonationList from "./DonationList";
import { toast, ToastContainer } from "react-toastify";
import { Button, Modal, Form } from "react-bootstrap";



const api = "http://locahost:3000/donations";

const initialState = {
    name: "",
    phone: "",
    location: "",
    delivery: "",
};


const Donations = ({ donations, loadDonations }) => {

    const [show, setShow] = useState(false);
    const [state, setState] = useState(initialState);
    const [userId, setUserId] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);


    const { name, phone, location, delivery } = state;


    const handleClose = setShow(false);
    const handleShow = setShow(true);

    function handleChange(e) {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!name || !phone || !location || !delivery) {
            toast.error("Please fill all input fields");
        } else {
            if (!editMode) {
                axios.post(api, state);
                toast.success("post added successfully")
                setState({ name: "", phone: "", location: "", delivery: "" });
                handleClose();
                loadDonations();
            }
            else {
                axios.patch(`${api}/${userId}`, state);
                toast.success("Updates Successfully");
                setState({ name: "", phone: "", location: "", deliver: "" });
                handleClose();
                loadDonations();
                setUserId(null);
                setEditMode(false);
            }
        }

    }

    const handleUpdate = (id) => {
        const singleUser = donations.find((item) => item.id === id);
        setState({ ...singleUser });
        setUserId(id);
        setEditMode(true);
        handleShow();
        // rerender the loadPosts function
        loadDonations();
    };


    // handle the delete operation
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure want to delete this post?")) {
            axios.delete(`${api}/${id}`);
            toast.success("deleted successfully");
            // rerender the loadPosts function
            loadDonations();
        }
    };


    const searchItems = (searchValue) => {
        setSearchInput(searchValue);
        if (searchInput !== "") {
            const filteredData = donations.filter((item) => {
                return Object.values(item)
                    .join("")
                    .toLowerCase()
                    .includes(searchInput.toLowerCase());
            });
            setFilteredResults(filteredData);
        } else {
            setFilteredResults(donations);
        }
    };


    return (
        <div>
            <div className="card-container card-container-donation">
                <div className="cards">
                    <div>
                        <div className="donation card-food"
                            onClick={handleShow}
                        >
                            <div className="icon"><FontAwesomeIcon icon={faBowlFood} /></div>
                            <h2>Donate Food</h2>
                            <div>By donating surplus food, you can nourish hungry children, fostering hope and smiles in their lives</div>
                        </div>
                        <div className="col-md-4">
                            <form action="">
                                <div className="blog__search">
                                    <input
                                        type="search"
                                        className="header-search-input"
                                        placeholder="Search post"
                                        onChange={(e) => searchItems(e.target.value)}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="donation card-clothes">
                        <div className="icon"><FontAwesomeIcon icon={faHandsHoldingChild} /></div>
                        <h2>Donate Clothes/Shoes</h2>
                        <div>Transform unused clothes and shoes into blessings for our kids in the society, wrapping them in warmth and joy</div>
                    </div>
                    <div className="donation card-money">
                        <div className="icon"><FontAwesomeIcon icon={faCircleDollarToSlot} /></div>
                        <h2>Donate Money</h2>
                        <div>Empower children's dreams with a donation, transforming lives and creating brighter futures for those in need.</div>
                    </div>
                </div>
            </div>




            <div>
                {searchInput.length > 1
                    ? filteredResults.map(({ name, phone, location, delivery, id }) => {
                        return (
                            <div key={id}>
                                <div>
                                    <h3 >{name}</h3>
                                    <div>{phone}</div>
                                    <p>{location}</p>
                                    <div>{delivery}</div>
                                    <div>
                                        <div
                                            onClick={() => handleUpdate(id)}
                                        >
                                            {/* <BsFillPencilFill /> */}
                                        </div>
                                        <div
                                            onClick={() => handleDelete(id)}
                                        >
                                            {/* <BsFillTrashFill /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                    : donations.map(({ name, phone, location, delivery, id }) => {
                        return (
                            <div key={id}>
                                <div>
                                    <h3 >{name}</h3>
                                    <div>{phone}</div>
                                    <p>{location}</p>
                                    <div>{delivery}</div>
                                    <div>
                                        <div
                                            onClick={() => handleUpdate(id)}
                                        >
                                            {/* <BsFillPencilFill /> */}
                                        </div>
                                        <div
                                            onClick={() => handleDelete(id)}
                                        >
                                            {/* <BsFillTrashFill /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>

            <ToastContainer />

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title>
                        <h3>donate food, help a child</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                value={name}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your phone number"
                                name="phone"
                                value={phone}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your location"
                                name="location"
                                value={location}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>delivery</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="delivery"
                                style={{ height: "200px" }}
                                name="delivery"
                                value={delivery}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button variant="primary" type="submit">
                                {editMode ? "Update" : "Post"}
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Donations
