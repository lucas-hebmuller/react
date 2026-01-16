import { useQuery } from "@tanstack/react-query";

async function fetchGames() {
  const response = await fetch("http://localhost:3000/api/games");
  return response.json();
}

function Home() {
  const {} = useQuery({ queryKey: ["games"], queryFn: fetchGames });

  return (
    <div className="page-container">
      <h1>Make Games</h1>
      <div className="bg-card" style={{ marginTop: "1rem", padding: "1rem" }}>
        <GameList />
      </div>
    </div>
  );
}

export default Home;
