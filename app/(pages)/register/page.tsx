'use client'

import AppShell from "@/components/grid/appShell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { toast } from '@/components/system/toast'
import Api from "@/lib/api"
import { getErrorMessage } from "@/lib/apiHelper"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

interface NicknameMessage {
    status: 'success' | 'error' | 'before'
    message: string
}

export default function RegisterPage() {
    const router = useRouter()

    const [ nickname, setNickname ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ repassword, setRepassword ] = useState('')

    const [ nicknameMessage, setNicknameMessage ] = useState<NicknameMessage>({
        status: 'before',
        message: ''
    })

    const register = async () => {
        try {
            if (nicknameMessage.status !== 'success') {
                throw nicknameMessage.message || '닉네임을 확인해주세요'
            }
    
            if (!email) {
                throw new Error('이메일을 입력해주세요.')
            }
    
            if (!password || !repassword) {
                throw new Error('password를 입력해주세요.')
            }
    
            if (password !== repassword) {
                throw new Error('비밀번호가 일치하지 않습니다.')
            }

            await Api().addUser(nickname, email, password, repassword)
            toast.success('회원가입이 완료되었습니다.')

            router.push('/login/email')
        } catch (error: unknown) {
            const message = getErrorMessage(error)
            toast.error(message)
        }
    }

    const isValidNickname = async (nickname: string) => {
        try {
            if (await Api().isValidNickname(nickname)) {
                setNicknameMessage({
                    status: 'success', message: '사용 가능한 닉네임입니다.'
                })
            }
        } catch (error: unknown) {
            setNicknameMessage({
                status: 'error', message: getErrorMessage(error)
            })
        }
    }

    return (
        <AppShell>
            <div className="space-y-12">
                <div className="text-2xl font-semibold"> 회원가입 </div>
                <div className="space-y-4">
                    <div>
                        <div className="text-xl font-semibold"> 닉네임 </div>
                        <Input value={nickname} onChange={async (e) => {
                            setNickname(e.target.value)
                            await isValidNickname(e.target.value)
                        }}>
                        </Input>
                        {
                            nicknameMessage.status !== 'before' && 
                            <div className={cn('text-red-600', nicknameMessage.status === 'success' && 'text-emerald-600')}>
                                { nicknameMessage.message }
                            </div>
                        }
                    </div>
                    <div>
                        <div className="text-xl font-semibold"> email </div>
                        <Input value={email} onChange={(e) => setEmail(e.target.value)}></Input>
                    </div>
                    <div>
                        <div className="text-xl font-semibold"> password </div>
                        <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)}></Input>
                    </div>
                    <div>
                        <div className="text-xl font-semibold"> password 확인 </div>
                        <Input type="password" value={repassword} onChange={(e) => setRepassword(e.target.value)}></Input>
                        {password !== repassword && <div className="text-red-500 pt-2 font-semibold"> 비민번호가 일치하지 않습니다. </div>}
                    </div>
                    
                </div>
                <Button className="w-full text-xl" size='lg' onClick={() => register()}> 회원가입 </Button>
                
            </div>
        </AppShell>
        
    )
}