import { PostsNew } from './PostsNew';
import { PostsIndex } from './PostsIndex';
import { Modal } from "./Modal";

export function Content() {
  let name = "Test";
  return (
    <main>
      <PostsNew />
      <PostsIndex name={name} />
    </main>
  );
}

  <Modal show={true}>
        <p>TEST</p>
      </Modal>


