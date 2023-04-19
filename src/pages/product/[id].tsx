import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/product"
import { useRouter } from "next/router"

export function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>
      <ProductDetails>
        <h1>Camiseta 1</h1>
        <span>R$ 79,99</span>
        <p>Descrição</p>
        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  );
}