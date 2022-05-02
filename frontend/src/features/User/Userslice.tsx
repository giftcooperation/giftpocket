import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { AnyAction } from 'redux'
import type { RootState } from '../../app/store'

// Define a type for the slice state
interface UserState {
  username: string | null
  email: string | null
  isFetching: boolean
  isSuccess: boolean
  isError: boolean
  errorMessage: string | null
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

// Define the initial state using that type
const initialState: UserState = {
  username: '',
  email: '',
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  loading: 'idle',
}

export const signupUser = createAsyncThunk(
  'users/signupUser',
  async (name, email, password, thunkAPI) => {
    try {
      const response = await fetch(
        'https://mock-user-auth-server.herokuapp.com/api/v1/users',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            //email,
            //password,
          }),
        }
      )
      let data = await response.json()
      console.log('data', data)
      if (response.status === 200) {
        localStorage.setItem('token', data.token)
        return { ...data, username: name }
      } else {
        return thunkAPI.rejectWithValue(data)
      }
    } catch (error) {
      /*
        console.log("Error", e.response.data)
        return thunkAPI.rejectWithValue(error.response.data)
        */
      return thunkAPI.rejectWithValue('unknwon error signup')
    }
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearState: (state) => {
      state.isError = false
      state.isSuccess = false
      state.isFetching = false

      return state
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signupUser.fulfilled, (state, { payload }) => {
      state.isFetching = false
      state.isSuccess = true
      state.email = payload.user.email
      state.username = payload.user.name
    })
    builder.addCase(signupUser.pending, (state) => {
      state.isFetching = true
    })
    builder.addCase(signupUser.rejected, (state, action) => {
      state.isFetching = false
      state.isError = true
      /*
        if (action.payload) {
            // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.
            state.errorMessage = action.payload.errorMessage
        } else {
        state.errorMessage = action.error.message as string
        }
        */
      state.errorMessage = action.error.message as string
    })
  },
  /*{
    [signupUser.fulfilled]: (state, { payload }) => {
        state.isFetching = false;
        state.isSuccess = true;
        state.email = payload.user.email;
        state.username = payload.user.name;
      },
      [signupUser.pending]: (state) => {
        state.isFetching = true;
      },
      [signupUser.rejected]: (state, { payload }) => {
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = payload.message;
      }
  },
  */
})

export const { clearState } = userSlice.actions

export const userSelector = (state: RootState) => state.auth
