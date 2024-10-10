'use client';

import { useSession, signIn, signOut } from 'next-auth/react';

export default function TopPage() {
  const { data: session } = useSession();
  return (
    <>
      <div className="mb-3">
        メールアドレス: {session?.user?.email || 'ログインしていません'}
      </div>
      <button 
         onClick={() => signIn()}
         className="m-1 p-1 rounded bg-green-500 text-white hover:bg-green-600 transition cursor-pointer"
      >
        ログイン
      </button>
      <button 
          onClick={() => signOut()}
         className="m-1 p-1 rounded bg-gray-500 text-white hover:bg-gray-600 transition cursor-pointer"
      >
        ログアウト
      </button>
    </>
  );
}