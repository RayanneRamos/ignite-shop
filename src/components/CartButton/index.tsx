import { ComponentProps } from "react";
import { CartButtonContainer } from "./styles";
import { Handbag } from 'phosphor-react';

type CartButtonProps = ComponentProps<typeof CartButtonContainer>;

export function CartButton({ ...rest }: CartButtonProps) {
  return (
    <CartButtonContainer {...rest}>
      <Handbag size={24} weight="bold" />
    </CartButtonContainer>
  );
}