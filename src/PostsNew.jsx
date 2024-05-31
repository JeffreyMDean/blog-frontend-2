import axios from "axios";

export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('handling submit...')
    const deletePost = () => {
      console.log('deleting post...')
      axios.delete(`http://localhost:3000/posts/${props.post.id}.json`).then(response => {
        console.log(response.data);
      })
    }
  }
  return (
    <div id="posts-new">
      <h1>Toyota Tacoma</h1>
      <p>This is our collection of Toyota Tacomas. View our photo gallery and click on the links for more information regarding the specifications for our trucks</p>
      <img src="https://platform.cstatic-images.com/in/v2/stock_photos/6ac828d4-4d9b-4af0-8dec-e4bc3f1b8e51/e13aef87-a7e6-456b-b623-a553e918efc6.png"></img>
      <form onSubmit={handleSubmit}></form>
  );
  <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title"></label>
          <input type="text" name="trucks" />
        </div>
        <div>
          name: <input type="text" name="name" />
        </div>
        <div>
          description: <input type="text" name="directions" />
        </div>
        <div>
          image url: <input type="text" name="image_url" />
        </div>
        <div>
          price: <input type="text" name="price" />
        </div>
        <button type="submit">Create truck</button>
      
