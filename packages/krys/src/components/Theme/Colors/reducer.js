import { combineReducers } from 'redux'
import { createSelector } from 'reselect'

import { luminanceScale, createColorLuminanceScale } from './colorUtilities'
import reducerRegistry from '../../../reducerRegistry'

export const reducerName = 'theme/colors'

const brandColors = (state = {}, action) => {
  switch (action.type) {
    case SET_BRAND_COLORS:
      return action.payload.reduce((brandColors, { name, hex }) => {
        brandColors[name] = hex
        return brandColors
      }, {})

    default:
      return state
  }
}

const reducer = combineReducers({
  brandColors
})
reducerRegistry.register(reducerName, reducer)
export default reducer

export const selectBrandColors = state => state[reducerName].brandColors
export const selectBrandColorArray = createSelector(
  [selectBrandColors],
  brandColors =>
    Object.entries(brandColors).map(([name, hex]) => ({ name, hex }))
)

export const selectShades = createSelector([selectBrandColors], brandColors =>
  brandColors.map(({ hex }) => createColorLuminanceScale(luminanceScale)(hex))
)

export const SET_BRAND_COLORS = 'SET_BRAND_COLORS'

export const setBrandColors = brandColors => ({
  type: SET_BRAND_COLORS,
  payload: brandColors
})
