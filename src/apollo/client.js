import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const client = new ApolloClient({
  link: new HttpLink({
    uri: '/.netlify/functions/vCard',
    fetch,
  }),
  cache: new InMemoryCache()
});

// export const client = new ApolloClient({
//   link: new HttpLink({
//     uri: 'http://localhost:8888/.netlify/functions/vCard',
//     fetch,
//   }),
//   cache: new InMemoryCache()
// });