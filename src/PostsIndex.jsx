export function PostsIndex(props) {
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
    </div>
  );
}
