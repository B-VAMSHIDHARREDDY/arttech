import { randomBytes, scryptSync, timingSafeEqual, createHmac } from "crypto";

const SESSION_COOKIE = "artech_admin_session";
const SESSION_TTL_MS = 1000 * 60 * 60 * 8; // 8 hours

function getSessionSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    throw new Error("ADMIN_SESSION_SECRET is not configured");
  }
  return secret;
}

/** scryptSync(password) using the salt embedded in ADMIN_PASSWORD_HASH ("salt:hash", both hex). */
export function verifyAdminCredentials(username: string, password: string): boolean {
  const expectedUser = process.env.ADMIN_USERNAME;
  const stored = process.env.ADMIN_PASSWORD_HASH;
  if (!expectedUser || !stored) return false;

  const userOk = timingSafeEqualStr(username, expectedUser);

  const [salt, hashHex] = stored.split(":");
  if (!salt || !hashHex) return false;
  const expectedHash = Buffer.from(hashHex, "hex");
  const actualHash = scryptSync(password, salt, expectedHash.length);
  const passOk = actualHash.length === expectedHash.length && timingSafeEqual(actualHash, expectedHash);

  return userOk && passOk;
}

function timingSafeEqualStr(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) {
    // still do a comparison to avoid short-circuit timing leak
    timingSafeEqual(bufA, bufA);
    return false;
  }
  return timingSafeEqual(bufA, bufB);
}

function sign(value: string): string {
  return createHmac("sha256", getSessionSecret()).update(value).digest("hex");
}

export function createSessionToken(): { name: string; value: string; maxAgeSeconds: number } {
  const expires = Date.now() + SESSION_TTL_MS;
  const payload = `${expires}`;
  const signature = sign(payload);
  return {
    name: SESSION_COOKIE,
    value: `${payload}.${signature}`,
    maxAgeSeconds: Math.floor(SESSION_TTL_MS / 1000),
  };
}

export function isValidSessionToken(token: string | undefined | null): boolean {
  if (!token) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  const expected = sign(payload);
  const sigBuf = Buffer.from(signature);
  const expectedBuf = Buffer.from(expected);
  if (sigBuf.length !== expectedBuf.length || !timingSafeEqual(sigBuf, expectedBuf)) {
    return false;
  }

  const expires = Number(payload);
  if (!Number.isFinite(expires) || Date.now() > expires) return false;

  return true;
}

export const SESSION_COOKIE_NAME = SESSION_COOKIE;

/** Utility for generating a new ADMIN_PASSWORD_HASH value from a plaintext password. */
export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}
