import React from 'react';
import Editor from '../../components/codeEditor';
import FolderStructure from "../../components/folderStructure";
import Overlay from "../../components/overlay";

let data = [
    {
        "id": 12345678,
        "parentId": null as any,
        "label": "First",
        "items": [
            {
                "id": 87654321,
                "label": "My file",
                "parentId": 12345678,
            }
        ]
    },
    {
        "id": 56789012,
        "parentId": 12345678,
        "label": "My child node",
        "items": [
            {
                "id": 876543211,
                "label": "My file2",
                "parentId": 56789012
            }
        ]
    },
    {
        "id": 12345679,
        "parentId": null as any,
        "label": "Second",
    }
]

const CodeEditor = (props: any) => {



    //Folder Structure



    //

    console.log(props)
    return (
        <>
            {
                props.overlay
                    ?
                    <Overlay
                        overlay={props.overlay}
                        isLarge={true}
                        title={"Code Editor"}
                        handleOverLay={() => props.handleOverlay(false)}
                    >
                        <div className="row" style={{padding:-2}}>
                            <div className="col-md-2" style={{padding:0}}>
                                <FolderStructure 
                                    data={data}
                                />
                            </div>
                            <div className="col-md-10" style={{padding:0}}>
                                <Editor 
                                
                                />
                            </div>
                        </div>
                    </Overlay >
                    : null
            }
        </>
    );

}



export default CodeEditor;