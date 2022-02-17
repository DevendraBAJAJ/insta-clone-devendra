import faker from '@faker-js/faker'
import { useEffect, useState } from 'react'
import Story from './Story'

function Stories() {

    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i
        }))

        setSuggestions(suggestions);
    }, [])
    return (
        <div className='flex space-x-2 p-6 mt-8 bg-white
        border-gray-200 border rounded-sm overflow-x-scroll 
        scrollbar-thin scrollbar-thumb-black'>
            {suggestions.map(user => (
                <Story key={user.id} img={user.avatar} username={user.username} />
            ))}

        </div>
    )
}

export default Stories
