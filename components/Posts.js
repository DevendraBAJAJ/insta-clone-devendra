import Post from './Post'

function Posts() {
    const posts = [
        {
            id: '1',
            username: 'devendra77',
            userImg: 'https://user-images.githubusercontent.com/16799932/154198093-6951995c-ca8f-41fe-a0a7-1399c4a911ae.jpeg',
            img: 'https://user-images.githubusercontent.com/16799932/154198093-6951995c-ca8f-41fe-a0a7-1399c4a911ae.jpeg',
            caption: 'I just earned a 100M$ in crypto. Thanks for all your support!'
        },
        {
            id: '2',
            username: 'devendra77',
            userImg: 'https://user-images.githubusercontent.com/16799932/154198093-6951995c-ca8f-41fe-a0a7-1399c4a911ae.jpeg',
            img: 'https://user-images.githubusercontent.com/16799932/154198093-6951995c-ca8f-41fe-a0a7-1399c4a911ae.jpeg',
            caption: 'I just earned a 100M$ in crypto. Thanks for all your support!'
        }
    ]
    return (
        <div>
            {posts.map((post) => (
                <Post key={post.id} 
                id={post.id} 
                username={post.username} 
                userImg={post.userImg}
                img={post.img}
                caption={post.caption} 
                />
            ))}
        </div>
    )
}

export default Posts
