import { useState } from "react";

type Data = {
  likes: number,
  dislikes: number,
  reactions: string[]
};

const App = () => {
  const [data, setData] = useState<Data>({
    likes: 0,
    dislikes: 0,
    reactions: []
  });

  const handleLike = () => {
    setData({
      ...data,
      likes: data.likes + 1,
      reactions: [
        ...data.reactions,
        'L'
      ]
    })
  };

  const handleDislike = () => {
    setData({
      ...data,
      dislikes: data.dislikes + 1,
      reactions: [
        ...data.reactions,
        'D'
      ]
    })
  };

  console.log(data);

  return (
    <>
      <button onClick={handleLike}>Like</button> &nbsp; { data.likes } &nbsp; likes &nbsp;
      <button onClick={handleDislike}>Dislike</button> &nbsp; { data.dislikes } &nbsp; dislikes &nbsp;
    </>
  )
}

export default App;