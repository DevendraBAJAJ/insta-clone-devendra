import { getProviders, signIn } from "next-auth/react"
import Header from "../../components/Header"
export default function SignIn({ providers }) {
  return (
    <>
    <Header />

    <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-36 px-14 text-center">
        <img src="https://links.papareact.com/ocw" className="w-80" />
        <p className="font-xs italic">
            This build is just for a demo portfolio project. This is not a real instagram app.
        </p>
        <div className="mt-40">
            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                <button 
                className="p-3 bg-blue-500 rounded-lg text-white" 
                onClick={() => signIn(provider.id, {callbackUrl: '/'})}>
                    Sign in with {provider.name}
                </button>
                </div>
            ))}
        </div>
      </div>
    </>
  )
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}