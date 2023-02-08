import './Start.css';
import {useEffect, useState} from 'react';
import { KeyValuePair, YouWeBox } from '../types';
import { Row } from '../components/Row';

export const Start = () => {
    const initialBoxes : YouWeBox[]= [
        {id: 1, header: "Elvis Presley", body: "example@example.com"},
        {id: 2, header: "Lady Gaga", body: "example@example.com"},
        {id: 3, header: "David Gahan", body: "example@example.com",},
        {id: 4, header: "Billie Eilish", body: "example@example.com"},
        {id: 5, header: "Pink Floyd", body: "example@example.com"},
        {id: 6, header: "Ghost", body: "example@example.com"},
        {id: 7, header: "Robyn", body: "example@example.com"},
        {id: 8, header: "Anna Ternheim", body: "example@example.com"},
        {id: 9, header: "Johnny Cash", body: "example@example.com"},
        {id: 10, header: "David Bowie", body: "example@example.com"},
        {id: 11, header: "Hello Saferide", body: "example@example.com"},
        {id: 12, header: "First Aid Kit", body: "example@example.com"},
        {id: 13, header: "Simone de Bevoir", body: "example@example.com"},
        {id: 14, header: "Albin Lee Meldau", body: "example@example.com"},
        {id: 15, header: "Kleerup", body: "example@example.com"},
        {id: 16, header: "Röyksopp", body: "example@example.com"},
        {id: 17, header: "Frankie Goes to Hollywood", body: "example@example.com"},
        {id: 18, header: "Roxy Music", body: "example@example.com"},
    ];
    const [boxes, setBoxes] = useState<any[]>(initialBoxes);
    const [users, setUsers] = useState<any[]>([]);
    const [counter, setCounter] = useState(1);
    
    const fetchUsers = async () => {
        //Fetch a large number and pick from them until no more 
        const res = await fetch("https://reqres.in/api/users/?per_page=100");
        const json = await res.json();
        setUsers(json.data);
    };
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUser = () => {
        const user = users[Math.floor(Math.random()*users.length)];
        setUsers(users.filter(usr => usr.email !== user.email));
        if (users.length > 0){
            setCounter(counter+1);
            return {id: Math.max(...boxes.map(o => o.id)) + 1, body: user?.email, header: `${user.first_name} ${user.last_name}`, extra: `Added as #${counter}`, img: user.avatar};
        }
        else
            return false;
    };

    const handleAddBox = (id: number) => {
        const box = fetchUser();
    
        if (box){
            setBoxes(boxes.reduce((list,obj)=>Object.values(obj)[0]===id ? [...list,obj,box] : [...list,obj], []));
        }
        else
            alert('No more users to fetch');
    };

    const handleDeleteBox = (id: number) => {
        setBoxes(boxes.filter(item => item.id !== id));
    };

    const colors : KeyValuePair = {1: 'cyan', 2: 'red', 3: 'green', 0: 'blue'};

    function colorPicker(i:number) {
        return colors[i % 4];
    }

    for ( let i = 0; i < boxes.length; i++ ) {
     const color = colorPicker(i+1);
        boxes[i].color = color;
    }

    let chunkSize = 4;
    const chunks = [];

    for (let i = 0; i < boxes.length; i += chunkSize) {
        chunkSize = chunkSize-1;
        if (chunkSize === 0)
            chunkSize = 3;
        chunks.push(boxes.slice(i, i + chunkSize));
        
    }

  return (
    <div role="layoutcontainer" className="layoutcontainer" id="layoutContainer">
        <div role="container" className="container" id="innerContainer">
            <h1>Hello YouWe</h1>
            {
            chunks.map(
                (chunk:YouWeBox[], i:number) => 
                <Row key={i} showBoxes={chunk} handleAddBox={handleAddBox} handleDeleteBox={handleDeleteBox}/>
                )
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
