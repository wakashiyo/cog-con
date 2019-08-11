import Amplify, { Auth } from "aws-amplify";

Amplify.Logger.LOG_LEVEL = "DEBUG";

Amplify.configure({
  Auth: {
    region: process.env.VUE_APP_REGION,
    identityPoolId: process.env.VUE_APP_IDENTITY_POOL_ID,
    userPoolId: process.env.VUE_APP_USER_POOL_ID,
    userPoolWebClientId: process.env.VUE_APP_APP_CLIENT_ID
  }
});

export function signUp(username, password, email) {
  return Auth.signUp({
    username,
    password,
    attributes: {
      email: email
    }
  });
}

export function confirmSignup(username, code) {
  return Auth.confirmSignUp(username, code);
}

export function signIn(username, password) {
  return Auth.signIn(username, password);
}

export function signOut() {
  return Auth.signOut();
}
