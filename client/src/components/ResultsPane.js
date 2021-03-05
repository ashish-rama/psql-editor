import React, { useEffect, useState } from 'react';
import { useStateValue } from '../stateProvider';

function ResultsPane() {

    const [ { user, queryRaw, results, connectedTables }, dispatch] = useStateValue();

    useEffect(() => {
    }, [results]);

    return (
        <div className="resultsPane"
            style={{
                position: 'absolute',
                top: 20,
                bottom: 0,
                left: 20,
                right: 0,
            }}
        >
            <h4>Query Results</h4>
            <div className="resultsTable"
                style={{ 
                    width: '100%', 
                    height: '100%', 
                    overflowY: 'auto',
                }}
            >
                <table className="styled-table" 
                    style={{
                        borderCollapse: "collapse",
                        margin: '25px 0',
                        fontSize: '0.9em',
                        boxShadow: '0 0 20px rgba(0, 0, 0, 0.15)',
                    }}
                >
                    <thead>
                        <tr
                            style= {{
                                backgroundColor: '#009892',
                                color: '#ffffff',
                                textAlign: 'left',
                            }}
                        >
                            {results.length > 0 ? Object.keys(results[0]).map(title => (
                                <th style={{padding: "12px 15px"}}>{title}</th>
                            )) : ""}
                        </tr>
                    </thead>
                    <tbody>
                        {results.map(row => (
                            <tr
                                style={{
                                    borderBottom:"1px solid #dddddd",
                                }}
                            >
                                {Object.values(row).map(val => (
                                    <td style={{padding: "12px 15px"}}>{val}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ResultsPane
