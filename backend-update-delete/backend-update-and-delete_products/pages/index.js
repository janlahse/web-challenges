import styled from "styled-components";
import useSWR from "swr";
import ProductList from "@/components/ProductList";
import ProductForm from "@/components/ProductForm";

export default function HomePage() {
  const { mutate } = useSWR("/api/products");

  async function handleAddProduct(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      console.error(response.status);
      return;
    }

    mutate();
    event.target.reset();
  }

  return (
    <>
      <Heading>
        <StyledSpan role="img" aria-label="A fish">
          🐠
        </StyledSpan>
        Fish Shop
      </Heading>
      <ProductForm onSubmit={handleAddProduct} />
      <ProductList />
    </>
  );
}

const Heading = styled.h1`
  text-align: center;
  color: var(--color-nemo);
  padding-bottom: 20px;
  border-bottom: 1.5px solid var(--color-grey);
  margin-bottom: 0;
  font-family: georgia;
  font-size: 2.5rem;
`;

const StyledSpan = styled.span`
  margin-right: 8px;
`;
