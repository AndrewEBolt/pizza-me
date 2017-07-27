import { connect } from 'react-redux'

import { fetchPizzaMenu } from '../action/menu'
import Menu from '../component/menu'

const mapStateToProps = state => ({
	pizzas: state.menu.get('pizzas'),
})

const mapDispatchToProps = dispatch => ({
	fetchPizzaMenu: () => { dispatch(fetchPizzaMenu()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
