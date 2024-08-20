
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */

import React, {useState} from 'react'

function BIO () {
    const [person, setPerson] = useState({
        name: 'Gey',
        surname: 'Pidorov',
        age: 11,
        sex: 'male',
        interests: ['Мужики', 'Пиво']
    });


    const [form, setForm] = useState({
        name: '',
        surname: '',
        age: 0,
        sex: 'male',
        interests: ''
    });

    const [isError, setError] = useState(false);

    function handleChangeInput (e) {
        console.log(form.surname)
        const {name, value} = e.target
        setForm ({
            ...form,
            [name]: value
        })
    }

    function handleSetValueBtnClick(key){
        if(!form[key]) {
            setError(true)
            return;
        }
    
        setError(false)

        if(key === 'interests') {
            setPerson({
                ...person,
                [key]: 
                [...person[key], form[key]]
            });  

            return;
        }

        setPerson({
            ...person,
            [key]: form[key]
        });  
    }

    return (
        <div>   
            {isError ? (alert('Ошибка формы')) : ''}

            <input 
                type="text" 
                name='name'
                value={form.name}
                onChange={handleChangeInput}/>

            <button onClick={() => handleSetValueBtnClick('name')}>
                Задать имя
            </button>
            <br />
            <input 
                type="text" 
                name='surname'
                value={form.surname}
                onChange={handleChangeInput}/>

            <button onClick={() => handleSetValueBtnClick('surname')}>
                Задать фамилию
            </button>
            <br />
            <input 
                type="number" 
                name='age'
                value={form.age}
                onChange={handleChangeInput}/>

            <button onClick={()=> handleSetValueBtnClick('age')}>
                Задать возраст
            </button>

            <p>
            Пол:
            <label> 
                <input 
                type="radio" 
                name="sex"
                value="male"
                checked={form.sex === 'male'}
                onChange={handleChangeInput} />
                Мужики
            </label>
            <label>
                <input 
                type="radio" 
                name="sex" 
                value="female"
                checked={form.sex === 'female'}
                onChange={handleChangeInput} />
                Женщина
            </label>
            </p>

            <button onClick={()=> handleSetValueBtnClick('sex')}>
                    Задать пол
            </button>

            <br />
            <input 
                type="text" 
                name='interests'
                value={form.interests}
                onChange={handleChangeInput}/>
            
            <button onClick={() => handleSetValueBtnClick('interests')}>
                Задать интересы
            </button>
            



            <p>Имя:{person.name}</p>
            <p>Фамилия:{person.surname}</p>
            <p>Возраст:{person.age}</p>
            <p>Пол:{person.sex === 'male' ? 'Мужик ' : 'Тетя'}</p>

            <p>Интересы:</p>
            <div>{person.interests.map(interest => (
                <p key={interest} >- {interest}</p>
            ))}</div>
        </div>
    )
}

export default BIO