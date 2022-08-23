import React from "react";
import Link from "next/link";
import { Button, Flex } from "@chakra-ui/react";
// take in auth decide what buttons to show

// auth stuff
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { auth } from "../store/firebase";

// auth from react query hook
import { useAuthQueryHook } from "../store/reactQueryHook";

const Navbar = () => {
  const { data, isloading } = useAuthQueryHook();
  // console.log(data?.currentUser);

  const router = useRouter();

  const onSignOut = () => {
    try {
      signOut(auth);
      router.push("/");

      console.log();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Flex>
      <Button>
        <Link href={"/"}>Home</Link>
      </Button>
      {!data?.currentUser ? (
        <Button bgColor={"gray.400"}>
          <Link href={"/Login"}>Login</Link>
        </Button>
      ) : (
        <Flex align={"center"}>
          <p>{data.currentUser.uid}</p>
          <Button onClick={onSignOut}>Logout</Button>
        </Flex>
      )}
    </Flex>
  );
};

export default Navbar;

// login still shows after we create a user and sign in
// need state or react query inorder for it to refresh
