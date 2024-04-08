// import React from "react";

// const ListItems = [
//   { name: "Home", url: "/" },
//   { name: "News", url: "/" },
//   { name: "Popular", url: "/" },
//   { name: "Category", url: "/" },
// ];

// export default function Nav() {
//   return (
//     <nav>
//       <ul>
//         {ListItems.map(({ name, url }) => (
//           <li key={name}>
//             <a href={url}>{name}</a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

// !----
// import React, { useState, useEffect } from "react";

// const App = () => {
//   const [posts, setPosts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       setLoading(true);
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}`
//       );
//       const data = await response.json();
//       setPosts(data.slice(0, 1));
//       setLoading(false);
//     };

//     fetchPosts();
//   }, [currentPage]);

//   const handleNext = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   const handlePrev = () => {
//     setCurrentPage(currentPage - 1);
//   };

//   return (
//     <div>
//       <button onClick={handlePrev}>Назад</button>
//       <button onClick={handleNext}>Вперед</button>

//       {loading && <p>Загрузка...</p>}
//       {!loading &&
//         posts.map((post) => (
//           <div key={post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.body}</p>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default App;

// !---
import React, { useState, useEffect } from "react";

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
    // fetchData(currentIndex + 1);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      // fetchData(currentIndex - 1);
    } else {
      alert("Already at the beginning!");
    }
  };

  useEffect(() => {
    fetchData(currentIndex);
  }, [currentIndex]);

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
      <div>
        <button onClick={handlePrevious}>Назад</button>
        <button onClick={handleNext}>Вперед</button>
      </div>
    </div>
  );
};

export default DataFetchingComponent;
