import React, { useState, useEffect } from 'react';
import { Container } from "reactstrap";
import { useHistory } from "react-router-dom";

import Breadcrumbs from "../../components/Common/Breadcrumb";
import BasicLayout from "../../components/sectionLayout/basicLayout";
import Overlay from "../../components/overlay";
import AddForm from "../../container/users/addModal"

//Import Card
const columns = [
    {
        label: <input type="checkbox" checked={true} />,
        field: 'select',
        sort: 'disabled',
        width: 150,
    },
    {
        label: 'Name',
        field: 'name',
        sort: 'enable',
        width: 150,
    },
    {
        label: 'Infrastructure',
        field: 'infrastructure',
        sort: 'enable',
        width: 150,
    },
    {
        label: 'Platform',
        field: 'platform',
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

const WorkspaceSection = (props: any) => {

    const history = useHistory();

    const [breadcrumbItems, setBreadcrumbs] = useState([
        { title: "Workspace", link: "#" },
        { title: "New", link: "#" },
    ])
    const [overlay, setOverLay] = useState<boolean>(false);

    const handleWorkspace  =(id: any) =>{
        history.push('/canvas/'+id)
    }

    const rows = [
        {
            id: <input type="checkbox" checked={true} />,
            name: "App 1",
            infrastructure: "Terraform",
            platform: "AWS",
            action: <><i
                onClick={() => setOverLay(!overlay)}
                className="ri-edit-line table-icons"></i>
                &nbsp;
                <i
                    onClick={() => handleWorkspace(1)}
                    className="ri-scan-2-fill table-icons"></i></>
        },
        {
            id: <input type="checkbox" checked={true} />,
            name: "Amrit",
            infrastructure: "Terraform",
            platform: "Azure",
            action: <><i
                onClick={() => setOverLay(!overlay)}
                className="ri-edit-line table-icons"></i>
                &nbsp;
                <i
                    onClick={() => handleWorkspace(2)}
                    className="ri-scan-2-fill table-icons"></i></>
        }
    ]

    useEffect(() => {

    }, [])

    //Functions
    return (
        <>

            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title="Workspace" breadcrumbItems={breadcrumbItems} />
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
                            title={"Add Workspace"}
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

export default WorkspaceSection;