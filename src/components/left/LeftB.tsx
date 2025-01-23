import { useContext, useEffect} from 'react';
import { MyContext } from '../../context/MyContext';
import './left.css'

const LeftB = () => {
    const {trigger} = useContext(MyContext)
    useEffect(() => {
        console.log(trigger)
    }, [trigger]);
    return (
        <div className={trigger ? 'dark' : 'light'}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur earum harum inventore totam?
                Accusamus eligendi esse impedit ipsa nostrum omnis provident quis quisquam sed unde! Accusantium
                assumenda cupiditate dolorem excepturi id impedit nulla quaerat quis ullam veritatis! Asperiores culpa
                minima minus natus nesciunt nulla sequi voluptas. Delectus, dignissimos eaque eius expedita explicabo,
                inventore laudantium nisi quas quisquam rerum sint, veritatis. Accusamus adipisci assumenda at atque
                beatae eaque est ex excepturi fugit incidunt ipsum, laborum laudantium libero maxime nihil numquam odio
                officiis, optio quae quam quibusdam reprehenderit, sunt tenetur velit veritatis voluptas voluptatum? At
                cupiditate distinctio eligendi ipsam neque nisi tempora.</p>
        </div>
    );
};

export default LeftB;