import { useState, useEffect } from "react";

function Discipline() {
  const [showVerses, setShowVerses] = useState("");
  const [loading, setLoading] = useState(true);

  const getRandomVerse = () => {
    fetch("http://localhost:3005/discipline/random")
      .then((response) => response.json())
      .then((data) => {
        setShowVerses(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getRandomVerse();
  }, []);

  return (
    <div className="quote-area">
      {loading ? (
        "Please wait while we load verses"
      ) : (
        <aside className="verses">
          <p>{showVerses.verse}</p>
          <span>{showVerses.scripture}</span>
        </aside>
      )}

      <aside>
        <button onClick={() => getRandomVerse()} className="generate">
          Regenerate Quote
        </button>
      </aside>
    </div>
  );
}

export default Discipline;
