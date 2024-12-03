import React, { useState, useEffect } from 'react';

const FetchData = () => {
  const [posts, setPosts] = useState([]);
  // const [currentItems, setCurrentItems]= useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [ pageLimit ] = useState(10)

  const handleClick = (currentPage) => {
    setCurrentPage(currentPage)
  }

  const indexOfLastItem =  currentPage * pageLimit;
  const indexOfFirstItem = indexOfLastItem - pageLimit;
  const currentItems = posts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(posts.length / pageLimit)

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
        {currentItems?.map((post) => (
          <tr>
            <td>{post.userId}</td>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
          </tr>
        ))}
      </table>
      <div style={{display: 'flex', marginTop: '20px'}}>
        {
          Array.from({length: totalPages}, (_,i) => i + 1).map((pageNum)=> (
            <button 
            disabled={currentPage === pageNum}
            
            onClick={()=> handleClick(pageNum)}>{pageNum}</button>
          ))
        }
      </div>
    </div>
  );
};

export default FetchData;
