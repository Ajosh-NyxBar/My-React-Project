import { COLLAPSE_MENU } from "../utilts/action"

const statsReducer = (state, action) => {

    if (action.type === COLLAPSE_MENU ) {
        return {...state, collapsed: !state.collapsed}
    }
    return {...state}
}

export default statsReducer