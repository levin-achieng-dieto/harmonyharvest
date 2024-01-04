import React, { useEffect, useState } from "react";
// import Header from "./Header";
// import Post from "./Post";
import axios from "axios";
// import Footer from "./Footer";
// import BlogList from "./BlogList";


const api = "http://localhost:3000/blogs";
function Dashboard() {

  const [post, setPost] = useState([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const response = await axios.get(api);
    setPost(response.data);
  };

  return (
    <div className="container-fluid">
      {/* <Header /> */}
      {/* <Post posts={post} loadPosts={loadPosts} /> */}
      {/* <BlogList />
      <Footer /> */}
    </div>
  )
}

export default Dashboard;