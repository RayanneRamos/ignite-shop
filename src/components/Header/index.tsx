import Image from "next/image";
import logoImage from "../../assets/logo.svg"
import { HeaderContainer } from "./styles";
import Link from "next/link";
import { Cart } from "../Cart";
import { useRouter } from "next/router";

export function Header() {
  const { pathname } = useRouter();

  const showCartButton = pathname !== "/success";
  
  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImage} alt="Logo" />
      </Link>
      { showCartButton && <Cart /> }
    </HeaderContainer>
  );
}