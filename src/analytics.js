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

export function logNavClick({path = null, category = GA_CATEGORY.NAV, action = GA_ACTION.CLICK} = {}) {
  sendEvent({
    category: GA_CATEGORY.NAV,
    action: GA_ACTION.CLICK,
    label: path,
  });
}

const IS_PRODUCTION = window.location.host === "alekseynikolsky.com" ||
  window.location.host === "www.alekseynikolsky.com";

export function logPageView() {
  if (IS_PRODUCTION) {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  } else {
    console.log('Dev GA PageView: ', window.location.pathname);
  }
}

export function sendEvent(params) {
  if (IS_PRODUCTION) {
    ReactGA.event(params);
  } else {
    console.log('Dev GA Event: ', params);
  }
}
