import { useEffect, useState } from "react";
import { diceRoller, sleep } from "../utils/utils";

export interface Props {
  onChangeSelectable: (n: number) => void;
}

export const useDiceRoll = ({ onChangeSelectable }: Props) => {
  const [dice, setDice] = useState(diceRoller());
  const [src, setSrc] = useState();
  const [isLoading, setLoading] = useState(false);

  const onRollDice = () => {
    const newValue = diceRoller();
    setDice(newValue);
  };

  const onRollDiceMultiple = async () => {
    let i = 0;
    setLoading(true);
    do {
      i++;
      await sleep(100);
      const newValue = diceRoller();
      setDice(newValue);
    } while (i < 5);
    setLoading(false);
  };

  useEffect(() => {
    if (dice) {
      let source;
      switch (dice) {
        case 1:
          source = require("../../assets/dice1.png");
          break;
        case 2:
          source = require("../../assets/dice2.png");
          break;
        case 3:
          source = require("../../assets/dice3.png");
          break;
        case 4:
          source = require("../../assets/dice4.png");
          break;
        case 5:
          source = require("../../assets/dice5.png");
          break;
        case 6:
          source = require("../../assets/dice6.png");
          break;
      }
      onChangeSelectable(dice);
      setSrc(source);
    }
  }, [dice]);

  return { dice, src, onRollDice, onRollDiceMultiple, isLoading };
};
