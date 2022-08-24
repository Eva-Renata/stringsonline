import create from "zustand";

export const useLoginStore = create((set) => {
    //vi bruger { } efter return fordi vi har js i stedet for jsx
    return{
        //vi måler på at vi har en sessionStorage token
        loggedIn: Boolean(sessionStorage.getItem("token")),

        setLoggedIn: (loggedIn = true) => 
        set(() => {
            //hvis vi er ikke logged in 
            if (!loggedIn){
                sessionStorage.removeItem("token");
            }
            return{ loggedIn };
        }),
        setLogOut: () =>
        set((state) => {
            sessionStorage.removeItem("token");
            state.loggedIn = false;
        }),
    }
})