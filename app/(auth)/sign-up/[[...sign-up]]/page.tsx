import { SignUp } from '@clerk/nextjs'

const SignupPage = () => {
  return (
    <div className='auth-page'>
        <SignUp />
    </div>
  )
}

export default SignupPage