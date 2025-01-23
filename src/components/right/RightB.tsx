import { useContext } from "react";
import { MyContext } from "../../context/MyContext";

const RightB = () => {
    const {setTrigger, trigger} = useContext(MyContext);
    return (
        <div>
            <button onClick={() => {
                setTrigger(!trigger);
            }}>switch</button>
        </div>
    );
};

export default RightB;