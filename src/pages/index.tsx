import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";
import shirtOne from '../assets/shirts/1.png';
import shirtTwo from '../assets/shirts/2.png';
import shirtThree from '../assets/shirts/3.png';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export default function Home() {
  const [ sliderRef ] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
   <HomeContainer ref={sliderRef} className="keen-slider">
    <Product className="keen-slider__slide">
      <Image src={shirtOne} width={520} height={480} alt='' />
      <footer>
        <strong>Camiseta X</strong>
        <span>R$ 79,99</span>
      </footer>
    </Product>
    <Product className="keen-slider__slide">
      <Image src={shirtTwo} width={520} height={480} alt='' />
      <footer>
        <strong>Camiseta X</strong>
        <span>R$ 79,99</span>
      </footer>
    </Product>
    <Product className="keen-slider__slide">
      <Image src={shirtThree} width={520} height={480} alt='' />
      <footer>
        <strong>Camiseta X</strong>
        <span>R$ 79,99</span>
      </footer>
    </Product>
    <Product className="keen-slider__slide">
      <Image src={shirtThree} width={520} height={480} alt='' />
      <footer>
        <strong>Camiseta X</strong>
        <span>R$ 79,99</span>
      </footer>
    </Product>
   </HomeContainer>
  );
}
