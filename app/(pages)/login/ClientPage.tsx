'use client'

import AppShell from "@/components/grid/appShell"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import Image from "next/image"
import KakaoLoginButton from "@/components/brand/kakaoLoginButton"

export default function ClientPage() {
    const router = useRouter()

    

    return (
        <AppShell>
            <div className="flex justify-center pt-8">
                <div className="p-12 space-y-8 flex flex-col border-1 shadow-xs">
                    <Button onClick={() => router.push('/login/email')}> 
                        <div className="text-2xl font-semibold"> 이메일로 로그인 </div>
                    </Button>
                    
                    <KakaoLoginButton></KakaoLoginButton>
                    
                    <Button> 네이버 로그인 </Button>
                </div>
            </div>
        </AppShell>
    )
}