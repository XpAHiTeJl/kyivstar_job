import React, { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const DataFetchingComponent = () => {
  const [posts, setPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchData = async (index) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_start=${index}&_limit=1`
      );
      const data = await response.json();
      if (data.length > 0) {
        setPosts(data);
      } else {
        alert("No more posts available!");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
    fetchData(currentIndex + 1);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      fetchData(currentIndex - 1);
    } else {
      alert("Already at the beginning!");
    }
  };

  useEffect(() => {
    fetchData(currentIndex);
  }, [currentIndex]);

  return (
    <div className="  bg-light w-25 ">
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
      <div>
        <button className=" " onClick={handlePrevious}>
          <IoIosArrowBack style={{ width: "50px", height: "50px" }} />
        </button>
        <button className=" " onClick={handleNext}>
          <IoIosArrowForward style={{ width: "50px", height: "50px" }} />
        </button>
      </div>
    </div>
  );
};

export default DataFetchingComponent;
