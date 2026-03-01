import { useState } from "react";
import type { AccordionProps } from "../types/accordionTypes";
import { AccordionTriggerIcon } from "./AccordionTriggerIcon";

export const AccordionComponent = ({
  data,
  multipleOpen = true,
}: AccordionProps) => {
  const [openId, setOpenId] = useState<number | null>(1);
  const [openIds, setOpenIds] = useState([1]);

  const handleAccordionTrigger = (id: number) => {
    if (multipleOpen) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => id !== item) : [...prev, id],
      );
    } else {
      setOpenId((prev) => (prev === id ? null : id));
    }
  };

  return (
    <div className="accordion-container">
      {data.map((item) => {
        const isOpen = multipleOpen
          ? openIds.includes(item.id)
          : openId === item.id;
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
