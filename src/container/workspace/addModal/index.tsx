import React, { useState, useEffect } from 'react';
import { Card, CardBody, Col, Row, Container, Button, Label, Input } from "reactstrap";


const AddModal = (props: any) => {

    const [state, setState] = useState({
        
    })

    return (
        <>
            <br />
            <Row className="mb-3">
                <Label htmlFor="example-text-input" className="col-md-2 col-form-label">Name</Label>
                <Col md={10}>
                    <Input type="text"
                        defaultValue=""
                        id="example-text-input"
                        placeholder="Last Name"
                    />
                </Col>
            </Row>
            <Row className="mb-3">
                <Label htmlFor="example-text-input" className="col-md-2 col-form-label">Description</Label>
                <Col md={10}>
                    <Input type="text"
                        defaultValue=""
                        id="example-text-input"
                        placeholder="Last Name"
                    />
                </Col>
            </Row>
            <Row className="mb-3">
                <Label htmlFor="example-text-input" className="col-md-2 col-form-label">Infrastructure</Label>
                <Col md={10}>
                    <select
                        className="form-control">
                        <option>Terraform</option>
                    </select>
                </Col>
            </Row>
            <Row className="mb-3">
                <Label htmlFor="example-text-input" className="col-md-2 col-form-label">Region</Label>
                <Col md={10}>
                    <select
                        className="form-control">
                        <option>US east</option>
                        <option>US west</option>
                    </select>
                </Col>
            </Row>
           
            <Row className="mb-3">
                <Label htmlFor="example-text-input" className="col-md-2 col-form-label">Organization Account</Label>
                <Col md={10}>
                    <select
                        className="form-control">
                        <option>Account 1</option>
                        <option>Account 2</option>
                    </select>
                </Col>
            </Row>
            <Row className="mb-3">
                <Label htmlFor="example-text-input" className="col-md-2 col-form-label">Platform List</Label>
                <Col md={10}>
                    <select
                        className="form-control">
                        <option>AWS</option>
                        <option>Azure</option>
                    </select>
                </Col>
            </Row>
            <Row>
                <Col md={12} className="text-center">
                    <Button type="button" color="primary" style={{ display: 'inline-flex' }}>
                        <i className="ri-git-repository-commits-line" />
                        &nbsp;
                        <span>Submit</span>
                    </Button>
                </Col>
            </Row>

        </>
    )
}

export default AddModal;