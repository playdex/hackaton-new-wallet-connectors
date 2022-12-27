import cookie from 'js-cookie';

export const JWT_COOKIES_KEY = 'token';

export const getTokenFromCookies = (): string | null  => {
    return typeof window !== 'undefined'
      ? cookie.get(JWT_COOKIES_KEY) || null
      : null;
  };

export const setTokenToCookies = (token: string | null, expirationTime?: string) => {
    if (typeof window !== 'undefined') {
        token
        ? cookie.set(JWT_COOKIES_KEY, token, {
            expires: expirationTime ? new Date(expirationTime) : undefined,
          })
        : cookie.remove(JWT_COOKIES_KEY);
    }
  };
