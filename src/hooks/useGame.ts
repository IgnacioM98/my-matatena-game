import { useEffect, useState } from "react";
import { diceRoller, sleep } from "../utils/utils";

export interface Props {}

export const useGame = ({}: Props) => {
  const [selected, setSelected] = useState<number>();
  const onChangeSelectable = (n: number) => {
    setSelected(n);
  };

  const onSelectColumn = () => {
    setSelected(undefined);
  };

  return { onChangeSelectable, selected, onSelectColumn };
};
