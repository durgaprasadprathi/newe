import React from 'react';

import SingleStatus from './singleStatus';

import "./styles.scss";


const StatusArea = (props:any) =>{
    return(
        <div className="status-area">
            <SingleStatus
                color="warning"
                title="Syntax error in terraform code."
                time="10-20-2021 11:55am"
                type="error"
            />
            <SingleStatus
                color="error"
                title="Amazon Virtual Private Cloud is a  cloud computing service that provides users a virtual private cloud."
                time="10-20-2021 11:55am"
            />
            <SingleStatus
                color="success"
                title="Canvas saved successfully."
                time="10-20-2021 11:55am"
            />
        </div>
    )
}

export default StatusArea;