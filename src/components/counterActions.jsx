import { Decrement, Increment } from "./counterTypes"

export const inc_Counter = ()=> {
    return{
        type: Increment
    }
}

export const dec_Counter = ()=> {
    return{
        type: Decrement
    }
}