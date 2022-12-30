import { AxiosInstance } from 'axios';
import { getQueryString } from '@md-utils/rest';

interface AddContactParams {
  name: string;
  phone: string;
  email: string;
}

interface AddDealParams {
  title: string;
  contactID: string;
}

interface GetContactsParams {
  filter?: { PHONE?: string; EMAIL?: string };
  select?: string[];
}

export const bx24Controllers = (api: AxiosInstance) => ({
  addContact: (data: AddContactParams) =>
    api.post('/crm.contact.add.json', {
      FIELDS: {
        NAME: data.name,
        SOURCE_ID: 13,
        PHONE: [{ VALUE: data.phone }],
        EMAIL: [{ VALUE: data.email }]
      }
    }),
  getContactList: (data: GetContactsParams) => api.get(`/crm.contact.list.json?${getQueryString(data)}`),
  addDeal: (data: AddDealParams) =>
    api.post('crm.deal.add.json', {
      FIELDS: {
        TITLE: data.title,
        CATEGORY_ID: 8,
        SOURCE_ID: 13,
        CONTACT_ID: data.contactID
      }
    })
});
