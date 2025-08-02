import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Basic認証のチェック
  const basicAuth = request.headers.get('authorization')
  const url = request.nextUrl

  // 認証が必要な場合（環境変数で制御）
  if (process.env.ENABLE_AUTH === 'true') {
    
    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1]
      const [user, pwd] = atob(authValue).split(':')

      // 環境変数の認証情報と照合
      if (user === process.env.AUTH_USER && pwd === process.env.AUTH_PASSWORD) {
        return NextResponse.next()
      }
    }

    url.pathname = '/api/auth'

    return new NextResponse('認証が必要です', {
      status: 401,
      headers: {
        'WWW-authenticate': 'Basic realm="Secure Area"',
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (authentication endpoint)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api/auth|_next/static|_next/image|favicon.ico).*)',
  ],
} 