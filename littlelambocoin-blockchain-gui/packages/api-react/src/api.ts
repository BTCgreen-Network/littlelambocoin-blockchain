import { createApi } from '@reduxjs/toolkit/query/react';
import littlelambocoinLazyBaseQuery from './littlelambocoinLazyBaseQuery';

export const baseQuery = littlelambocoinLazyBaseQuery({});

export default createApi({
  reducerPath: 'littlelambocoinApi',
  baseQuery,
  endpoints: () => ({}),
});
