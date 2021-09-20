import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Form, FormGroup, Label, Card, CardBody, CardTitle, Container } from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import BasicLayout from "../../components/sectionLayout/basicLayout";
import Overlay from "../../components/overlay";
import AddForm from "../../container/users/addModal"

//Import Card
const columns = [
    {
        label:  <input type="checkbox" checked={true}  />,
        field: 'select',
        sort: 'disabled',
        width: 150,
    },
    {
        label: 'First name',
        field: 'f_name',
        sort: 'enable',
        width: 150,
    },
    {
        label: 'Last name',
        field: 'l_name',
        sort: 'enable',
        width: 150,
    },
    {
        label: 'Organization',
        field: 'org',
        sort: 'enable',
        width: 150,
    },
    {
        label: 'Email',
        field: 'email',
        sort: 'enable',
        width: 150,
    },
    // {
    //     label: 'Email',
    //     field: 'email',
    //     sort: 'enable',
    //     width: 150,
    // },
    {
        label: 'Action',
        field: 'action',
        sort: 'disabled',
        width: 100
    }

];




const UserSection = (props: any) => {

    const [breadcrumbItems, setBreadcrumbs] = useState([
        { title: "Users", link: "#" },
        { title: "New", link: "#" },
    ])
    const [overlay, setOverLay] = useState<boolean>(false);

    const rows = [
        {
            id: <input type="checkbox" checked={true}  />,
            f_name: "Amrit",
            l_name: "Anand",
            org: "HR",
            email: "test@gmail.com",
            action: <i
                onClick={() => setOverLay(!overlay)}
                className="ri-edit-line table-icons"></i>
        },
        {
            id:  <input type="checkbox" checked={true}  />,
            f_name: "Test",
            l_name: "Kumar",
            org: "crm",
            email: "test123@gmail.com",
            action: <i
                onClick={() => setOverLay(!overlay)}
                className="ri-edit-line table-icons"></i>
        }
    ]

    useEffect(() => {

    }, [])

    //Functions
    return (
        <>

            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title="Users" breadcrumbItems={breadcrumbItems} />
                </Container>
                <BasicLayout
                    columns={columns}
                    rows={rows}
                    handleOverlay={() => setOverLay(!overlay)}
                />
                {
                    overlay
                        ?
                        <Overlay
                            overlay={overlay}
                            title={"Add Users"}
                            isLarge={false}
                            handleOverLay={() => setOverLay(false)}
                        >
                            <AddForm />
                        </Overlay>
                        : null
                }

            </div>
x
        </>
    )
}

export default UserSection;