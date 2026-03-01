import { useState } from "react";
import type { AccordionProps } from "../types/accordionTypes";
import { AccordionTriggerIcon } from "./AccordionTriggerIcon";

export const Accordion = ({ data }: AccordionProps) => {
  const [openIds, setOpenIds] = useState([1]);

  const handleAccordionTrigger = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => id !== item) : [...prev, id],
    );
  };

  return (
    <div className="accordion-container">
      {data.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id} className={`accordion-item ${isOpen && "open"}`}>
            <div
              className="accordion-trigger"
              onClick={() => {
                handleAccordionTrigger(item.id);
              }}
              aria-expanded={isOpen}
            >
              <h3>{item.title}</h3>
              <AccordionTriggerIcon />
            </div>
            <div className="accordion-content">
              <div className="accordion-content-wrapper">
                <p>{item.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
