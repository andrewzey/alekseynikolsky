import ReactGA from 'react-ga';

export const GA_CATEGORY = {
  NAV: 'Navigation',
  INTERNAL_LINK: 'Internal Non-Nav-Bar Link',
  EXTERNAL_LINK: 'External Link',
  AUDIO: 'Audio',
  VIDEO: 'Video',
  SCORE: 'Score',
};

export const GA_ACTION = {
  TOGGLE_PLAY: 'Toggle Play',
  DOWNLOAD: 'Download',
  CLICK: 'Click',
};

export const GA_LABEL = {
  RESEARCH_PAPER: 'Research Paper',
  LINKED_IN: 'LinkedIn',
};

export function logPageView() {
  if (window.location.host === "alekseynikolsky.com" ||
      window.location.host === "www.alekseynikolsky.com") {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  } else {
    console.log('Dev GA PageView: ', window.location.pathname);
  }
}

export function sendEvent(params) {
  if (window.location.host === "alekseynikolsky.com" ||
      window.location.host === "www.alekseynikolsky.com") {
    ReactGA.event(params);
  } else {
    console.log('Dev GA Event: ', params);
  }
}
