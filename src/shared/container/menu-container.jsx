import { connect } from 'react-redux'

import { fetchPizzaMenu } from '../action/menu'
import { addToCart } from '../action/cart'
import Menu from '../component/menu'

const mapStateToProps = state => ({
	pizzas: state.menu.get('pizzas').toJS(),
})

const mapDispatchToProps = dispatch => ({
	addToCart: (pizza) => { dispatch(addToCart(pizza)) },
	fetchPizzaMenu: () => { dispatch(fetchPizzaMenu()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
