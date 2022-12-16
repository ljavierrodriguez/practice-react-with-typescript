import { useState } from 'react'

type WelcomeProps = {
    name: string,
    messageCount: number,
    isLoggedIn: boolean
}

export const Welcome = (props: WelcomeProps) => {
    return (
        <>
            <h3>
                {props.isLoggedIn
                    ? `Welcome ${props.name}, You have ${props.messageCount} unread messages.`
                    : `Welcome Guest`}
            </h3>
        </>
    )
}