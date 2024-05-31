import './App.css'
import { Header } from './Header';
import { Footer } from './Footer';
import { Content } from './Content';
import { PostsIndex } from './PostsIndex';
import { PostsNew } from './PostsNew';


function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
      <PostsIndex posts={posts} />
    </div>
  );
}

export default App;

function PostsShow(props) {
  return (
      <div>
        export function PostsShow(props) {
        </div>
        <button type="submit">update post</button>
      </form>
      <br />
      <br />
      <br />
      <button onClick={deletePost}>delete post</button>
      </div>
    )
}