import { useNavigate } from "react-router-dom";

function Post(props) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/edit-post/${props.post.id}`)}>
      <h4>{props.post.title}</h4>
      <p>{props.post.content}</p>
    </div>
  );
}

export default Post;
