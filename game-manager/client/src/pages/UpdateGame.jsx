import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

function UpdateGame() {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <div className="page-container">
      <h2>Update Game (ID: {id})</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-container bg-card"
        style={{ padding: "1rem" }}
      >
        <label htmlFor="name">Game Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="E.g. Super Mario..."
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

        <label htmlFor="platform">Platform: </label>
        <input
          type="text"
          id="platform"
          name="platform"
          placeholder="E.g. Switch, PC..."
          {...register("platform", { required: "Platform is required" })}
        />
        {errors.platform && (
          <p style={{ color: "red" }}>{errors.platform.message}</p>
        )}

        <label htmlFor="genre">Genre: </label>
        <input
          type="text"
          id="genre"
          name="genre"
          placeholder="E.g. RPG, Action, Puzzle..."
          {...register("genre", { required: "Genre is required" })}
        />
        {errors.genre && <p style={{ color: "red" }}>{errors.genre.message}</p>}

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default UpdateGame;
