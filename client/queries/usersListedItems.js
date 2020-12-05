import { gql } from '@apollo/client';

export const GET_USER_ITEMS = gql`
query get_user_by_email (
  $email: String!
) {
  get_user_by_email (
    email: $email
  ) {
    item {
      id
      name
      minPrice
      description
    }
  }
}
`;

export const UPDATE_ITEM = gql`
mutation update_item (
  $itemId: String!
  $item: ItemUpdate!
) {
  update_item (
    itemId: $itemId
    item: $item
  ) {
    id
    name
    minPrice
    description
  }
}
`;