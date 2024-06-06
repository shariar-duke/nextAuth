import React from 'react'
import Link from 'next/link'
export default function Signin() {
  return (
    <div>
       <Link href="/api/auth/signin">
        SignIn
       </Link>
    </div>
  )
}
