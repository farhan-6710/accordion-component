interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

export interface AccordionProps {
  data: AccordionItem[];
  multipleOpen?: boolean;
}
