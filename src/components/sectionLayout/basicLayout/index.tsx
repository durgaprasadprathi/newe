import React, { useState, useEffect } from 'react';
import Layout from "../../../components/pageLayout"
import Table from "../../../components/UI/Table";
import ActionButton from '../../../components/UI/actionButton';
const BasicLayout = (props: any) => {
    return (
        <>
            <ActionButton
                onClick={props.handleOverlay}
                title={"Add"}
                icon={"ri-add-circle-fill"}
            />
            <ActionButton
                onClick={() => { }}
                title={"Delete"}
                icon={"ri-delete-bin-line"}
                color={"red"}
            />
            <ActionButton
                onClick={() => { }}
                title={"Import"}
                icon={"ri-upload-2-line"}
            />
            <ActionButton
                onClick={() => { }}
                title={"Export"}
                icon={"ri-download-2-line"}
            />
            <Layout
                title=""
            >
                <Table
                    columns={props.columns}
                    pageNumber={1}
                    totalSize={1}
                    rows={props.rows}
                    handleSearch={() => { }}
                />
            </Layout>
        </>
    )
}

export default BasicLayout;