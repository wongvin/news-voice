import Link from "next/link";

export default function HomePage() {
  return (
    <div
      style={{
        padding: 40,
        maxWidth: 800,
        margin: "0 auto",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ marginBottom: 20 }}>Welcome</h1>

      <p style={{ marginBottom: 30, fontSize: 18 }}>
        Your personalized news dashboard for Health, Economy, and Retirement.
      </p>

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          marginTop: 20,
        }}
      >
        <Link
          href="/news"
          style={{
            padding: "12px 16px",
            background: "#0070f3",
            color: "white",
            borderRadius: 8,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Latest News
        </Link>

        <Link
          href="/news/health"
          style={{
            padding: "12px 16px",
            background: "#34a853",
            color: "white",
            borderRadius: 8,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Health News
        </Link>

        <Link
          href="/news/economy"
          style={{
            padding: "12px 16px",
            background: "#fbbc05",
            color: "black",
            borderRadius: 8,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Economy News
        </Link>

        <Link
          href="/news/retirement"
          style={{
            padding: "12px 16px",
            background: "#ea4335",
            color: "white",
            borderRadius: 8,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Retirement News
        </Link>
      </nav>
    </div>
  );
}
