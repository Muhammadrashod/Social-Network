import React, { useState, useEffect } from "react";

export const useUserId = () => {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const saveUserId = localStorage.getItem("userData");

    if (saveUserId) {
      setUserId(JSON.parse(saveUserId));
    }
  }, []);

  return userId;
};
