import { useState } from "react";
import "./App.css";
import {
  postsData,
  minInfoCount,
  maxInfoCount,
  emojiMin,
  emojiMax,
} from "./globals";

function Header(): JSX.Element {
  return <h2 className="header">FIRST REACT APP</h2>;
}

function Post(props: { _id: number; children: JSX.Element[] }): JSX.Element {
  return (
    <div className="post" id={`post${props._id}`}>
      <h2 className="title">Title</h2>
      <hr />
      {props.children}
    </div>
  );
}

function Posts(props: { count: number }): JSX.Element {
  return (
    <div className="posts">
      {(() => {
        const posts: JSX.Element[] = [];
        let id: number = 0;
        let infoCount: number = 0;
        let emoji: string = "";
        for (let i = 0; i < props.count; ++i) {
          if (i < postsData.length) {
            // get data from the backup
            ({ id, infoCount, emoji } = postsData[i]);
          } else {
            // create new post
            id = i;

            infoCount =
              (Math.random() * (maxInfoCount - minInfoCount + 1) +
                minInfoCount) >>>
              0;

            emoji = `${String.fromCodePoint(
              (Math.random() * (emojiMax - emojiMin + 1) + emojiMin) >>> 0
            )}`;
            // save the new post data
            postsData.push({
              id: id,
              infoCount: infoCount,
              emoji: emoji,
            });
          }
          // add the post
          posts.push(
            <Post _id={id + 1} key={id}>
              <p className="info">{`${(emoji + " ").repeat(infoCount)}`}</p>
              <div className="count">{infoCount}</div>
            </Post>
          );
        }
        return posts;
      })()}
    </div>
  );
}

function Tag(props: { _id: number }): JSX.Element {
  const [isHidden, setIsHidden] = useState(false);
  const toggleState = () => {
    const tag = document.getElementById(`tag${props._id}`)!;
    const post = document.getElementById(`post${props._id}`)!;
    if (isHidden) {
      tag.classList.remove("hidden");
      post.classList.remove("hidden");
      setIsHidden(false);
      return;
    }
    tag.classList.add("hidden");
    post.classList.add("hidden");
    setIsHidden(true);
  };
  return (
    <button id={`tag${props._id}`} onClick={toggleState} className="tag">
      Tag
    </button>
  );
}

function AddNewBtn(props: {
  count: number;
  setPostCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  const addNewTagAndPost = () => {
    props.setPostCount(props.count + 1);
    console.log("postsData:", postsData.length + 1);
  };

  return (
    <button className="btn add" id="addNewBtn" onClick={addNewTagAndPost}>
      +
    </button>
  );
}

function RemoveBtn(props: {
  count: number;
  setPostCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  const removeTagAndPost = () => {
    const n = props.count;
    if (!n) return;
    postsData.pop();
    props.setPostCount(props.count - 1);
    console.log("postsData:", postsData.length);
  };

  return (
    <button className="btn remove" id="removeBtn" onClick={removeTagAndPost}>
      -
    </button>
  );
}

function Controls(props: {
  count: number;
  setPostCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  let i: number = 0;
  return (
    <div className="controls">
      <AddNewBtn
        count={props.count}
        setPostCount={props.setPostCount}
        key={++i}
      />
      <RemoveBtn
        count={props.count}
        setPostCount={props.setPostCount}
        key={++i}
      />
    </div>
  );
}

function Tags(props: {
  count: number;
  setPostCount: React.Dispatch<React.SetStateAction<number>>;
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
            setPostCount={props.setPostCount}
            key={++i}
          />
        );
        return tags;
      })()}
    </div>
  );
}

function Content(): JSX.Element {
  const [postCount, setPostCount] = useState(0);
  return (
    <div className="content">
      <Posts count={postCount} />
      <Tags count={postCount} setPostCount={setPostCount} />
    </div>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Content />
    </>
  );
}
