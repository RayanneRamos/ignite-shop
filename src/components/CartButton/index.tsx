import { CartButtonContainer } from "./styles";
import { Handbag } from 'phosphor-react';

export function CartButton() {
  return (
    <CartButtonContainer>
      <Handbag size={24} weight="bold" />
    </CartButtonContainer>
  );
}