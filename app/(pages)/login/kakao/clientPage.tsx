"use client"

import Api from "@/lib/api"
import { useEffect } from "react"

export default function ClientPage({code}: {code: string}) {
    useEffect(() => {
        (async () => {
            await Api().loginByKakao(code, window.location.origin)
        }) ()
    }, [ code ])

    return (
        <div>
            카카오 로그인 중입니다...
        </div>
    )
}
