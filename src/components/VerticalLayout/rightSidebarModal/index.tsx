import React from 'react';

//components
import StatusArea from "../../diagram/statusArea";

//CSS
import "./styles.css";
const RightSideModal = () => {
    return (
        <div className="right-sidebar-modal">
            <div className="diagram-sidebar-top-section">
                <div className="right-sidebar-title">
                    Title
                </div>
                <div className="right-sidebar-display">
                    Name: VPC<br />
                    Type: Type<br />
                    Name: VPC<br />
                    Type: Type<br />
                </div>
            </div>
            <div className="diagram-sidebar-bottom-section">
                <StatusArea 
                />
            </div>
        </div>
    )
}

export default RightSideModal;