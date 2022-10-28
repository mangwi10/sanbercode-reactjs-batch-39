import React from 'react';

function Tugas8(props) {
    return ( 
        <>
        <div class="container">
            <ul>
                <li> <strong>Nama : </strong> {props.name} </li>
                <li> <strong>Email : </strong> {props.email} </li>
                <li> <strong>Batch Pelatihan : </strong> {props.batch} </li>
            </ul>
        </div>
        </>
     );
}

export default Tugas8;