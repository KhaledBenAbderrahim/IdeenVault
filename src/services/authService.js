// GitHub OAuth configuration
const GITHUB_CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID;
const GITHUB_REDIRECT_URI = process.env.REACT_APP_GITHUB_REDIRECT_URI;

// Google OAuth configuration
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

export const authService = {
  // GitHub OAuth
  initiateGithubLogin: () => {
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${GITHUB_REDIRECT_URI}&scope=user:email`;
    window.location.href = githubAuthUrl;
  },

  handleGithubCallback: async (code) => {
    try {
      const response = await fetch('/api/auth/github', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      if (!response.ok) {
        throw new Error('GitHub authentication failed');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('GitHub auth error:', error);
      throw error;
    }
  },

  // Google OAuth
  initializeGoogleLogin: () => {
    return new Promise((resolve, reject) => {
      try {
        window.google.accounts.id.initialize({
          client_id: GOOGLE_CLIENT_ID,
          callback: async (response) => {
            try {
              const result = await authService.handleGoogleCallback(response.credential);
              resolve(result);
            } catch (error) {
              reject(error);
            }
          },
        });
      } catch (error) {
        reject(error);
      }
    });
  },

  handleGoogleCallback: async (credential) => {
    try {
      const response = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ credential }),
      });

      if (!response.ok) {
        throw new Error('Google authentication failed');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Google auth error:', error);
      throw error;
    }
  },

  // Common authentication functions
  logout: async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Logout failed');
      }

      // Clear any local storage or state
      localStorage.removeItem('user');
      return true;
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  },

  getCurrentUser: () => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },
};
