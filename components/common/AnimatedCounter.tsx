"use client";

import CountUp from "react-countup";

const AnimatedCounter = ({
  totalBalance,
  prefix = "EUR",
  decimal = ",",
}: AnimatedCounterProps) => {
  return (
    <div className="w-full">
      <CountUp
        end={totalBalance}
        prefix={prefix}
        decimal={decimal}
        decimals={2}
      />
    </div>
  );
};

export default AnimatedCounter;
