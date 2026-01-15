import { useForm } from "react-hook-form";
import { PostContext } from "../contexts/PostContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const { addPost } = useContext(PostContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  function onSubmit(data) {
    addPost(data);
    navigate("/");
  }

  return (
    <div>
      <h3>Create a New Post</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Post title..."
            {...register("title", {
              required: "Title is required",
              minLength: {
                value: 3,
                message: "Title must be at least 3 characters",
              },
            })}
          />
          {errors.title && <p>{errors.title.message}</p>}
        </div>

        <div>
          <label htmlFor="content">Content: </label>
          <input
            type="text"
            id="content"
            name="content"
            placeholder="Post content..."
            {...register("content", {
              required: "Content is required",
              minLength: {
                value: 10,
                message: "Content must be at least 10 characters",
              },
            })}
          />
          {errors.content && <p>{errors.content.message}</p>}
        </div>

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
