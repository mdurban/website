import { connect } from 'react-redux'
import HelloWorld from '../../presenters/HelloWorld'

const mapDispatchToProps = dispatch => ({
  buttonAction: () => dispatch({ type: 'REDUCER', value: 'state changed from connector' })
})

export default connect(null, mapDispatchToProps)(HelloWorld)
