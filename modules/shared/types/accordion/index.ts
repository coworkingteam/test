import { Document } from '@contentful/rich-text-types';

export interface IAccordionItem {
  id: string;
  title: string;
  open?: boolean;
  content: string;
}

export interface IContentfulAccordionItem {
  id?: string;
  title?: string;
  open?: boolean;
  content?: Document;
}
