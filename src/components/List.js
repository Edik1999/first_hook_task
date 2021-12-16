import React, { useState, useEffect } from 'react';

const List = ({onClickUser}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        load()
    }, []);

    const load = () => {
        fetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json")
        .then(response=>response.json())
        .then(users=>{
        setUsers(users)
        })
    }

    const clickHandler = (e,id,name) => {
        let li = document.querySelector('li.active')
        if (li) li.classList.remove('active')
        e.target.classList.add('active')
        onClickUser(id,name)
    }

    return (
        <ul>
            {users.map(user => 
                <li key={user.id} onClick={(event) => clickHandler(event,user.id,user.name)}>{user.name}</li>
            )}
      </ul>
    );
}

export default List;
