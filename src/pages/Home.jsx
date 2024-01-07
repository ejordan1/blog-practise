import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {


    const posts = [
        {
            id: 1,
            title: "test 1 hello",
            desc: "description 1",
            img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: 2,
            title: "test 2 hello",
            desc: "hello I am the second post",
            img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: 3,
            title: "test 3 hello",
            desc: "description 3",
            img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: 4,
            title: "test 4 hello",
            desc: "description 4",
            img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: 5,
            title: "test 5 hello",
            desc: "description 5",
            img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        }
    ];

    return (
    <div className='home'>
        <div className='posts'>
            {posts.map((post)=>(
                <div className='post' key={post.id}>
                    <div className="img">
                        <img src={post.img} alt="" />
                        </div>
                            <div className="content">
                                <Link to={`/post/${post.id}`}>
                                    <h1>{post.title}</h1>
                                    </Link>
                                    <p>{post.desc}</p>
                                    <button>Read</button>

                        </div>
                </div>

                ))}
        </div>
        

    </div>);
}
 
export default Home;