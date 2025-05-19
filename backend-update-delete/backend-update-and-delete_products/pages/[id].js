import useSWR from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
import StyledLink from "@/components/Link";
import { useState } from "react";
import ProductForm from "@/components/ProductForm";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const [isEditMode, setIsEditMode] = useState(false);

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);

  async function handleEditProduct(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (response.ok) mutate();
  }

  async function handleDeleteProduct() {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    if (response.ok) router.push("/");
    else console.log("error: " + response.status);
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <StyledHeading>{data.name}</StyledHeading>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <StyledLink href="/">Back to all</StyledLink>
      <Button
        type="button"
        onClick={() => {
          setIsEditMode(!isEditMode);
        }}
      >
        Edit
      </Button>
      <Button type="button" onClick={() => handleDeleteProduct(id)}>
        Delete
      </Button>
      {isEditMode && <ProductForm onSubmit={handleEditProduct} isEditMode />}
    </ProductCard>
  );
}

const ProductCard = styled.article`
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
`;

const StyledHeading = styled.h2`
  color: var(--color-nemo);
`;

const Button = styled.button`
  text-decoration: none;
  display: inline-block;
  color: inherit;
  background: white;
  font-size: 1.2rem;
  padding: 0.5rem 1.2rem;
  border: 2px solid var(--color-nemo);
  border-radius: 3px;
  margin-left: 8px;

  &:hover {
    cursor: pointer;
  }
`;
