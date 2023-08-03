import { useState,useEffect } from 'react'
import BlogList from './BlogList';
const Home = () => {
     const [date, setDate] = useState('This article was written on Thursday August 3rd, 2023');
     const [name, setName] = useState('Translate');
     
     const handleChange = (e) => {
         setDate("ce article a été écrit le jeudi 3 août 2023")
         setName("Traduire")
     }
    const [blogs, setBlogs] = useState([
        { title: "Bootstrap", body: "Framework...", author: "Mark Otto", id: 1 },
        { title: "Javascript", body: "lorem ipsum...", author: "Brendan Eich", id: 2 },
        { title: "React js!", body: "Framework...", author: "Meta Platforms", id: 3 }
    ])
    const handleDelete = (id) =>{
        const newsBlogs = blogs.filter(blogs => blogs.id!==id);
        setBlogs(newsBlogs)
    }
    useEffect(()=>{
        console.log("use effect ran")
        console.log(name + " : " + date)
    },[name,date])
    return (<div className="home">

        <BlogList blogs ={blogs} title="All blogs" handleDelete={handleDelete}/>
        <p>{date}</p>
        <button onClick={handleChange}>{name}</button>
    </div>

    );
}

export default Home;
