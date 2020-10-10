import React, {useState} from 'react';
import {AddCategory} from './components/AddCategory';
import {GifGrid} from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd= ()=>{
    //   setCategories(['nueva banda', ...categories]);
    // }

    return (
        <div>
            <h2>Gif Expert App</h2>
            <hr />
            <AddCategory setCategories={setCategories}/>

            <ol>
                {
                  categories.map(categoria=>{
                    return <GifGrid
                      categoria={categoria}
                      key={categoria}/>;
                  })
                }
            </ol>
        </div>
    )
}
