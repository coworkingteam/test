export interface IAccordionItem {
  id: string;
  title: string | JSX.Element;
  open?: boolean;
  content: string | JSX.Element;
}
