import Image from "next/image";
import logoImage from '../../assets/logo.svg'
import { HeaderContainer } from "./styles";
import Link from "next/link";

export default function Header() {
  return (
    <HeaderContainer>
      <Link href='/'>
        <Image src={logoImage} alt='Logo' />
      </Link>
    </HeaderContainer>
  )
}