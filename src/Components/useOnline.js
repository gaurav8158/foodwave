import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsonline] = useState(true);
  useEffect(() => {
    const handleOnline = window.addEventListener("online", (event) => {
      setIsonline(true);
    });
    const handleOffline = window.addEventListener("ofline", (event) => {
      setIsonline(false);
    });
    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return isOnline;
};
export default useOnline;
