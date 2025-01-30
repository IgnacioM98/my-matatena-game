import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducers";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const configureAppStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
  if (process.env.NODE_ENV === "development") {
    if ((module as any).hot) {
      (module as any).hot.accept(() => {
        store.replaceReducer(rootReducer);
      });
    }
  }
  return store;
};

const store = configureAppStore();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
