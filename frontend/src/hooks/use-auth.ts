import { useEffect, useState } from 'react';

interface JwtPayload {
  id: string;
  mail: string;
  iat: number;
  exp: number;
}

export const decodeJwt = (token: string): JwtPayload | null => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => `%${ (`00${ c.charCodeAt(0).toString(16)}`).slice(-2)}`)
        .join('')
    );

    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Failed to decode JWT:', error);
    return null;
  }
};

export const getUserIdFromToken = (token: string): string | null => {
  const decoded = decodeJwt(token);
  return decoded?.id || null;
};

export const useAuth = () => {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    // Получаем токен из localStorage (или кук, если используете)
    const token = localStorage.getItem('fitness-box-token');

    if (token) {
      const id = getUserIdFromToken(token);
      setUserId(id);
    }
  }, []);

  return { userId };
};
