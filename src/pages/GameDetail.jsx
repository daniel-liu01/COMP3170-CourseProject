import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { fetchGameDetails } from "../../api/rawg.js";
import "./GameDetail.css";

export default function GameDetail() {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function loadDetails() {
      setIsLoading(true);
      setError(null);

      const details = await fetchGameDetails(gameId);

      if (!isMounted) return;

      if (!details) {
        setError("Unable to load this game right now.");
      } else {
        setGame(details);
      }

      setIsLoading(false);
    }

    loadDetails();

    return () => {
      isMounted = false;
    };
  }, [gameId]);

  const backgroundImage = useMemo(() => {
    if (!game) return null;
    return game.background_image_additional || game.background_image;
  }, [game]);

  const description = useMemo(() => {
    if (!game) return "";
    return game.description_raw || "No description available for this title.";
  }, [game]);

  const detailMeta = game
    ? [
        {
          label: "Released",
          value: game.released || "TBD",
        },
        {
          label: "Rating",
          value:
            typeof game.rating === "number"
              ? `${game.rating.toFixed(1)} / 5`
              : "Not rated",
        },
        {
          label: "Genres",
          value: game.genres?.map((genre) => genre.name).join(", ") || "—",
        },
        {
          label: "Platforms",
          value:
            game.parent_platforms
              ?.map((platform) => platform.platform.name)
              .join(", ") || "—",
        },
        {
          label: "Developers",
          value: game.developers?.map((dev) => dev.name).join(", ") || "—",
        },
      ]
    : [];

  return (
    <div className="game-detail-page">
      <Navbar />

      <main className="game-detail-main">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back
        </button>

        {isLoading && (
          <section className="game-detail-panel loading">
            <p>Loading game details...</p>
          </section>
        )}

        {error && !isLoading && (
          <section className="game-detail-panel error">
            <p>{error}</p>
            <button onClick={() => navigate("/")}>Go Home</button>
          </section>
        )}

        {!isLoading && !error && game && (
          <>
            <section className="game-detail-hero">
              {backgroundImage ? (
                <img
                  src={backgroundImage}
                  alt={game.name}
                  className="hero-image"
                />
              ) : (
                <div className="hero-placeholder">No image available</div>
              )}
            </section>

            <section className="game-detail-summary">
              <p className="game-tagline">Featured</p>
              <h1>{game.name}</h1>
              <p className="game-description">{description}</p>
              <div className="hero-actions">
                {game.website && (
                  <a
                    href={game.website}
                    target="_blank"
                    rel="noreferrer"
                    className="primary-link"
                  >
                    Official Site
                  </a>
                )}
                <button className="save-button" type="button">
                  Save Game
                </button>
              </div>
            </section>

            <section className="game-detail-panel">
              <div className="meta-grid">
                {detailMeta.map((meta) => (
                  <div key={meta.label} className="meta-item">
                    <p className="meta-label">{meta.label}</p>
                    <p className="meta-value">{meta.value}</p>
                  </div>
                ))}
              </div>

              {game.stores?.length > 0 && (
                <div className="stores-wrapper">
                  <p className="meta-label">Available on</p>
                  <div className="store-links">
                    {game.stores.map((store) => (
                      <span key={store.id} className="store-link">
                        {store.store?.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </section>
          </>
        )}
      </main>
    </div>
  );
}

