import React from 'react';
import {StyledLoader} from './index.style';

function Loader(){
   return(
       <center>
    <StyledLoader className = "lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </StyledLoader>
    </center>
   );
}

export default Loader;