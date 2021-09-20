import React from 'react';
import "./styles.css";

const MenuItem = (props: any) => {
    return (
        <div 
            className={props.active ? "canvas-menu canvas-active" : "canvas-menu"}
            onClick={props.onClick}
        >
            {props.active
                ?
                <i className="ri-arrow-down-s-fill"></i>
                :
                <i className="ri-arrow-right-s-fill"></i>
            }
            {props.title}
        </div>
    )
}

export default MenuItem;