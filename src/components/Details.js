import React, { useState, useEffect } from 'react';

const Details = ({info}) => {

    const [userDetails, setUserDetails] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (info.id){
            fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`)
            .then(response=>response.json())
            .then(resp=>{
                setUserDetails({...resp});
                setLoading(false)
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
                            <div className="card">
                                <div><img src={userDetails.avatar.slice(0, 24) + `${userDetails.id}`} alt="avatar"/></div>
                                <h2>{userDetails.name}</h2>
                                <p>City: {userDetails.details.city}</p>
                                <p>Company: {userDetails.details.company}</p>
                                <p>Position: {userDetails.details.position}</p>
                            </div>
                :
                    null
            }
        </>
    );
}

export default Details;
