import { useState } from "react";
import "./App.css";

function Header(): JSX.Element {
  return <h2 className="header">FIRST REACT APP</h2>;
}

function Post(props: { _id: number }): JSX.Element {
  return (
    <div className="post" id={`post${props._id}`}>
      <h2 className="title">Title - {`${props._id}`}</h2>
      <hr />
      <p className="info">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
        nihil facilis voluptas rerum itaque labore tenetur fugiat non
        perferendis saepe.
      </p>
    </div>
  );
}

function Posts(props: { count: number }): JSX.Element {
  return (
    <div className="posts">
      {(() => {
        const posts: JSX.Element[] = [];
        for (let i = 0; i < props.count; ++i) {
          posts.push(<Post _id={i + 1} key={i} />);
        }
        return posts;
      })()}
    </div>
  );
}

function Tag(props: { _id: number }): JSX.Element {
  const [isHidden, changeState] = useState(false);
  const toggleState = () => {
    const tag = document.getElementById(`tag${props._id}`)!;
    const post = document.getElementById(`post${props._id}`)!;
    if (isHidden) {
      tag.classList.remove("hidden");
      post.classList.remove("hidden");
      changeState(false);
      return;
    }
    tag.classList.add("hidden");
    post.classList.add("hidden");
    changeState(true);
  };
  return (
    <button id={`tag${props._id}`} onClick={toggleState} className="tag">
      Tag
    </button>
  );
}

function AddNewBtn(props: {
  count: number;
  addPostHandler: React.Dispatch<React.SetStateAction<number>>;
}) {
  const addNewTagAndPost = () => {
    props.addPostHandler(props.count + 1);
  };

  return (
    <button className="btn add" id="addNewBtn" onClick={addNewTagAndPost}>
      +
    </button>
  );
}

function RemoveBtn(props: {
  count: number;
  addPostHandler: React.Dispatch<React.SetStateAction<number>>;
}) {
  const removeTagAndPost = () => {
    const n = props.count;
    if (!n) return;
    props.addPostHandler(props.count - 1);
  };

  return (
    <button className="btn remove" id="removeBtn" onClick={removeTagAndPost}>
      -
    </button>
  );
}

function Controls(props: {
  count: number;
  addPostHandler: React.Dispatch<React.SetStateAction<number>>;
}) {
  let i: number = 0;
  return (
    <div className="controls">
      <AddNewBtn
        count={props.count}
        addPostHandler={props.addPostHandler}
        key={++i}
      />
      <RemoveBtn
        count={props.count}
        addPostHandler={props.addPostHandler}
        key={++i}
      />
    </div>
  );
}

function Tags(props: {
  count: number;
  addPostHandler: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element {
  return (
    <div className="tags" id="tags">
      {(() => {
        const tags: JSX.Element[] = [];
        let i: number = 0;
        while (i < props.count) {
          ++i;
          tags.push(<Tag _id={i} key={i} />);
        }
        tags.push(
          <Controls
            count={props.count}
            addPostHandler={props.addPostHandler}
            key={++i}
          />
        );

        return tags;
      })()}
    </div>
  );
}

function Content(props: {
  count: number;
  addPostHandler: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element {
  return (
    <div className="content">
      <Posts count={props.count} />
      <Tags count={props.count} addPostHandler={props.addPostHandler} />
    </div>
  );
}

export default function App(props: { initCount: number }) {
  const [postCount, addPostHandler] = useState(props.initCount);
  return (
    <>
      <Header />
      <Content count={postCount} addPostHandler={addPostHandler} />
    </>
  );
}
