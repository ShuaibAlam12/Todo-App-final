import React, { useState } from 'react';
import imge from './hand-holding-writing-checklist-application-form-document-clipboard-white-background-3d-illustration.jpg';

const App = () => {
    const [items, setItems] = useState('');
    const [additem, setAdditem] = useState([]);

    const addItems = () => {
        if (!items) {

        }
        else {
            setAdditem([...additem, items]);
            setItems('');
        }

    }
    const deleteItem=(id)=>{
         const udatedData=additem.filter((elem,ind)=>{
            return ind!==id;
         });
         setAdditem(udatedData);
    }
    const removeAll=()=>{
        setAdditem([]);
    }
    return (
        <>
        <h1 className='main-heading'>To Do List App</h1>
            <div className='main_div'>
                <div className='child_div'>
                    <figure>
                        <img className='image' src={imge} alt="todo" />
                        <figcaption>Add your List here </figcaption>
                    </figure>
                    <div className='add_items'>
                        <input type="text" placeholder='✍️Add your Items Here...'
                            value={items}
                            onChange={(e) => setItems(e.target.value)} />
                        <i className="fa fa-plus add-btn" onClick={addItems}></i>
                    </div>
                    <div className='showItems'>
                        {
                            additem.map((elem, ind) => {
                                return (<>

                                    <div className='eachItem flex' key={ind}>
                                        <h2>{elem}</h2>
                                        <i className="fa fa-trash add-btn" placeholder='DeleteItem' onClick={()=>deleteItem(ind)}></i>
                                    </div>

                                </>)
                            })
                        }
                    </div>
                    <div className='showItems'>
                        <button className='btn effect04' data-sm-link-text="Remove all" onClick={removeAll}>Remove All</button>
                    </div>
                </div>
            </div>

            <footer className='footer'>Copyright © 2023 || Shuaib</footer>
        </>
    )
}

export default App;