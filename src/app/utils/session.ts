export const session = {
    isLoggedIn(): boolean {
      return !!localStorage.getItem('token');
    }
  };
  