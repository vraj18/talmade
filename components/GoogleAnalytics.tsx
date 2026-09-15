import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const GA_MEASUREMENT_ID = 'G-P2NR5GD317';

export function GoogleAnalytics() {
  const { pathname, search } = useLocation();
  const isInitialPageView = useRef(true);

  useEffect(() => {
    // The Google tag in index.html sends the initial page view.
    if (isInitialPageView.current) {
      isInitialPageView.current = false;
      return;
    }

    const gtag = (window as any).gtag;
    if (typeof gtag === 'function') {
      gtag('event', 'page_view', {
        send_to: GA_MEASUREMENT_ID,
        page_path: `${pathname}${search}`,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [pathname, search]);

  return null;
}
