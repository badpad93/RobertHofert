/**
 * Minimal in-memory rate limiter. Suitable for a single-instance deployment
 * as a basic abuse guard. For multi-instance/serverless scale, replace with a
 * shared store (e.g. Upstash Redis). Documented in README.
 */
type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();
const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5;

export function rateLimit(key: string): {
  allowed: boolean;
  remaining: number;
  retryAfterSeconds: number;
} {
  const now = Date.now();
  const existing = buckets.get(key);

  if (!existing || existing.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, remaining: MAX_REQUESTS - 1, retryAfterSeconds: 0 };
  }

  if (existing.count >= MAX_REQUESTS) {
    return {
      allowed: false,
      remaining: 0,
      retryAfterSeconds: Math.ceil((existing.resetAt - now) / 1000),
    };
  }

  existing.count += 1;
  return {
    allowed: true,
    remaining: MAX_REQUESTS - existing.count,
    retryAfterSeconds: 0,
  };
}

// Opportunistic cleanup so the map does not grow unbounded.
export function pruneRateLimitBuckets() {
  const now = Date.now();
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key);
  }
}
