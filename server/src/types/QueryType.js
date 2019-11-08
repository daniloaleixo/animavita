import { GraphQLObjectType } from 'graphql';

import UserType from '../modules/user/UserType';
import AdoptQuery from '../modules/adopt/AdoptQuery';
import ConversationQuery from '../modules/conversation/ConversationQuery';
import MessageQuery from '../modules/message/MessageQuery';
import SolicitationQuery from '../modules/solicitation/SolicitationQuery';

export default new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all queries',
  fields: () => ({
    me: {
      type: UserType,
      description: 'Return the authenticated user data',
      resolve: (root, args, context) => (context.user ? context.user : null)
    },
    ...AdoptQuery,
    ...ConversationQuery,
    ...MessageQuery,
    ...SolicitationQuery
  })
});
