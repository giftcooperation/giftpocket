import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { signupUser, userSelector, clearState, Signupdata } from './Userslice'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
const Signup = () => {
  const dispatch = Appdispath.useDispatch()
  const { register, errors, handleSubmit } = useForm()
  const navigate = useNavigate()
  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(userSelector)
  const onSubmit = (data: string) => (dispatch) => {
    dispatch(signupUser(data))
  }
  useEffect(() => {
    return () => {
      dispatch(clearState())
    }
  }, [])
  useEffect(() => {
    if (isSuccess) {
      dispatch(clearState())
      navigate('/')
    }
    if (isError) {
      toast.error(errorMessage)
      dispatch(clearState())
    }
  }, [isSuccess, isError])
  return (
    <Fragment>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign Up to your account
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              className="space-y-6"
              onSubmit={handleSubmit(onSubmit)}
              method="POST"
            >
              {/* Form Comes Here  */}
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or <Link to="login"> Login</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default Signup
