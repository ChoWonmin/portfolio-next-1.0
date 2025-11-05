'use client'

import AppShell from "@/components/grid/appShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Api from "@/lib/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from '@/components/system/toast'
import { getErrorMessage } from "@/lib/apiHelper";
import { setCookie } from "cookies-next";

export default function LoginEmailPage() {
    const router = useRouter()

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const login = async () => {
        try {
            const accessToken = await Api().loginByEmail(email, password)
            setCookie('accessToken', accessToken)
            router.push('/')
        } catch (error) {
            toast.error(getErrorMessage(error))
        }
        
    }

    return (
        <AppShell>
            <div className="space-y-12">
                <div className="text-2xl font-bold"> 이메일로 로그인 </div>
                <div>
                    <div> 이메일 </div>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)}></Input>
                </div>
                <div>
                    <div> 비밀번호 </div>
                    <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
                </div>
                <Button onClick={login}> 로그인 </Button>

                <div>
                    <div> 아직 계정이 없으신가요? </div>
                    <Button variant='link' onClick={() => router.push('/register')}> 회원가입 </Button>
                </div>
            </div>
        </AppShell>
    )
}