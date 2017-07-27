import { connect } from 'react-redux'

import { removeFromCart } from '../action/cart'
import Cart from '../component/cart'

const mapStateToProps = state => ({
	orders: state.cart.get('orders').toJS(),
})

const mapDispatchToProps = dispatch => ({
	removeFromCart: (index) => { dispatch(removeFromCart(index)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
