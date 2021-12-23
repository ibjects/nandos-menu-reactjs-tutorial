import React, { useState } from 'react';
import { Table, Card, Image, Button, Modal, Form, FloatingLabel } from 'react-bootstrap';


function Dashboard(props) {

    const [showAddEditForm, setShowAddEditForm] = useState(true);
    const [addEditFormType, setAddEditFormType] = useState('Add'); //Add, Edit
    const [validated, setValidated] = useState(false);

    const [showDeleteDialogue, setShowDeleteDialogue] = useState(false);

    const handleModalClose = () => {
        setShowAddEditForm(false);
        setShowDeleteDialogue(false);
    }

    const handleAddEditFormSubmit = (e) => {
        alert("Functionality Coming Soon");
    }

    const handleMenuItemDelete = (e) => {
        alert("Delete Functionality Coming Soon");
    }

    return (
        <>
            {/* Add/Edit Form START */}
            <Modal show={showAddEditForm} onHide={handleModalClose}>
                <Form noValidate validated={validated} onSubmit={handleAddEditFormSubmit}>
                    <Modal.Header>
                        <Modal.Title>{(addEditFormType === 'Add') ? 'Add Menu Item' : 'Edit'}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <FloatingLabel controlId="itemName" label="Item Name" className="mb-3" >
                            <Form.Control required type='text' placeholder='Enter item name' size='md' />
                            <Form.Control.Feedback type='invalid'>Item name is required</Form.Control.Feedback>
                        </FloatingLabel>

                        <FloatingLabel controlId="itemCategory" label="Item Category" className="mb-3" >
                            <Form.Select>
                                <option value="0">Starters & Snacks</option>
                                <option value="1">Salads</option>
                                <option value="2">Peri-Peri Chicken</option>
                                <option value="3">Sharing Platters</option>
                            </Form.Select>
                        </FloatingLabel>

                        <FloatingLabel controlId="itemPrice" label="Price" className="mb-3" >
                            <Form.Control required type='text' placeholder='Enter item price' size='md' />
                            <Form.Control.Feedback type='invalid'>Item Price is required</Form.Control.Feedback>
                        </FloatingLabel>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit">{(addEditFormType === 'Add') ? 'Add' : 'Update'}</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
            {/* Add/Edit Form END */}

            {/* Delete Confirmation Dialogue START */}
            <Modal show={showDeleteDialogue} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Menu Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to delete this menu item?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>Cancel</Button>
                    <Button variant="danger" onClick={handleMenuItemDelete}>Yes, Delete</Button>
                </Modal.Footer>
            </Modal>
            {/* Delete Confirmation Dialogue END */}

            <Card style={{ margin: 24 }}>
                <Card.Header className="d-flex justify-content-between align-items-center">
                    <div className="align-items-center" style={{ marginRight: 8 }}>
                        <Image src={'https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Nandos_logo.svg/1200px-Nandos_logo.svg.png'} style={{ width: 80 }} />
                        <h4 style={{ marginTop: 8, }}>Dashboard</h4>
                    </div>
                    <Button style={{ backgroundColor: '#000', borderWidth: 0, }}>Add New Item</Button>
                </Card.Header>
                <Card.Body>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item Name</th>
                                <th>Category</th>
                                <th>Price (MYR)</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Cheessy Garlic Pita</td>
                                <td>Starters & Snacks</td>
                                <td>4</td>
                                <td>
                                    <Button variant='primary'>✎ Edit</Button>{' '}
                                    <Button variant='danger'>x Delete</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Hummus with  PERi-PERi Drizzle & Pita</td>
                                <td>Starters & Snacks</td>
                                <td>5.5</td>
                                <td>
                                    <Button variant='primary'>✎ Edit</Button>{' '}
                                    <Button variant='danger'>x Delete</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                    <p style={{ marginTop: 8, fontSize: 12, color: '#A1A1A1' }}>Nandos Menu v1.0.0 - <a href="/login">Logout</a></p>
                </Card.Footer>
            </Card>
        </>
    );
}

export default Dashboard;