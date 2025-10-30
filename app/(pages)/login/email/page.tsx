'use client'

import AppShell from "@/components/grid/appShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginEmailPage() {
    const router = useRouter()

    const [ token, setToken ] = useState('')

    return (
        <AppShell>
            <div className="space-y-12">
                <div className="text-2xl font-bold"> 이메일로 로그인 </div>
                <div>
                    <div> 이메일 </div>
                    <Input></Input>
                </div>
                <div>
                    <div> 비밀번호 </div>
                    <Input></Input>
                </div>
                <Button> 로그인 </Button>

                <div>
                    토큰 값 : { token }
                </div>

                <div>
                    <div> 아직 계정이 없으신가요? </div>
                    <Button variant='link' onClick={() => router.push('/register')}> 회원가입 </Button>
                </div>
            </div>
        </AppShell>
    )
}