import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import Router from "next/router";
import NProgress from "nprogress";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const handleRouteChangeStart = () => {
      setLoading(true);
      setProgress(0);
      NProgress.start();

      // Simulate progress increasing over time
      interval = setInterval(() => {
        setProgress((old) => {
          if (old >= 90) {
            clearInterval(interval);
            return old;
          }
          return old + Math.random() * 10; // random increment for effect
        });
      }, 300);
    };

    const handleRouteChangeComplete = () => {
      setProgress(100);
      NProgress.done();
      clearInterval(interval);

      setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 500); // fade out delay
    };

    const handleRouteChangeError = () => {
      NProgress.done();
      clearInterval(interval);
      setLoading(false);
      setProgress(0);
    };

    Router.events.on("routeChangeStart", handleRouteChangeStart);
    Router.events.on("routeChangeComplete", handleRouteChangeComplete);
    Router.events.on("routeChangeError", handleRouteChangeError);

    return () => {
      Router.events.off("routeChangeStart", handleRouteChangeStart);
      Router.events.off("routeChangeComplete", handleRouteChangeComplete);
      Router.events.off("routeChangeError", handleRouteChangeError);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      {loading && (
        <div className="loader-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="flex flex-col items-center space-x-4 text-orange-400 drop-shadow-lg">
            <div className="text-4xl animate-pulse">🔥</div>
            <div className="text-xl font-semibold">Loading...</div>
            <div className="w-48 h-3 bg-gray-700 rounded overflow-hidden">
              <div
                className="h-full bg-orange-400 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
