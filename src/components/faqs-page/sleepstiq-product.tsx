import React, { useState } from "react"
import Accordion from "../accordion"
import { faqList } from "../data"

const SleepstiqProduct = () => {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    const toggleAccordion = (index: number) => {
        setOpenIndexes((prevIndexes) =>
            prevIndexes.includes(index)
                ? prevIndexes.filter((i) => i !== index) // Remove index if already open
                : [...prevIndexes, index] // Add index if it's closed
        );
    };

    return (
        <div>
            <div className="border-b border-[#BDBDBD]"></div>
            {faqList.map((faq, index) => (
                <div key={index}>
                <Accordion
                    isOpen={openIndexes.includes(index)}
                    onToggle={() => toggleAccordion(index)}
                    title={faq.question}>
                    <>{faq.answer}</>
                </Accordion>
                </div>
            ))}
        </div>
    )
}

export default SleepstiqProduct