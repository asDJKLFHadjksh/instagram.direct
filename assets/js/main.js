const animationContainer = document.getElementById("loading-animation");

const targetUrl =
  window.redirectConfig && typeof window.redirectConfig.targetUrl === "string"
    ? window.redirectConfig.targetUrl
    : "";

const targetUrlLink = document.getElementById("target-url");
const targetUrlText = document.getElementById("target-url-text");
const canonicalLink = document.getElementById("canonical-link");

const formatDisplayUrl = (url) => {
  try {
    const parsedUrl = new URL(url);
    return `${parsedUrl.hostname}${parsedUrl.pathname}`.replace(/\/$/, "");
  } catch (error) {
    return url.replace(/^https?:\/\//, "");
  }
};

if (targetUrlLink && targetUrl) {
  targetUrlLink.setAttribute("href", targetUrl);
}

if (canonicalLink && targetUrl) {
  canonicalLink.setAttribute("href", targetUrl);
}

if (targetUrlText && targetUrl) {
  targetUrlText.textContent = formatDisplayUrl(targetUrl);
}

if (animationContainer && window.lottie) {
  window.lottie.loadAnimation({
    container: animationContainer,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "loading.json",
  });
}
