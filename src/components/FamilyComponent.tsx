import { FC } from "react";
import { simpsons } from "./data";
import CharacterComponent from "./CharacterComponent";


const FamilyComponent:FC = () => {

    return (
        <div>
            {
                simpsons.map((item, i) => (<CharacterComponent key={i} simpson={item} />))
            }
        </div>
    );
};

export default FamilyComponent;