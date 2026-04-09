import { useEffect, useState } from "react";

function App() {
  const [reference, setReference] = useState("John 3:16");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchVerse = async (ref) => {
    const query = ref.trim();
    if (!query) return;

    try {
      setLoading(true);
      setError(null);

      const res = await fetch(`https://bible-api.com/${encodeURIComponent(query)}`);

      if (!res.ok) {
        throw new Error("Could not fetch verse. Check the reference and try again.");
      }

      const data = await res.json();
      setResult(data);
    } catch (err) {
      setResult(null);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Load a default verse on first render
    fetchVerse(reference);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchVerse(reference);
  };

  return (
    <div style={{ padding: "24px", maxWidth: "800px", margin: "0 auto", fontFamily: "'Segoe UI', sans-serif" }}>
      <h1 style={{ marginBottom: "12px" }}>Bible Verse Lookup</h1>
      <p style={{ color: "#555", marginBottom: "16px" }}>
        Powered by <code>bible-api.com</code>. Enter a passage like "John 3:16" or "Psalm 23" to fetch it.
      </p>

      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
        <input
          type="text"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
          placeholder="e.g., Romans 8:28"
          style={{ flex: 1, padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <button type="submit" style={{ padding: "10px 16px", borderRadius: "6px", border: "none", background: "#0f766e", color: "white", cursor: "pointer" }}>
          Fetch Verse
        </button>
      </form>

      {loading && <p>Loading verse...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {result && (
        <div style={{ border: "1px solid #e5e7eb", borderRadius: "10px", padding: "16px", background: "#f9fafb" }}>
          <div style={{ marginBottom: "12px" }}>
            <strong>{result.reference}</strong>
            {result.translation_name ? <span style={{ color: "#555" }}> · {result.translation_name}</span> : null}
          </div>

          <div style={{ display: "grid", gap: "8px" }}>
            {result.verses?.map((v) => (
              <div key={`${v.book_id}-${v.chapter}-${v.verse}`} style={{ lineHeight: 1.6 }}>
                <span style={{ fontWeight: 600, marginRight: "6px" }}>
                  {v.book_name} {v.chapter}:{v.verse}
                </span>
                <span>{v.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ marginTop: "18px", color: "#666" }}>
        <div style={{ fontWeight: 600, marginBottom: "6px" }}>Try these examples:</div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {["Psalm 23", "Genesis 1:1", "1 Corinthians 13", "John 1:1-5"].map((ex) => (
            <button
              key={ex}
              type="button"
              onClick={() => {
                setReference(ex);
                fetchVerse(ex);
              }}
              style={{
                padding: "8px 12px",
                borderRadius: "999px",
                border: "1px solid #cbd5e1",
                background: "white",
                cursor: "pointer",
              }}
            >
              {ex}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
