import React,{useState,useEffect} from 'react'

const HomePage = ({data}) => {

    const [blogs,setBlogs] = useState([])

    useEffect(() => {
        
        async function getBlog(){
            setBlogs(data)
        }
        console.log(data)
        getBlog()
    }, [data])

    return (
        <div>
            {
                blogs.map((blog,index)=>{
                    return(
                    <div key={blog.id}>
                        {blog.title}
                    </div>
                    )
                })
            }
        </div>
    )
}

export default HomePage
