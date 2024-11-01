/* eslint-disable @next/next/no-img-element */
import { ReactNode } from "react";
import { Transition } from "@headlessui/react";

interface AccordionProps {
  title: string;
  children: ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  isOpen,
  onToggle,
}) => {
  return (
    <div  className="border-b border-[#BDBDBD] p-5">
      <button
        onClick={onToggle}
        className={`transition-colors duration-300 ease-in-out}`}
      >
        <div className="text-[18px] text-[#12305B] font-semibold text-start">{title}</div>
      </button>
      <Transition
        show={isOpen}
        enter="transition-all duration-300 ease-out"
        enterFrom="opacity-0 max-h-0"
        enterTo="opacity-100 max-h-[500px]"
        leave="transition-all duration-300 ease-in"
        leaveFrom="opacity-100 max-h-[500px]"
        leaveTo="opacity-0 max-h-0"
      >
       <div className="mt-4 mb-2">{children}</div>
      </Transition>
    </div>
  );
};

export default Accordion;
