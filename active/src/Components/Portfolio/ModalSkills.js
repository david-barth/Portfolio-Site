import React from 'react'; 
import {Layer} from 'grommet'; 


const ModalSkills = (props) => {

    return (
        <Layer  onEsc={props.popUp}
                onClickOutside={props.popUp}        
                        >
            <div>
                <h1>hi</h1>
            </div>
        </Layer>
    )

}

export default ModalSkills; 