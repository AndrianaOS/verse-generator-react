import { useState, useEffect } from "react";

function Deliverance() {
  const [showVerses, setShowVerses] = useState("");
  const [loading, setLoading] = useState(true);

  const getRandomVerse = () => {
    fetch("http://localhost:3005/deliverance")
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
      {loading
        ? "Please wait while we load verses"
        : showVerses.map((message, index) => (
            <aside className="verses" key={index}>
              <h3>Deliverance</h3>
              <p>{message.verse}</p>
              <span>{message.scripture}</span>
            </aside>
          ))}
    </div>
  );
}

export default Deliverance;
