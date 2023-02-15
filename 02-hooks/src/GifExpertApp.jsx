import { useState } from "react"
import { AddCategory } from "./component/AddCategory";
import { GifGrid } from "./component/GifGrid";

export const GifExpertApp = () => {
    const [ categories, setCategories] = useState (['One punch']);
    
    const onNewCategory = ( newCategory  ) => {
        if ( categories.includes(newCategory))
            return;
        setCategories([...categories, newCategory]);
        
    }
    
    return (
        <>
        <h1>GifExpertApp</h1>
            {
                categories.map( (category ) => (
                     <GifGrid key= {category}  category={category}/>
                ))
            }
             <AddCategory onNewCategory={value=> onNewCategory(value)}/>
       
         
        </>
    )
}