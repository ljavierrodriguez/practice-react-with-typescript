import React, { useState } from 'react'

export const Welcome = () => {
    const [state, setState] = useState({
        name: '',
        lastname: ''
    })

    return (
        <>
            <div>Welcome {state?.name || 'anonimous'}</div>
            <button onClick={() => {
                setState((prevState) => {
                    return { ...prevState, name: 'Luis' }
                });
            }}>
                Login
            </button>
        </>
    )
}
