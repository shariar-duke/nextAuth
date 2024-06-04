import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const {
  // egula jno api leve eo handle korte pare...
  handlers:{GET, POST},
  auth,
  signIn, 
  signOut
} = NextAuth({
    providers:[ GoogleProvider({
        clientId : process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET
       })]
   
})

// ekhnae amra nextAuth thek kisu jinis timport kore nische niye export kore disch. 
//export kore diche holo auth, signIn, signOut, 

// NextAuth perameter hisebe ekta object nibe . Ei object er ekta peramter holo providers 
// ekhn onk kisu diayai next auth er help nia login kora jay jmn Google, Github, etc. Facebook . Tai providers ta holo ekta array
// Er modhe amra apatoto GoogleProviders k rakhse 
// eta peratmeter hisbe ekta object ney
// ei object er apatoto duta property 
// clientId => ekta client Id  
// clientSecret => ekta secret mesage localhost 300 theke google er kase jabe 
