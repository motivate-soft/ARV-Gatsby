import "./src/css/style.css";
import wrapWithProvider from "./wrap-with-provider"
export const wrapRootElement = wrapWithProvider
export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `It looks like you are running an older version of our website. ` +
      `Reload to display the latest version?`
  );

  if (answer === true) {
    window.location.reload();
  }
};