import { createContext, useEffect, useState } from "react";
export const UserContext = createContext(null);

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(false);

  function logout() {
    localStorage.clear();
    setUser(null);
  }

  async function getUserDetails(sessionId) {
    localStorage.setItem("session_id", sessionId);
    const userRes = await (
      await fetch(
        `https://api.themoviedb.org/3/account?api_key=fda513da3da338ad49c9fb831abddb97&session_id=${sessionId}`
      )
    ).json();
    setUser(userRes);
    localStorage.setItem("userDB", JSON.stringify(userRes));
    window.history.pushState({}, "", "/");
  }
  useEffect(() => {
    const UrlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(UrlSearchParams.entries());
    if (params?.approved) {
      fetch(
        "https://api.themoviedb.org/3/authentication/session/new?api_key=fda513da3da338ad49c9fb831abddb97",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            request_token: params.request_token,
          }),
        }
      )
        .then((r) => r.json())
        .then((data) => getUserDetails(data.session_id));
    }
  }, []);

  useEffect(() => {
    const sessionId = localStorage.getItem("session_id");
    if (sessionId) {
      getUserDetails(sessionId);
    }
  }, []);
  async function login() {
    setLoadingUser(true);
    const { request_token } = await (
      await fetch(
        "https://api.themoviedb.org/3/authentication/token/new?api_key=fda513da3da338ad49c9fb831abddb97"
      )
    ).json();

    window.location = `https://www.themoviedb.org/authenticate/${request_token}?redirect_to=http://fardmoviedb.vercel.app`;
    setLoadingUser(false);
  }
  //
  function useAccountData(endpoint, options) {
    const sessionId = localStorage.getItem("session_id");
    const userDB = localStorage.getItem("userDB");
    const [accData, setAccData] = useState(null);

    useEffect(() => {
      if (sessionId && userDB) {
        fetch(
          `https://api.themoviedb.org/3/account/${
            userDB.id
          }/${endpoint}?api_key=fda513da3da338ad49c9fb831abddb97&session_id=${sessionId}&${new URLSearchParams(
            options?.query
          ).toString()}`
        )
          .then((r) => r.json())
          .then(setAccData)
          .finally(() => {});
      }
    }, [endpoint, options]);
    return { accData };
  }
  //
  return (
    <UserContext.Provider
      value={{ login, user, loadingUser, logout, useAccountData }}
    >
      {children}
    </UserContext.Provider>
  );
}
