import { useState, useEffect } from "react";

function Transformation() {
  const [showVerses, setShowVerses] = useState("");
  const [loading, setLoading] = useState(true);

  const getRandomVerse = () => {
    fetch("http://localhost:3005/transformation")
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
              <h3>Transformation</h3>
              <p>{message.verse}</p>
              <span>{message.scripture}</span>
            </aside>
          ))}
    </div>
  );
}

export default Transformation;
