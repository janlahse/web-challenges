import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, isLoading } = useSWR("/api/random-character", fetcher);

  if (!data || isLoading) return <h2>Loading...</h2>;

  return (
    <h2>
      Hi! I&apos;m {data.name}, {data.age} years old and working as a{" "}
      {data.profession}.{" "}
    </h2>
  );
}
