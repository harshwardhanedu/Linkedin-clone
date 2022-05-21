import { auth, provider } from "../firebase";
import { SET_USER } from "./actionType";

export const setUser = (payload) => ({
    type: SET_USER,
    user: payload,
});

export function signInAPI(){
    return (dispatch) =>{
        auth
            .signInWithPopup(provider)
            .then((payload) => {
                dispatch(setUser(payload.user));
                // console.log(payload); //firebase giving back object in console
        }).catch((error) => alert(error.message));
    };
}