import React, { useEffect } from 'react';
import Toolbar from './Toolbar';
import SplitPane from 'react-split-pane';
import QueryEditorSqlEditor from './QueryEditorSqlEditor';
import ResultsPane from './ResultsPane';
import { useStateValue } from '../stateProvider';
import axios from '../Axios';
import ConnectedTablesPane from './ConnectedTablesPane';

function QueryEditor() {

    const [ { user, queryRaw, results, connectedTables }, dispatch] = useStateValue();

    const getConnectedTables = async(e) => {

        const response = await axios.get('/psqlEditor/tables');
        
        dispatch({
            type: "UPDATE_CONNECTED_TABLES",
            connectedTables: response.data
        });
        console.log("tables", connectedTables);
    }

    useEffect(() => {
        getConnectedTables();
    }, [results]);


    return (
        <div className="queryEditor"
            style={{
                height: '100vh',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Toolbar />
            <div className="queryEditor-body"
                style={{ 
                    position: 'relative', 
                    flexGrow: 1 
                }}
            >
                <SplitPane
                    split="vertical"
                    minSize={200}
                    defaultSize={250}
                    maxSize={-100}
                    resizerStyle={verticalStyles}
                >
                    <ConnectedTablesPane />
                    <SplitPane
                        split="horizontal"
                        minSize={100}
                        defaultSize={'50%'}
                        maxSize={-100}
                        resizerStyle={horitzontalStyles}
                    >
                        <SplitPane
                            split="vertical"
                            defaultSize={'100%'}
                            resizerStyle={verticalStyles}
                        >
                            <QueryEditorSqlEditor />
                        </SplitPane>
                        
                        <ResultsPane />
                    </SplitPane>
                </SplitPane>
            </div>
        </div>
    )
}

const verticalStyles = {
    background: '#000',
    opacity: '0.2',
    width: '1px',
    cursor: 'col-resize',
    margin: '0 5px',
};

const horitzontalStyles = {
    background: '#000',
    opacity: '0.2',
    height: '1px',
    cursor: 'row-resize',
    
};

export default QueryEditor
