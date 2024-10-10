import NextAuth, { NextAuthConfig } from 'next-auth';
import Google from "@auth/core/providers/google"
import { UpstashRedisAdapter } from '@auth/upstash-redis-adapter';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL!,
  token: process.env.UPSTASH_REDIS_TOKEN!
})

const authConfig: NextAuthConfig = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: UpstashRedisAdapter(redis),
}

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);