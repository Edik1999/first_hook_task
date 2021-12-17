import React, { useState, useEffect } from 'react';

const Details = ({info}) => {

    const [userDetails, setUserDetails] = useState({});
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (info.id){
            setLoading(true)
            fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`)
            .then(response=>response.json())
            .then(resp=>{
                setUserDetails({...resp});
                setLoading(false)
            })
            .catch(error => {
                setLoading(false)
                setError(error.message)
            })
        }
        
    }, [info]);

    
    return (
        <>
            {info.id
                ?
                    loading 
                        ?
                            <div className="loading"></div>
                        :
                            <>
                                {error 
                                    ?
                                        <>{error && <span>Ошибка!</span>}</>
                                    :               
                                        <div className="card">
                                            <div><img src={userDetails.avatar.slice(0, 24) + `${userDetails.id}`} alt="avatar"/></div>
                                            <h2>{userDetails.name}</h2>
                                            <p>City: {userDetails.details.city}</p>
                                            <p>Company: {userDetails.details.company}</p>
                                            <p>Position: {userDetails.details.position}</p>
                                        </div>
                                }
                            </>
                :
                    null
            }
        </>
    );
}

export default Details;
