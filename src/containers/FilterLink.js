// import { connect } from 'react-redux';
// import Link from '../components/Link';
// import { setVisibilityFilter } from '../actions';

// const mapStateToProps = (state, ownProps) => ({
// 	active: ownProps.filter === state.visibilityFilter
// })

// const mapDispatchToProps = (dispatch, ownProps) => {
// 	return {
// 		onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
// 	}
// }

// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(Link);

import React from 'react'
import { NavLink } from 'react-router-dom'

const FilterLink = ({ filter, children }) => (
   <NavLink
      exact
      to={filter === 'SHOW_ALL' ? '/' : `/${filter}`}
      activeStyle={{
         textDecoration: 'none',
         color: 'black'
      }}
   >
      {children}
   </NavLink>
)

export default FilterLink;