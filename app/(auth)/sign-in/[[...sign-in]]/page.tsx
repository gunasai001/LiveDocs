import { SignIn } from '@clerk/nextjs'

const SigninPage = () => {
  return (
    <div className='auth-page'>
        <SignIn />
    </div>
  )
}

export default SigninPage