import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import { env } from '@/config/env';

export function initSentry() {
  if (env.VITE_APP_ENV === 'production') {
    Sentry.init({
      dsn: env.VITE_SENTRY_DSN,
      integrations: [new BrowserTracing()],
      tracesSampleRate: 1.0,
      environment: env.VITE_APP_ENV,
      beforeSend(event) {
        // Don't send events in development
        if (env.VITE_APP_ENV === 'development') {
          return null;
        }
        return event;
      },
    });
  }
}

export function captureException(error: Error, context?: Record<string, any>) {
  if (env.VITE_APP_ENV === 'production') {
    Sentry.captureException(error, {
      extra: context,
    });
  }
  console.error(error);
}

export function captureMessage(message: string, level: Sentry.SeverityLevel = 'info') {
  if (env.VITE_APP_ENV === 'production') {
    Sentry.captureMessage(message, {
      level,
    });
  }
  console.log(message);
} 