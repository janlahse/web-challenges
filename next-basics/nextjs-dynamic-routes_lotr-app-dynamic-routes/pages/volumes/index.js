import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import { RandomButton } from "@/components/RandomButton";

export default function Volumes() {
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <RandomButton />
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
