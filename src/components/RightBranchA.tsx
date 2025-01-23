import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const RightBranchA = () => {
    const {counterValue ,increment} = useContext(MyContext)
    return (
        <div>
            <button onClick={() => {
                increment(counterValue)
            }}>
                increment counter
            </button>
        </div>
    );
};

export default RightBranchA;