import { DASHBOARD, CATEGORY, MOBILE } from './routes';

type bread={
  [key:string]:Array<any>;
}

export const BREADCRUMB:bread = {
  'dashboard': [{ key: 'DASHBOARD', value: DASHBOARD.fullUrl }],
  'category': [
    { key: 'CATEGORY', value: '' },
  ],
  'mobile': [
    { key: 'CATEGORY', value: CATEGORY.fullUrl },
    { key: 'MOBILE', value: '' },
  ],
  'cart': [
    { key: 'CATEGORY', value: CATEGORY.fullUrl },
    { key: 'MOBILE', value: MOBILE.fullUrl },
    { key: 'CART', value: '' },
  ],
};
