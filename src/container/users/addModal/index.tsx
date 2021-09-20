import React, { useState, useEffect } from 'react';
import { Card, CardBody, Col, Row, Container, Button, Label, Input } from "reactstrap";


const AddModal = (props: any) => {
    return (
        <>
            <br />
            <Row className="mb-3">
                <Label htmlFor="example-text-input" className="col-md-2 col-form-label">First Name</Label>
                <Col md={10}>
                    <Input type="text"
                        defaultValue=""
                        id="example-text-input"
                        placeholder="Last Name"
                    />
                </Col>
            </Row>
            <Row className="mb-3">
                <Label htmlFor="example-text-input" className="col-md-2 col-form-label">Last Name</Label>
                <Col md={10}>
                    <Input type="text"
                        defaultValue=""
                        id="example-text-input"
                        placeholder="Last Name"
                    />
                </Col>
            </Row>
            <Row className="mb-3">
                <Label htmlFor="example-text-input" className="col-md-2 col-form-label">Email</Label>
                <Col md={10}>
                    <Input type="text"
                        defaultValue=""
                        id="example-text-input"
                        placeholder="Email"
                    />
                </Col>
            </Row>
            <Row className="mb-3">
                <Label htmlFor="example-text-input" className="col-md-2 col-form-label">Organization</Label>
                <Col md={10}>
                    <select
                        className="form-control">
                        <option>HR</option>
                        <option>CRM</option>
                    </select>
                </Col>
            </Row>
            <Row className="mb-3">
                <Label htmlFor="example-text-input" className="col-md-2 col-form-label">Roles</Label>
                <Col md={10}>
                    <select
                        className="form-control">
                        <option>Roles 1</option>
                        <option>Roles 2</option>
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