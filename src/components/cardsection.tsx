"use client";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/utils/cn";
export function CardStackDemo() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between h-[30rem] w-full pt-0 lg:pt-0">
      <div className="lg:w-1/2 lg:mr-8 lg:pl-40 flex justify-center lg:justify-start ">
        <div className="text-center lg:text-left">
          <h2 className="text-2xl font-bold mb-4">Our Exceptional Team</h2>
          <h3 className="text-lg mb-8 hidden lg:block">Meet the talented individuals driving our success" implies an invitation or introduction to the noteworthy members of a team or organization who play a crucial role in achieving their objectives</h3>
        </div>
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <CardStack items={CARDS} />
      </div>
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Zues",
    designation: "Chairman and CEO of Morgana",
    content: (
      <p>
        Has over<Highlight>5 years</Highlight> of professional
        experience as a Data Scientist.
      </p>
    ),
  },
  {
    id: 1,
    name: "Hades",
    designation: "Chief Operations Officer of Morgana",
    content: (
      <p>
        <Highlight>15+ years</Highlight>
        of developing custom software and machine learning solutions experience.
      </p>
    ),
  },
  {
    id: 2,
    name: "Poseidon",
    designation: "Chief Technology Officer of Morgana",
    content: (
      <p>
        <Highlight>Poseidon </Highlight> with
        <Highlight> over 10 years </Highlight> experience in custom software development.
      </p>
    ),
  },
];

export default CardStackDemo;
