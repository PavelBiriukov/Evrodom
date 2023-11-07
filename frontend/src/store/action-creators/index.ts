import * as CardActionCreaters from './card'
import * as CategoriesActionCreaters from './categories'
import * as CartItemsActionCreaters from './cartItems'

export default {
    ...CardActionCreaters,
    ...CategoriesActionCreaters,
    ...CartItemsActionCreaters,
}