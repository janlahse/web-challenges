import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function AllProducts() {
  const { data, isLoading } = useSWR("/api/products", fetcher);

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <ul>
      {data.map((product) => (
        <li>
          <p>id: {product.id}</p>
          <p>name: {product.name}</p>
          <p>description: {product.description}</p>
          <p>price: {product.price}</p>
          <p>currency: {product.currency}</p>
          <p>category: {product.category}</p>
        </li>
      ))}
    </ul>
  );
}
