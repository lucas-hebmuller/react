import { useForm } from "react-hook-form";
import { PostContext } from "../contexts/PostContext";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";

function EditPost() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { id } = useParams();

  const { findPostById, updatePost } = useContext(PostContext);

  const post = findPostById(Number(id));

  const navigate = useNavigate();

  useEffect(() => {
    if (post) {
      reset({ title: post.title, content: post.content });
    }
  }, [post]);

  function onSubmit(data) {
    updatePost({ ...data, id: Number(id) });
    navigate("/");
  }

  if (!post) return <p>Post Not Found</p>;

  return (
    <div>
      <h3>Edit a Post</h3>
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

        <button type="submit">Update Post</button>
      </form>
    </div>
  );
}

export default EditPost;
