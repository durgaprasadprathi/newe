import React from 'react';
import MonacoEditor from 'react-monaco-editor';

class TextEditor extends React.Component<{},any> {
    constructor(props:any) {
        super(props);
        this.state = {
            code: '',
        }
    }
    editorDidMount(editor:any, monaco:any) {
        console.log('editorDidMount', editor);
        editor.focus();
    }
    onChange(newValue:any, e:any) {
        console.log('onChange', newValue);
    }
    render() {
        const code = this.state.code;
        const options = {
            selectOnLineNumbers: true
        };
        return (
            <MonacoEditor
                width="100%"
                height="90vh"
                language="javascript"
                theme="vs-dark"
                value={code}
                options={options}
                onChange={this.onChange}
                editorDidMount = {this.editorDidMount }
        />
        );
    }
}

export default TextEditor;