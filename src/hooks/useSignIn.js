import { useMutation } from "@apollo/client";
import { AUTHORIZE } from "../graphql/mutations";
import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";
const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(AUTHORIZE);

  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    const result = await mutate({ variables: { username, password } });
    const accessToken = result.data?.authorize?.accessToken;
    if (accessToken) {
      authStorage.setAccessToken(accessToken);
      apolloClient.resetStore();
    }
    return result;
  };

  return [signIn, result];
};
export default useSignIn;
