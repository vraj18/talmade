import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_MEASUREMENT_ID = 'G-P2NR5GD317';

type EventParams = Record<string, string | number | boolean | undefined>;

export function trackGaEvent(eventName: string, params: EventParams = {}) {
  const gtag = (window as any).gtag;
  if (typeof gtag !== 'function') return;

  gtag('event', eventName, {
    send_to: GA_MEASUREMENT_ID,
    ...params,
  });
}

function getClickLocation(element: Element) {
  if (element.closest('nav')) return 'navbar';
  if (element.closest('footer')) return 'footer';
  if (element.closest('#contact')) return 'contact_section';
  return 'page_content';
}

function cleanText(element: Element) {
  return (element.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 100);
}
export function GoogleAnalytics() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const reached = new Set<number>();
    const milestones = [25, 50, 75];

    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const percent = Math.round((window.scrollY / scrollable) * 100);
      milestones.forEach((milestone) => {
        if (percent >= milestone && !reached.has(milestone)) {
          reached.add(milestone);
          trackGaEvent('scroll_depth', {
            percent_scrolled: milestone,
            page_path: `${pathname}${search}`,
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname, search]);
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const interactive = target?.closest('a, button');
      if (!interactive) return;

      const link = interactive instanceof HTMLAnchorElement
        ? interactive
        : interactive.closest('a');
      const href = link?.getAttribute('href') || '';
      const absoluteUrl = link?.href || href;
      const linkText = cleanText(interactive);
      const clickLocation = getClickLocation(interactive);
      const pagePath = `${window.location.pathname}${window.location.search}`;

      if (href.startsWith('tel:')) {
        trackGaEvent('phone_call_click', {
          phone_number: href.replace('tel:', ''),
          click_location: clickLocation,
          page_path: pagePath,
        });
        return;
      }

      if (/wa\.me|api\.whatsapp\.com|whatsapp:\/\//i.test(href)) {
        trackGaEvent('contact_whatsapp', {
          link_url: absoluteUrl,
          click_location: clickLocation,
          page_path: pagePath,
        });
        return;
      }
      if (href.startsWith('mailto:')) {
        trackGaEvent('email_click', {
          link_url: absoluteUrl,
          click_location: clickLocation,
          page_path: pagePath,
        });
        return;
      }

      const isContactCta =
        href === '/enquiry' ||
        href === '/contact-us' ||
        href.includes('#contact') ||
        /get started|submit enquiry|contact us|make an enquiry/i.test(linkText);

      if (isContactCta) {
        trackGaEvent('contact_click', {
          cta_text: linkText || 'contact_cta',
          link_url: absoluteUrl,
          click_location: clickLocation,
          page_path: pagePath,
        });
      }

      if (link) {
        const url = new URL(link.href, window.location.origin);
        const isProductCategory = url.pathname.startsWith('/category/');
        const isProduct = url.pathname.startsWith('/products/');
        const isNavigation = Boolean(interactive.closest('nav, footer'));

        if (isProductCategory || isProduct || isNavigation) {
          trackGaEvent('select_content', {
            content_type: isProductCategory ? 'product_category' : isProduct ? 'product' : 'navigation',
            item_id: url.pathname.split('/').filter(Boolean).pop() || linkText || 'home',
            link_text: linkText,
            link_url: absoluteUrl,
            click_location: clickLocation,
          });
        }
      }
      const ariaLabel = interactive.getAttribute('aria-label') || '';
      if (/show .* office on map/i.test(ariaLabel)) {
        trackGaEvent('select_content', {
          content_type: 'office_location',
          item_id: /corporate/i.test(ariaLabel) ? 'chennai_corporate_office' : 'surat_registered_office',
          link_text: ariaLabel,
          click_location: clickLocation,
        });
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
