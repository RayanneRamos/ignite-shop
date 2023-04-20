import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/product"
import { useRouter } from "next/router"

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>
      <ProductDetails>
        <h1>Camiseta 1</h1>
        <span>R$ 79,99</span>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat corporis saepe corrupti impedit veritatis error. Rerum, vitae natus ratione commodi ea ipsam incidunt fuga quas, nam earum temporibus corrupti animi!</p>
        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  );
}