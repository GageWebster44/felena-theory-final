import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function IndexRedirect() {
  const router = useRouter()
  useEffect(() => {
    router.push('/launch')
  }, [router])

  return <p>Redirecting to launch page...</p>
}