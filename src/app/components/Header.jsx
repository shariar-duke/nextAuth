
import {auth, signIn , signOut} from "@/auth"
import Image from "next/image"
import Link from "next/link"
export default async function Header() {
  const session = await auth();
  console.log("The session data is", session)
  return (
    <div>
      
    </div>
  )
}
