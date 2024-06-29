// import React, { Component } from 'react'; // For Classes
import React from 'react';
import loading from './bfR.gif';

// Class Component:
// export class Spinner extends Component {
//   render() {
//     return (
//       <div className='text-center'>
//         <img src={loading} alt="loading" />
//       </div>
//     )
//   }
// }
// Functional Component:
const Spinner = () => {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" />
      </div>
    )
}

export default Spinner