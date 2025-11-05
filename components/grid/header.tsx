'use client'

import { LogIn, LogOut } from "lucide-react"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { getCookie, deleteCookie } from "cookies-next"

export default function Header() {
    const router = useRouter()
    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        const accessToken = getCookie('accessToken')
        if (accessToken) {
            setIsLogin(true)
        }
    }, [])

    const logout = () => {
        // 로그아웃
        // 1. accessToken 키로된 쿠키 지운다.
        deleteCookie('accessToken')
        // 2. setIsLogin(false)
        setIsLogin(false)

    }

    return (
        <header className="flex justify-center h-[64px]">
            <div className="w-full max-w-[1280px] flex justify-between items-center">
                <div className="font-bold" onClick={() => router.push('/')}> Logo </div>
                <div className="flex space-x-4">
                    <Button variant='ghost'> ABOUT </Button>
                    <Button variant='ghost'> HISTORY </Button>
                    <Button variant='ghost' onClick={() => router.push('/project')}> PROJECT </Button>
                    <Button variant='ghost'> ALGORITHM </Button>
                    <Button variant='secondary' className="rounded-full" 
                        onClick={() => {
                            router.push('/til')
                        }}
                    >
                    <div className="font-bold" > Today I Learned </div>
                    </Button>
                </div>
                <div>
                    {
                        isLogin?
                            <Button variant='ghost' onClick={logout}>
                                <LogOut></LogOut> 로그아웃
                            </Button>
                            :<Button variant='ghost' onClick={() => router.push('/login')}>
                                <LogIn></LogIn> 로그인
                            </Button>
                    }
                </div>
            </div>
      </header>
    )
}