import { doc, getDoc } from "firebase/firestore";
import {create} from "zustand";
import { db } from "./firebase";

export const useUserStore = create((set) => ({
  currentUser: null,
  isLoading: false, 
  fetchUserInfo: async (uid) => {
   if(!uid) return set ({currentUser: null, isLoading: false})
   
    set({ isLoading: true }); 
    
    try{
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);
      console.log("Fetching user info for UID:", uid); // Added logging
      set({ currentUser: docSnap.data() });

      if(docSnap.exists()){
        console.log("User data:", docSnap.data());
        set({currentUser: docSnap.data(), isLoading: false})
      }else{
        console.log("User not found")
        set({currentUser: null, isLoading: false})
      }
    }catch(error){
      console.error("Error fetching user info:", error);
      set({ isLoading: false }); 
    }
  },
}));
