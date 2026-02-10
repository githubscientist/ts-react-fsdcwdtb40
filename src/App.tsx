import { useState } from "react";

const App = () => {
  const [likes, setLikes] = useState<number>(0);
  const [dislikes, setDislikes] = useState<number>(0);

  return (
    <>
      <button onClick={() => setLikes(likes + 1)}>Like</button> &nbsp; { likes } &nbsp; likes &nbsp;
      <button onClick={() => setDislikes(dislikes + 1)}>Dislike</button> &nbsp; { dislikes } &nbsp; dislikes &nbsp;
    </>
  )
}

export default App;