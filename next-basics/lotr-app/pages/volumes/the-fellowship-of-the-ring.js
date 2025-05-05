import Link from "next/link";
import { volumes } from "@/lib/data";
import Image from "next/image";

export default function Volume1() {
  const volume = volumes.find(
    (volume) => volume.slug === "the-fellowship-of-the-ring"
  );
  return (
    <div>
      <h1>{volume.title}</h1>
      <Link href="/volumes">← All Volumes</Link>
      <p>{volume.description}</p>
      <ul>
        <li>
          {volume.books[0].ordinal}: {volume.books[0].title}
        </li>
        <li>
          {volume.books[1].ordinal}: {volume.books[1].title}
        </li>
      </ul>
      <Image alt="cover" src={volume.cover} width={140} height={230}></Image>
    </div>
  );
}
