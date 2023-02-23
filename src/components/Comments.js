import { useState, useEffect } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  // Insturction:
  // Use endpoint: https://jsonplaceholder.typicode.com/comments to get a list of comments.
  // display the comment body on the screen
  // add event listeners to each comment body that when clicked will simply console.log the comment id.

  // you will need to use the useEffect hook. Do this in async / await syntax.
  const getComments = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const data = await response.json();
    setComments(data);
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div>
      {comments.map((element) => {
        return (
          <Comment
            key={element.id}
            id={element.id}
            name={element.name}
            email={element.email}
            body={element.body}
          />
        );
      })}
    </div>
  );
};

const Comment = (props) => {
  const handleClick = (e) => {
    console.log(e.target.id);
  };
  return (
    <>
      <br></br>
      <div>
        <h2>{props.email}</h2>
        <div id={props.id} onClick={handleClick}>
          {props.body}
        </div>
      </div>
    </>
  );
};
export default Comments;
