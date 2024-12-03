import React, { useState, useEffect } from 'react';

const FetchData = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <table>
        <tr>
          <th>User Id</th>
          <th>Post Id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
        {posts?.map((post) => (
          <tr>
            <td>{post.id}</td>
            <td>{post.userId}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default FetchData;
