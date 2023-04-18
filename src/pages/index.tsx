import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";
import shirtOne from '../assets/shirts/1.png';
import shirtTwo from '../assets/shirts/2.png';
import shirtThree from '../assets/shirts/3.png';

export default function Home() {
  return (
   <HomeContainer>
    <Product>
      <Image src={shirtOne} width={520} height={480} alt='' />
      <footer>
        <strong>Camiseta X</strong>
        <span>R$ 79,99</span>
      </footer>
    </Product>
    <Product>
      <Image src={shirtTwo} width={520} height={480} alt='' />
      <footer>
        <strong>Camiseta X</strong>
        <span>R$ 79,99</span>
      </footer>
    </Product>
    <Product>
      <Image src={shirtThree} width={520} height={480} alt='' />
      <footer>
        <strong>Camiseta X</strong>
        <span>R$ 79,99</span>
      </footer>
    </Product>
   </HomeContainer>
  );
}
