import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import { RandomButton } from "@/components/RandomButton";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();
  function handleRandom() {
    const randomIndex = Math.floor(Math.random() * volumes.length);
    router.push(`/volumes/${volumes[randomIndex].slug}`);
  }

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <RandomButton onClick={handleRandom}></RandomButton>
      <ul>
        {volumes.map(({ slug, title }) => (
          <li key={slug}>
            <Link href={`/volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
