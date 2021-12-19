import Post from "./Post";

const Posts_data = [
  {
    id: 1,
    username: "johndoe",
    userimg: "https://randomuser.me/api/portraits/men/27.jpg",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiauARdZjm7y2Tc-IHWaEJ5SwADA5TSYCcVw&usqp=CAU",
    caption: "Investing in crypto web3 is the future",
  },
  {
    id: 2,
    username: "adipadi",
    userimg: "https://randomuser.me/api/portraits/men/27.jpg",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiauARdZjm7y2Tc-IHWaEJ5SwADA5TSYCcVw&usqp=CAU",
    caption: "ciggaretes after sex",
  },
];

const Posts = () => {
  return (
    <div>
      {Posts_data.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userimg={post.userimg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
