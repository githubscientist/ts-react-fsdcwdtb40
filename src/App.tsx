import { useState } from "react";

const App = () => {
  const [likes, setLikes] = useState<number>(0);
  const [dislikes, setDislikes] = useState<number>(0);

  const [reactions, setReactions] = useState<string []>([]);

  const handleLike = () => {
    setLikes(likes + 1);
    setReactions([...reactions, 'L']);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
    setReactions([...reactions, 'D']);
  };

  console.log(reactions);

  return (
    <>
      <button onClick={handleLike}>Like</button> &nbsp; { likes } &nbsp; likes &nbsp;
      <button onClick={handleDislike}>Dislike</button> &nbsp; { dislikes } &nbsp; dislikes &nbsp;
    </>
  )
}

export default App;