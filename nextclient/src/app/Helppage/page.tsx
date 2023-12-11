"use client"
import * as React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import './styling.css';


interface recipe{
    title:string 

}
interface buttonProps{
    onClick: () => void;
    label: string;
}

const customButton: React.FC<buttonProps>= ({ onClick, label}) => {
    return(
        <button onClick = {onClick}>
            
            <main> Frequently asked questions!
            </main>
            <h2>
                How to search for a recipe?
            </h2>
            <text>
                When searching for a recipe, enter the dish name into the search bar and press enter or wire the first letter and multiple dished
            </text>
            <h3>
                How random recipe generator works?
            </h3>
            <text>
                When you press on the random button a random food item will be presented. It can be a drink, baking recipe, or meal. 
            </text>
            

        </button>
    );
};

export default customButton;