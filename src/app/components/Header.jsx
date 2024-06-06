import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import Signin from "./signin";
import SignOut from "./signout";
export default async function Header() {
  const session = await auth();
  console.log("The session data is", session);

  return (
    <div>
      {session?.user ? (
        <div className="flex">
          {<p>{session?.user?.name}</p>} |
          <Image
            src={session?.user?.image}
            alt={session?.user?.name}
            width={32}
            height={32}
            className="rounded-full"
          />

          <SignOut/>
        </div>
      ) : (
        <div>
        <Signin/>
        </div>
      )}
    </div>
  );
}
