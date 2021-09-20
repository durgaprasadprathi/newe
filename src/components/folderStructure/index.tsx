import React from 'react';
import Tree from '@naisutech/react-tree'

class FolderStructure extends React.Component<any, {}> {
    constructor(props: any) {
        super(props);
        this.state = {

        }
    }

    onTreeStateChange = (state: any, event: any) => {
        console.log(state, event);
    }

    handleSelectedMenu = (select:any) =>{
        console.log(select)
    }

    render() {
        return (
            <div className="folder">
                <Tree 
                    nodes={this.props.data} 
                    containerStyle={{ height: "90vh" }} 
                    onSelect={this.handleSelectedMenu}
                />
            </div>

        );
    }
}

export default FolderStructure;