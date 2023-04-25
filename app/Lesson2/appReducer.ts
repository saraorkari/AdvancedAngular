import { User } from "./user";

// export interface UserState{
//     user: User[]
// }

// export function UserReducer(state: UserState = {user:[]}, action: any)
export function UserReducer(state=[], action: any)
{
    switch(action.type)
    {
        case "ADD":
            return [...state, action.payload]
            // return {...state, user : [...state.user , action.payload]}
        
        case "UPDATE":
            let index = state.findIndex(x=>x.id==action.payload.id);
            if(index >= 0)
            {
                let arr = [...state];
                arr[index] = action.payload;
                return arr;
            }
            return state;

        case "DELETE":
            let index2 = state.findIndex(x=>x.id==action.payload);
            if(index2 >= 0)
            {
                let arr = [...state];
                arr.splice(index2,1);
                return arr;
            }
            return state;

        default: 
            return state;
    }
}