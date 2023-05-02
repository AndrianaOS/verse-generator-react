import { useState, useEffect } from "react";

function Grace() {
  const [showVerses, setShowVerses] = useState("");
  const [loading, setLoading] = useState(true);

  const getRandomVerse = () => {
    fetch("http://localhost:3005/grace/random")
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
          <h3>Grace</h3>
          <p>{showVerses.verse}</p>
          <span>{showVerses.scripture}</span>
        </aside>
      )}

      <aside>
        <button onClick={() => getRandomVerse()} className="generate">
          Regenerate Verse
        </button>
      </aside>
    </div>
  );
}

export default Grace;
