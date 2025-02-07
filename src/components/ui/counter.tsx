import { MotionValue, motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const persentsSize = '22px'
const fontSize = 30;
const padding = 15;
const height = fontSize + padding;

function Counter({ value, color }: { value: number, color: string }) {
  return (
    <div
      style={{ fontSize, color: `${color}` }}
      className="flex space-x-[0px] w-[100px] justify-center overflow-hidden rounded  px-2 leading-none "
    >
      {value === 100 ? (
        <Digit place={100} value={value} />
      ) : (
        <span className={`text-[${persentsSize}]`}>&nbsp;&nbsp;</span>
      )}
      <Digit place={10} value={value} />
      <Digit place={1} value={value} />
      <span className={`text-[${persentsSize}] flex items-center justify-center`} style={{ color: `${color}` }}>%</span>
    </div>
  );
}

function Digit({ place, value }: { place: number; value: number }) {
  const valueRoundedToPlace = Math.floor(value / place);
  const animatedValue = useSpring(valueRoundedToPlace);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div style={{ height }} className="relative w-[1ch] tabular-nums">
      {[...Array(10).keys()].map((i) => (
        <Number key={i} mv={animatedValue} number={i} />
      ))}
    </div>
  );
}

function Number({ mv, number }: { mv: MotionValue; number: number }) {
  const y = useTransform(mv, (latest) => {
    const placeValue = latest % 10;
    const offset = (10 + number - placeValue) % 10;

    let memo = offset * height;

    if (offset > 5) {
      memo -= 10 * height;
    }

    return memo;
  });

  return (
    <motion.span
      style={{ y }}
      className={`text-[${persentsSize}] absolute inset-0 flex items-center justify-center`}
    >
      {number}
    </motion.span>
  );
}

export default Counter