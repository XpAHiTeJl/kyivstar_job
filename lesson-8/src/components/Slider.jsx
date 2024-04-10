import React, { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import "./slider.css";

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
    <div
      className="position-relative d-flex justify-content-center align-items-center  bg-light "
      style={{ width: "40%" }}
    >
      {posts.map((post) => (
        <div className=" w-75 d-flex flex-column  " key={post.id}>
          <h3>{post.title[0].toUpperCase() + post.title.slice(1)}</h3>
          <p>{post.body}</p>
        </div>
      ))}
      <div className="position-absolute bottom-0 start-0 ">
        <button className="buttons   border border-0" onClick={handlePrevious}>
          <IoIosArrowBack
            style={{ width: "70px", height: "70px", color: "white" }}
          />
        </button>
        <button className="buttons   border border-0" onClick={handleNext}>
          <IoIosArrowForward
            style={{ width: "70px", height: "70px", color: "white" }}
          />
        </button>
      </div>
    </div>
  );
};

export default DataFetchingComponent;
