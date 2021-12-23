import React from 'react';
import { Table, Card, Image, Button, } from 'react-bootstrap';


function Dashboard(props) {
    return (
        <>
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
                                <th>Price (USD)</th>
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