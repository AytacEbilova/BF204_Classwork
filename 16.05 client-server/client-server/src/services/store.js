import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { menuApi } from './menuApi'


export const store = configureStore({
  reducer: {
  
    [menuApi.reducerPath]: menuApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(menuApi.middleware),
})

setupListeners(store.dispatch)