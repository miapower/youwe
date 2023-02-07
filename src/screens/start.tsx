import './Start.css';

import {useState} from 'react';
import { KeyValuePair, YouWeBox } from '../types';
import { Row } from '../components/Row';

export const Start = () => {
    const initialBoxes : YouWeBox[]= [
        {header: "Header 1", body: "Body 1"},
        {header: "Header 2", body: "Body 2"},
        {header: "Header 3", body: "Body 3"},
        {header: "Header 4", body: "Body 4"},
        {header: "Header 5", body: "Body 5"},
        {header: "Header 6", body: "Body 6"},
        {header: "Header 7", body: "Body 7"},
        {header: "Header 8", body: "Body 8"},
        {header: "Header 9", body: "Body 9"},
        {header: "Header 1", body: "Body 1"},
        {header: "Header 2", body: "Body 2"},
        {header: "Header 3", body: "Body 3"},
        {header: "Header 4", body: "Body 4"},
        {header: "Header 5", body: "Body 5"},
        {header: "Header 6", body: "Body 6"},
        {header: "Header 7", body: "Body 7"},
        {header: "Header 8", body: "Body 8"},
        {header: "Header 9", body: "Body 9"},
    ];
    const [boxes, setBoxes] = useState(initialBoxes);

    const colors : KeyValuePair = {1: 'cyan', 2: 'red', 3: 'green', 0: 'blue'};

    function colorPicker(i:number) {
        return colors[i % 4];
    }

    for ( let i = 0; i < boxes.length; i++ ) {
     const color = colorPicker(i);
        boxes[i].color = color;
    }
 
    let chunkSize = 3;
    const chunks = [];

    for (let i = 0; i < boxes.length; i += chunkSize) {
        chunks.push(boxes.slice(i, i + chunkSize));
        chunkSize = chunkSize-1;
        if (chunkSize === 0)
            chunkSize = 3;
    }

  return (
    <div role="layoutcontainer" className="layoutcontainer">
        <div role="container" className="container">
            <h1>Hello YouWe</h1>
            {
            chunks.map((chunk:YouWeBox[], i:number) => <Row key={i} showBoxes={chunk} />)

}
        </div>

    </div>
  );
};


/*
# FLUID LAYOUT WITH BOXES

## Acceptance criteria:

* Create markup that creates 2 containers
* Create/generate markup for 1 initial box

### Now for some rules

* Layout
    ** Should never exceed a width of 1200px

* Container1
    ** Should have a max-width of 1200px
    ** Should be filled with an image of your choice
       as a background

* Container2
    ** Should never exceed a width of 860px
    ** Should have a light gray background

* Boxes
    ** Each box should contain some kind of sections for a header and a "body"
    ** The 2nd (2 mod 4) box should have a red background
    ** The 3rd (3 mod 4) box should have a green background
    ** The 4th (4 mod 4) box should have a blue background
    ** Start over

* Rows:
    ** The 1st row should contain 3 boxes (1/3)
    ** The 2nd row should contain 2 boxes (1/2)
    ** The 3rd row should contain 1 box   (1/1)
    ** After row 4, it starts over again with 3 boxes

* Everytime you hover a box
    ** The box should show a 5px black border
    ** Container1 should show a 10px black border
    ** container2 should show a 15px black border

* Everytime you click on a box
    ** A request for a random user should be made to the
       Reqres API (https://reqres.in/)
    ** The user should be unique
    ** A new box should be created and inserted directly after
       the box you just clicked, as per the rules above
    ** The new box should add the counter to their
       header, starting with 1, and counting upwards
    ** The new box created should dynamically be filled
       with the user information from your request to Reqres

* Make it possible to delete a box
    ** Don't let the layout/colors break if one
       deletes e.g. box nr 4

* Bonus
    ** Add a testsuite


### Sketch


=====CONTAINER1============================================
|                                                         |
|    =====CONTAINER2==================================    |
|    |                                               |    |
|    |     ROW1                                      |    |
|    |     |---------|  |---------|  |---------|     |    |
|    |     | 1     x |  | 2     x |  | 3     x |     |    |
|    |     |---------|  |---------|  |---------|     |    |
|    |     |         |  |         |  |         |     |    |
|    |     |---------|  |---------|  |---------|     |    |
|    |                                               |    |
|    |     ROW2                                      |    |
|    |     |----------------|  |---------------|     |    |
|    |     | 4            x |  | 5           x |     |    |
|    |     |----------------|  |---------------|     |    |
|    |     |                |  |               |     |    |
|    |     |----------------|  |---------------|     |    |
|    |                                               |    |
|    |     ROW3                                      |    |
|    |     |-----------------------------------|     |    |
|    |     | 6                               x |     |    |
|    |     |-----------------------------------|     |    |
|    |     |                                   |     |    |
|    |     |-----------------------------------|     |    |
|    |                                               |    |
|    |     ROW4 (STARTS OVER)                        |    |
|    |     |---------|  |---------|  |---------|     |    |
|    |     | 7     x |  | 8     x |  | 9     x |     |    |
|    |     |---------|  |---------|  |---------|     |    |
|    |     |         |  |         |  |         |     |    |
|    |     |---------|  |---------|  |---------|     |    |
|    |                                               |    |
|    =================================================    |
|                                                         |
===========================================================

*/
