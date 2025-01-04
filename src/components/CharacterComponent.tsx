import { FC } from "react";
import { ISimpson } from "../interfaces/simpson.iunterface";


type SimpsonProps = {
    simpson: ISimpson
}
const CharacterComponent: FC<SimpsonProps> = ({simpson}) => {
    const {name, surname, age, info, photo} = simpson;
    return (
        <div className="character">
            <img src={photo} alt={name}/>
            <div>
                <h1>{name} {surname}</h1>
                <h3>{age} y.o.</h3>
                <p>{info}</p>
            </div>

        </div>
    );
};

export default CharacterComponent;