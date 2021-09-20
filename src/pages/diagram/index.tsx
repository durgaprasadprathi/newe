import React, { useState} from 'react';
import { Container } from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
// import DiagramSection from '../../container/diagram/canvas';
import "./styles.scss";
import DiagramSection  from "../../container/gojs";


const Diagram = () => {

    const [breadcrumbItems, setBreadcrumbs] = useState([
    ])

    return (
        <>
            <div className="page-content diagram-page">
                <DiagramSection />
                {/* <JsonArea /> */}
            </div>
        </>

    )
}

export default Diagram;