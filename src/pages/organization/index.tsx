import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Form, FormGroup, Label, Card, CardBody, CardTitle, Container } from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import Organization from "../../components/sectionLayout/basicLayout";
import Overlay from "../../components/overlay";
import AddForm from "../../container/organization/addModal";

import { postAPI } from "../../apiCalls/functions/index";
import { GET_ALL_ORGANIZATION, ADD_ORGANIZATION } from "../../apiCalls/urls/executionModule/organisation";


//Import Card
const columns = [
    {
        label:  <input type="checkbox" checked={false}  />,
        field: 'select',
        sort: 'disabled',
        width: 150,
    },
    {
        label: 'Id',
        field: 'id',
        sort: 'enable',
        width: 150,
    },
    {
        label: 'Name',
        field: 'name',
        sort: 'enable',
        width: 150,
    },
    {
        label: 'Action',
        field: 'action',
        sort: 'disabled',
        width: 100
    }

];
const OrganizationSection = (props: any) => {

    const [breadcrumbItems, setBreadcrumbs] = useState([
        { title: "Organization", link: "#" },
        { title: "New", link: "#" },
    ])
    const [overlay, setOverLay] = useState<boolean>(false);
    const [rows, setRows] = useState([])
    

    // const rows = [
    //     {
    //         id: <input type="checkbox" checked={true}  />,
    //         name: "Finance Department",
    //         action: <i
    //             onClick={() => setOverLay(!overlay)}
    //             className="ri-edit-line table-icons"></i>
    //     },
    //     {
    //         id:  <input type="checkbox" checked={true}  />,
    //         name: "HR",
    //         action: <i
    //             onClick={() => setOverLay(!overlay)}
    //             className="ri-edit-line table-icons"></i>
    //     },
    //     {
    //         id:  <input type="checkbox" checked={true}  />,
    //         name: "ABC",
    //         action: <i
    //             onClick={() => setOverLay(!overlay)}
    //             className="ri-edit-line table-icons"></i>
    //     }
    // ]
    

    useEffect(() => {
        fetchAllOrganizations();
    }, [])

    //
    const updateData = (allData:any) =>{
        let _rows = new Array();
        allData.map((a:any) =>{
            console.log(a)
            _rows.push({
                select:  <input type="checkbox" checked={false}  />,
                id:a.organizationId,
                name: a.organizationName,
                action: <i
                    onClick={() => setOverLay(!overlay)}
                    className="ri-edit-line table-icons"></i>
            })
        })

        setRows(_rows)
    }

    //API Calls
    const fetchAllOrganizations = async() => {
        const allData = await postAPI(GET_ALL_ORGANIZATION, {})
        console.log(allData);
        updateData(allData);
    }

    const addOrganization = async(data: any) => {
        const allData = await postAPI(ADD_ORGANIZATION, data)
        fetchAllOrganizations();
    }

    //Functions
    return (
        <>

            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title="Organization" breadcrumbItems={breadcrumbItems} />
                </Container>
                <Organization
                    columns={columns}
                    rows={rows}
                    handleOverlay={() => setOverLay(!overlay)}
                />
                {
                    overlay
                        ?
                        <Overlay
                            overlay={overlay}
                            title={"Add Organization"}
                            isLarge={false}
                            handleOverLay={() => setOverLay(false)}
                        >
                            <AddForm
                                addOrganization={addOrganization}
                            />
                        </Overlay>
                        : null
                }

            </div>
x
        </>
    )
}

export default OrganizationSection;