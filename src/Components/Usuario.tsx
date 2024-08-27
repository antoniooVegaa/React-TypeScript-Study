import { useState } from 'react'

interface User {
    uid: string,
    name: string
}

const userTemp: User= {
    uid: 'XXXX',
    name: 'XXXX'
}

export default function Usuario() {

    const [user, setUser] = useState<User>(userTemp);

    const login = () => {
        setUser({
            uid: 'BFK123',
            name: 'Antonio Vega'
        })
    }


    return (
        <div className='mt-5'>
            <h3>
                Usuario: useState
            </h3>
            <button
                className='btn btn-outline-primary'
                onClick={login}>
                Login
            </button>
            {
                (user)
                    ? <pre> {JSON.stringify(user)} </pre>
                    : <pre> {JSON.stringify(user)}. </pre>
            }



        </div>
    )
}
