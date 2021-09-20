import React from 'react';

import "./styles.scss";

const SingleStatus = (props: any) => {
    return (
        <>
        <div className={"single-status "+props.color}>
            <div className="single-status-title">
                {props.title}
            </div>
            <div className="single-status-time">
                {props.time}
            </div>
        </div>
        <br />
        </>
    )
}

export default SingleStatus;