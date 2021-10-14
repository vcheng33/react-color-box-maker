import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

/** A component that contains the state for boxes
 *  and renders Box Components and NewBoxForm component
 */
function BoxList() {
    const [boxes, setBoxes] = useState([]);

    function addBox(box) {
        let newBox = {...box, id: uuid()};
        setBoxes(() => ([...boxes, newBox]));
    }

    function removeBox(id) {
        setBoxes(curr => curr.filter(box => {
            return box.id !== id;
        }))
    }

    return (
        <div>
            <div><NewBoxForm addBox={addBox} /></div>
            <div>
                {boxes.map(b => (
                    <Box 
                        key={b.id}
                        id={b.id}
                        width={b.width}
                        height={b.height}
                        backgroundColor={b.backgroundColor}
                        removeBox={removeBox}
                    />
                ))

                }
            </div>
        </div>
    )
}



export default BoxList;