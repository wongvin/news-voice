import TTSButton from "../TTSButton";

async function getRetirementNews() {
  const apiKey = process.env.GNEWS_API_KEY;

  // GNews has no "retirement" category, so we fetch general news
  const res = await fetch(
    `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&apikey=${apiKey}`,
    { cache: "no-store" }
  );

  const data = await res.json();

  // Filter for retirement-related keywords
  const filtered = data.articles?.filter((a: any) => {
    const text = `${a.title} ${a.description}`.toLowerCase();
    return (
      text.includes("retire") ||
      text.includes("pension") ||
      text.includes("401k") ||
      text.includes("social security") ||
      text.includes("senior") ||
      text.includes("aging")
    );
  });

  return filtered || [];
}

export default async function RetirementNewsPage() {
  const articles = await getRetirementNews();

  return (
    <div style={{ padding: 40, maxWidth: 800, margin: "0 auto" }}>
      <h1 style={{ marginBottom: 20 }}>Retirement News</h1>

      {articles.length > 0 ? (
        articles.map((article: any, index: number) => (
          <div
            key={index}
            style={{
              marginBottom: 40,
              paddingBottom: 20,
              borderBottom: "1px solid #ddd",
            }}
          >
            {article.image && (
              <img
                src={article.image}
                alt={article.title}
                style={{
                  width: "100%",
                  borderRadius: 8,
                  marginBottom: 12,
                }}
              />
            )}

            <h2 style={{ marginBottom: 8 }}>{article.title}</h2>
            <p style={{ marginBottom: 12 }}>{article.description}</p>

            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0070f3", fontWeight: "bold" }}
            >
              Read more →
            </a>

            <TTSButton text={`${article.title}. ${article.description}`} />
          </div>
        ))
      ) : (
        <p>No retirement-related articles found.</p>
      )}
    </div>
  );
}

