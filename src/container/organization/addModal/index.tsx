import React, { useState, useEffect } from 'react';
import { Card, CardBody, Col, Row, Container, Button, Label, Input } from "reactstrap";


const AddModal = (props: any) => {

    const [state, setState] = useState({
        organization_name: ''
    })

    const handleName = (e: any, name: string) => {
        let _state: any = { ...state }
        _state[name] = e.target.value;
        setState(_state);
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
        props.addOrganization(state);
    }

    return (
        <>
            <br />
            <form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Label htmlFor="example-text-input" className="col-md-2 col-form-label">Name</Label>
                    <Col md={10}>
                        <Input
                            type="text"
                            defaultValue=""
                            id="example-text-input"
                            required
                            placeholder="Name"
                            value={state.organization_name}
                            onChange={(e) => handleName(e, 'organization_name')}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="text-center">
                        <Button type="submit" color="primary" style={{ display: 'inline-flex' }}>
                            <i className="ri-git-repository-commits-line" />
                            &nbsp;
                            <span>Submit</span>
                        </Button>
                    </Col>
                </Row>
            </form>
        </>
    )
}

export default AddModal;