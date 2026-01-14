export default function Home() {
  return (
    <div style={{ background: "#0a0a0a", color: "white", minHeight: "100vh", padding: "40px", fontFamily: "Arial" }}>
      <h1 style={{ fontSize: "48px" }}>YR Studio 🎧</h1>
      <p style={{ maxWidth: "600px", color: "#aaa" }}>
        Produção musical profissional, mixagem e masterização para artistas que querem lançar músicas de alto nível.
      </p>

      <h2 style={{ marginTop: "60px" }}>Serviços</h2>
      <ul style={{ color: "#ccc" }}>
        <li>Produção Musical</li>
        <li>Mixagem & Masterização</li>
        <li>Consultoria Musical</li>
      </ul>

      <button style={{ marginTop: "40px", padding: "15px 30px", fontSize: "16px", cursor: "pointer" }}>
        Solicitar Orçamento
      </button>

      <p style={{ marginTop: "80px", color: "#555" }}>
        © {new Date().getFullYear()} YR Studio
      </p>
    </div>
  );
}
