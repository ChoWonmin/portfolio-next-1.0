"use client"

import Image from "next/image"
import { useEffect } from "react"

export default function KakaoLoginButton() {

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.9/kakao.min.js'
    script.integrity="sha384-JpLApTkB8lPskhVMhT+m5Ln8aHlnS0bsIexhaak0jOhAkMYedQoVghPfSpjNi9K1"
    script.crossOrigin="anonymous"

    script.onload = () => console.log('kakao script load!')
    script.onerror = () => console.log('[ERROR] kakao script load!')

    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  const loginByKakao = () => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY as string)
    }

    window.Kakao.Auth.authorize({
      redirectUri: `${window.location.origin}/login/kakao`
    })
    
  }

  return (
    <Image 
      onClick={() => loginByKakao()}
      src={"/brand/kakao_login.png"} alt={"카카오 로그인"} width={300} height={45}
    />
  )
}