import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/create-post">Create Post</Link>
        <Link to="/edit-post">Edit Post</Link>
    </div>
  );
}

export default Navbar;
