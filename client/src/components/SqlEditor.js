import React from 'react';
import AceEditor from 'react-ace';
import { useStateValue } from '../stateProvider';
require(`ace-builds/src-noconflict/mode-pgsql`);
require(`ace-builds/src-noconflict/theme-iplastic`);


function SqlEditor() {

    const [{ user, queryRaw, results, connectedTables }, dispatch] = useStateValue();

    const setOptions = {
        useWorker: true,
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
      };

      function onChange(newValue) {
        dispatch({
            type: "UPDATE_QUERY",
            queryRaw: newValue
        });
      }
      

    return (
        <div className="sqlEditor">
            <AceEditor
                mode="pgsql"
                theme="iplastic"
                onChange={onChange}
                value={queryRaw}
                name="ace-query-editor"
                editorProps={{ $blockScrolling: true }}
                width={'99%'}
                height={650+'px'}
                fontSize={14}
                setOptions={setOptions}
                showGutter={true}
                showPrintMargin={false}
            />
        </div>
    )
}

export default SqlEditor
