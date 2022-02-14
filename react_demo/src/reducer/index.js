
const initState = {
    count: 0
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case "add_action" :
            return  {
                count: state.count+1
            }
            default:
                return state
    }
    
}