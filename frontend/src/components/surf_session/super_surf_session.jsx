import SurfSessionIndexContainer from './surf_session_index_container';
import SurfSessionContainer from './surf_session_container';
import React from 'react';
const SuperSurfSessionContainer = function(){
    return(
        <div>
            <SurfSessionIndexContainer/>
            <SurfSessionContainer/>
        </div>

    )
}

export default SuperSurfSessionContainer