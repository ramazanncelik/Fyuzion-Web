import { ApolloClient, InMemoryCache, split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { RetryLink } from '@apollo/client/link/retry';

const GRAPHQL_ENDPOINT = 'wss://fyuzion-server.adaptable.app/graphql';
const HTTP_ENDPOINT = 'https://fyuzion-server.adaptable.app/graphql';

const httpLink = new HttpLink({
    uri: HTTP_ENDPOINT
});

const wsLink = new GraphQLWsLink(createClient({
    url: GRAPHQL_ENDPOINT,
}));

const retryLink = new RetryLink({
  attempts: {
    max: Infinity, // sonsuz sayıda deneme yapmak istiyorsanız
    retryIf: (error, _operation) => !!error, // tüm hataları yeniden dene
  },
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const splitLink = retryLink.concat(link); // retryLink ve link'i birleştir

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache()
});

export default client;