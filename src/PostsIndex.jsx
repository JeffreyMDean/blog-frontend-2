let posts = [
  {
    id: 1,
    title: "Special Offer",
    body: "Limited time deal on a brand new Tacoma!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROYBTqj3ryqYsd6n2PZltPGXLfT9qm5_TioQ&usqp=CAU",
  },
  {
    id: 2,
    title: "Another Special Offer",
    body: "Used Tacoma with low mileage!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg2wcWmqI5JCSpIAEc8FYUAJVkdY7LWcMNNw&usqp=CAU",
  },
  {
    id: 3,
    title: "Great Deal!",
    body: "Used Tacoma",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLG8m1AWVpG1XbfEZAdbD0xQwIiMJNwFzDdg&usqp=CAU",
  },
];

export function PostsIndex(props) {   // use a map function with the props.posts to create the posts dynamically
  console.log("The props are", props);
  return (
    <div id="posts-index">
      <h2>Special offers</h2>
      <p>The name is {props.name}</p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoB6ERxV8fbue4nf7BzOBeNUQBSkO5tF7G2A&usqp=CAU"></img>
      <p>$17,000</p>
      <h2>Another great offer!</h2>
      <p>Used Tacoma with low mileage!</p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwchnPBTXkk1QDSh3Fg6ZIFYD_4DQSLTdVkQ&usqp=CAU"></img>
      <p>$9,000</p>
      <button onClick={() => props.onShowPost(currentPost)}>More info</button>
    </div>
  );
}
