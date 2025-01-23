import {FC, memo} from 'react';

// функция мемо принимает компонент если проверхностное сравнение пропсов не выявило разницы, то компонент не перерендится
const User:FC<{foo: () => void,  arr:number[] }> = memo((arr) => {
    console.log('User')
    console.log(arr)
    return (
        <div>
            User
        </div>
    );
})

export default User;