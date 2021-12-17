import React, { useState, useEffect } from 'react';

const List = ({onClickUser}) => {

    const [users, setUsers] = useState([])
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        load()
    }, []);

    const load = () => {
        setLoading(true)
        fetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json")
        .then(response=>response.json())
        .then(users=>{
            setLoading(false)
            setUsers(users)
        })
        .catch(error => {
            setLoading(false)
            setError(error.message)
        })
    }

    const clickHandler = (e,id,name) => {
        let li = document.querySelector('li.active')
        if (li) li.classList.remove('active')
        e.target.classList.add('active')
        onClickUser(id,name)
    }

    return (
        <>
            {loading 
                ?   
                    <div className="loading"></div>
                :
                    <>
                        {error 
                            ?
                                <>{error && <span>Ошибка!</span>}</>
                            :   
                                <ul>
                                    {users.map(user => 
                                        <li key={user.id} onClick={(event) => clickHandler(event,user.id,user.name)}>{user.name}</li>
                                    )}
                                </ul>
                        }
                    </>
            }
        </>
    );
}

export default List;
