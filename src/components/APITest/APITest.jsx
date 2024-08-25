
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */

import React, {useState, useEffect} from 'react'

// Работа с беком в Реакте. На данном примере:
// 1 - Старт запроса
// 2 - Состояние: ждем данные => (isLoading = true; isError = false;)
// 3 - Пришел ответ и с ним все хорошо => isLoading = false; data = response.data
// 3 - Произошла ошибка => isLoading = false; isError = true

function APITest () {
    const [users, setUsers]= useState(null);
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    
    console.log('component rendered');

    useEffect (() => {
        setIsLoading(true);
        setIsError(false);

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if(!response.ok) {
                    throw new Error('Ошибка в запросе');
                }

                return  response.json()

            })
            .then(data => {
                console.log(data);
                setUsers(data);
                setIsLoading(false);
            })

            .catch(error => {
                console.log(error);
                setIsLoading(false);
                setIsError(true)

            })
    },[]);

        useEffect(() => {
            console.log('вызов useEffect');
            localStorage.setItem('COUNT', count);
        }, [count])
    

    
    return (
        <div>

            <p>ВЫВОД ДАННЫХ ЧЕРЕЗ API</p>
            <br />
            <p>Счетчик через useEffect с LocalStorage: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Cчетчик++
            </button>
            <br />
            <br />

            {isError ? 'Ошибка запроса' : ''}
            {isLoading ? 'Загрузка' : ''}
            {users ? JSON.stringify(users) : ''}
           
        </div>
    )
}

export default APITest;