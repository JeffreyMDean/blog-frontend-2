import { PostsNew } from './PostsNew';
import { PostsIndex } from './PostsIndex';
import { Modal } from "./Modal";

export function Content() {
  let name = "Test";
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const handleShowPost = () => {
    setIsPostsShowVisible(true);
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  const handleCreatePost = (theParams) => {
    console.log('creating pst...')
    axios.post("http://localhost:3000/recipes.json", theParams).then(response => {
      console.log(response.data)
      setIsPostsShowVisible([...PostsIndex, response.data])
    })
  }
  return (
    <main>
      <PostsNew onCreatePost={handleCreatePost} />
      <PostsIndex name={name} onShowPost={handleShowPost} />
      <Modal show={isPostsShowVisible}>
        <p>TEST</p>
      </Modal>
    </main>
  );
}



