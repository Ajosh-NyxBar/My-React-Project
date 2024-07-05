import { doc, getDoc, updateDoc, arrayRemove, arrayUnion } from "firebase/firestore";
import { create } from "zustand";
import { db } from "./firebase";
import { useUserStore } from "./userStore";

export const useChatStore = create((set) => ({
  chatId: null,
  user: null,
  isCurrentUserBlocked: false,
  isReceiverBlocked: false,
  
  fetchChatInfo: async (chatId, userId) => {
    // ... existing code ...
  },

  changeChat: (chatId, user) => {
    const currentUser = useUserStore.getState().currentUser;
    
    if (user.blocked.includes(currentUser.id)) {
      return set({
        chatId: null,
        user: null,
        isCurrentUserBlocked: true,
        isReceiverBlocked: false,
      });
    }

    if (currentUser.blocked.includes(user.id)) {
      return set({
        chatId: null,
        user: null,
        isCurrentUserBlocked: false,
        isReceiverBlocked: true,
      });
    } else {
      set({
        chatId,
        user,
        isCurrentUserBlocked: false,
        isReceiverBlocked: false,
      });
    }
  },

  changeBlocked: async () => {
    const { currentUser } = useUserStore.getState();
    const { user, isReceiverBlocked } = useChatStore.getState();

    if (!user) return;

    const userDocRef = doc(db, "users", currentUser.id);

    try {
      await updateDoc(userDocRef, {
        blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
      });

      set((state) => ({
        ...state,
        isReceiverBlocked: !state.isReceiverBlocked,
      }));
    } catch (error) {
      console.error("Error updating block status:", error);
    }
  },
}));
