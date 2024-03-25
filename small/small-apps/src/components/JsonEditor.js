import React, { useState } from "react";
import defaults from "./defaults"
import AceEditor from "react-ace"
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github_dark"
import "ace-builds/src-noconflict/theme-github"
import "ace-builds/src-noconflict/ext-language_tools"
import "./styles.css"

export default function JsonEditor({config}) {

    const [readOnly, setReadOnly] = useState(true)

    function setTheme() {
        return (readOnly ? "github_dark" : "github")
    }

    return (
        <div className="editorWrapper">
            <h2>{config} config file editor</h2>
            <p>Enter {config} config information here...</p>
            <AceEditor
                placeholder={`Input ${config} config here...`}
                mode="json"
                theme={setTheme()}
                name={`${config} Config`}
                readOnly={readOnly}
                fontSize={14}
                lineHeight={19}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value={JSON.stringify(defaults[config], null, "\t")}
                setOptions={{
                    enableBasicAutocompletion: false,
                    enableLiveAutocompletion: false,
                    enableSnippets: false,
                    showLineNumbers: true,
                    tabSize: 2,
                }} />
            <button onClick={() => setReadOnly(!readOnly)}>toggle read only</button>
            <button>submit {config} config</button>
        </div>);
}