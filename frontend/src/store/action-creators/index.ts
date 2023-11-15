import * as CardActionCreaters from './card'
import * as CategoriesActionCreaters from './categories'
import * as CartItemsActionCreaters from './cartItems'
import * as UserActionCreaters from './users'

export default {
    ...CardActionCreaters,
    ...CategoriesActionCreaters,
    ...CartItemsActionCreaters,
    ...UserActionCreaters,
}