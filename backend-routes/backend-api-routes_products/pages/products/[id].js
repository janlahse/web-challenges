import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function SingleProduct() {
  const router = useRouter();
  const id = router.query.id;
  const { data, isLoading } = useSWR(`/api/products/${id}`, fetcher);

  if (isLoading || !data) return <h2>Loading...</h2>;

  return (
    <ul>
      <li>
        <p>id: {data.id}</p>
        <p>name: {data.name}</p>
        <p>description: {data.description}</p>
        <p>price: {data.price}</p>
        <p>currency: {data.currency}</p>
        <p>category: {data.category}</p>
      </li>
    </ul>
  );
}
