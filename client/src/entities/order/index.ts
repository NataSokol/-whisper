import orderReducer from './model/orderSlice'
export type {Order, OrderItem} from './model'
export {getAllOrders, getOneOrder} from './model/orderThunk'
export {OrderServices} from './api'

export {orderReducer}


