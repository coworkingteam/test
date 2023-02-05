import { Document } from '@contentful/rich-text-types';

export interface IAccordionItem {
  id: string;
  title: string;
  open?: boolean;
  content: string;
}

export interface IMenuAccordionItem {
  id: string;
  title: string;
  open?: boolean;
  content: { l: string; h: string }[];
}

export interface IContentfulAccordionItem {
  id?: string;
  title?: string;
  open?: boolean;
  content?: Document;
}
