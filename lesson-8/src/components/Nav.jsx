import React from "react";

const ListItems = [
  { name: "Home", url: "/" },
  { name: "News", url: "/" },
  { name: "Popular", url: "/" },
  { name: "Category", url: "/" },
];

export default function Nav() {
  return (
    <nav>
      <ul>
        {ListItems.map(({ name, url }) => (
          <li key={name}>
            <a href={url}>{name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

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
