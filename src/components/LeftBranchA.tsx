import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const LeftBranchA = () => {
    const {counterValue} = useContext(MyContext)
    return (
        <div>
            Left BranchA
            <p>current cout value{counterValue}</p>
        </div>
    );
};

export default LeftBranchA;