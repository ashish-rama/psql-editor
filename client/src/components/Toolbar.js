import React from 'react';
import { useStateValue } from '../stateProvider';
import axios from '../Axios';
import { Button } from '../styledComponents';

function Toolbar() {

    const [ { user, queryRaw, results, connectedTables }, dispatch] = useStateValue();

    const runQuery = async(e) => {
        e.preventDefault();

        const response = await axios.post('/psqlEditor/query', {
            queryRaw: queryRaw,
        })
        
        dispatch({
            type: "UPDATE_RESULTS",
            results: response.data
        });
    }

    //TODO update to emotion styling
    return (
        <div className="toolbar"
            style={{
                width: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.04)",
                padding: 6,
                borderBottom: "1px solid rgb(204, 204, 204)",
            }}
        >
            <div className="toolbar__content"
                style={{ 
                    display: 'flex', 
                    justifyContent:"space-between", 
                    alignItems:"center", 
                    paddingRight: 20, 
                    paddingLeft: 20, 
                }}
            >
                <p className="editorTitle">PostgreSQL Editor</p>
                <Button className="queryButton" onClick={runQuery}>Run Query</Button>
            </div>
        </div>
    )
}

export default Toolbar;