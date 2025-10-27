const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
const BASE_URL = "https://api.rawg.io/api";

export async function fetchGames(page = 1) {
  try {
    const response = await fetch(
      `${BASE_URL}/games?key=${API_KEY}&page=${page}`
    );
    if (!response.ok) throw new Error("Failed to fetch games");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchGameDetails(id) {
  try {
    const response = await fetch(`${BASE_URL}/games/${id}?key=${API_KEY}`);
    if (!response.ok) throw new Error("Failed to fetch game details");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
