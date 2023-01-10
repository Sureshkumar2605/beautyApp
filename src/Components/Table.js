import React from 'react'

function Table(props) {
    return (
        <div>
            <table className='table table-dark w-50'>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        email
                    </th>
                </tr>
                <tr>
                    <td>{props.user.name}</td>
                    <td>{props.user.email}</td>
                </tr>
            </table>
        </div>
    )
}

export default Table