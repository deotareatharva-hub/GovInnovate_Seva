import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
const TOKEN_KEY = "govinnovate_token";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(
    () => localStorage.getItem(TOKEN_KEY)
  );
  const [loading, setLoading] = useState(true);

  const isAuthenticated = Boolean(token && user);

  // Fetch the logged-in user's profile from the backend.
  const fetchCurrentUser = async (accessToken) => {
    const response = await fetch(`${API_URL}/auth/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Unable to fetch user profile");
    }

    const data = await response.json();

    // Supports either { user: {...} } or a direct user object.
    return data.user ?? data;
  };

  // Restore the existing login session when the app loads.
  useEffect(() => {
    const restoreSession = async () => {
      const savedToken = localStorage.getItem(TOKEN_KEY);

      if (!savedToken) {
        setLoading(false);
        return;
      }

      try {
        const currentUser = await fetchCurrentUser(savedToken);

        setToken(savedToken);
        setUser(currentUser);
      } catch (error) {
        console.error("Session restoration failed:", error);

        localStorage.removeItem(TOKEN_KEY);
        setToken(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    restoreSession();
  }, []);

  // Save a token and user after successful login.
  const login = (accessToken, userData) => {
    if (!accessToken || !userData) {
      throw new Error("Token and user information are required");
    }

    localStorage.setItem(TOKEN_KEY, accessToken);

    setToken(accessToken);
    setUser(userData);
  };

  // Clear the current session.
  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);

    setToken(null);
    setUser(null);
  };

  const value = {
    user,
    token,
    loading,
    isAuthenticated,
    login,
    logout,
    setUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};