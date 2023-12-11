import * as CardActionCreaters from './card'
import * as CategoriesActionCreaters from './categories'
import * as CartItemsActionCreaters from './cartItems'
import * as UserActionCreaters from './users'
import * as OrdersActionCreaters from './orders'

export default {
    ...CardActionCreaters,
    ...CategoriesActionCreaters,
    ...CartItemsActionCreaters,
    ...UserActionCreaters,
    ...OrdersActionCreaters,
}