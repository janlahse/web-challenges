import Link from "../components/Link";

export default function HomePage({ lightCount }) {
  return (
    <div>
      <h1>Home</h1>
      {lightCount === 1 ? (
        <p>1 light is on.</p>
      ) : (
        <p>{lightCount} lights are on.</p>
      )}

      <p>
        <Link href="/rooms">All Rooms →</Link>
      </p>
      <p>
        <Link href="/actions">Quick Actions →</Link>
      </p>
    </div>
  );
}
