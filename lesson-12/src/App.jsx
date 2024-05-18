import "./App.css";
import Comment from "./component/Comment";
import CommentTwoPerson from "./component/CommentTwoPerson";

function App() {
  return (
    <div className="App flex flex-col items-center bg-gray-100 w-">
      <Comment />
      <CommentTwoPerson />
    </div>
  );
}

export default App;
