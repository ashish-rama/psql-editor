import React from 'react';
import { useStateValue } from '../stateProvider';

function ConnectedTablesPane() {

    const [ { user, queryRaw, results, connectedTables }, dispatch] = useStateValue();

    return (
        <div className="connectedTables" style={{ paddingTop: 20, paddingLeft: 20, }}>
            <h4 className="connectedTables-title">Connected Tables</h4>
            <div className="tableDisplay" style={{ paddingTop: 5, }} >
                <table>
                    {connectedTables.map(row => (
                        <tr>
                            {Object.values(row).map(val => (
                                <td>{'--'} {val}</td>
                            ))}
                        </tr>
                    ))}
                </table>
            </div> 
        </div>
    )
}

export default ConnectedTablesPane
