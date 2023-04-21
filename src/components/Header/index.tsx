import Image from "next/image";
import logoImage from '../../assets/logo.svg'
import { HeaderContainer } from "./styles";
import Link from "next/link";
import { Cart } from "../Cart";

export function Header() {
  return (
    <HeaderContainer>
      <Link href='/'>
        <Image src={logoImage} alt='Logo' />
      </Link>
      <Cart />
    </HeaderContainer>
  );
}