import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useRouter } from "next/router";
// maybe route after?

const auth = getAuth();

// querykey should be the auth uid
export const useAuthQueryHook = () => {
  // problem with this is that it runs twice, different keys will be cache so i dont know if ill refresh
  const { data, isloading } = useQuery(["authquerykey"], () => getAuth(), {
    onSuccess: (response) => {
      // console.log(response);
    },
  });

  return { data, isloading };
};

// need to sign in using email and password

export const useSignoutHook = () => {
  const router = useRouter();
  const { data, isloading, mutate } = useMutation(
    () => signInWithEmailAndPassword(),
    {
      onSuccess: (response) => {
        console.log(` signout mutation success:  ${response}`);
        router.push("/");
      },
    }
  );

  return {
    data,
    isloading,
    mutate,
  };
};

export const useSignInHook = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { data, isloading, mutate } = useMutation(
    (loginInfo) =>
      signInWithEmailAndPassword(auth, loginInfo.email, loginInfo.password),

    {
      onSuccess: (response) => {
        console.log(response);
        queryClient.invalidateQueries(["authquerykey"]);
        router.push("/");

        // once we sign in we want to invalidate the authkey to cause it to refresh so that our navbar can refresh and show account instead of login
      },
    }
  );

  return {
    data,
    isloading,
    mutate,
  };
};

// notes
// maybe have all reactquerykeys here?
// same issue where routing to new page removes all reat query data
//  have routes here?

const reactQueryKeys = {};
