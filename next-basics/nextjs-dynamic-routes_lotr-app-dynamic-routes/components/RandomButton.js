import { useRouter } from "next/router";
import { volumes } from "@/lib/data";

export function RandomButton({}) {
  const router = useRouter();
  function handleRandom() {
    const randomIndex = Math.floor(Math.random() * volumes.length);
    router.push(`/volumes/${volumes[randomIndex].slug}`);
  }
  return <button onClick={handleRandom}>Random Volume</button>;
}
