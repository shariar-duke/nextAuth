import React from "react";
import { doSignOut } from "../actions";
export default function SignOut() {
  return (
    <div>
      <form action={doSignOut}>
        <button type="submit">Sign Out</button>
      </form>
    </div>
  );
}
