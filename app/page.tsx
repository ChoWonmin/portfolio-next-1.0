'use client'

import Header from "@/components/grid/header"
import TranslateScroll from "@/components/scroll/translateScroll"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  const projects = [
    {
      title: '강아지 밥주기',
      info: '자동으로 강아지 밥 주는 IOT',
      color: 'bg-red-100'
    },
    {
      title: '맛집 추천 어플',
      info: '우리동내 맛집을 알려주는 서비스',
      color: 'bg-blue-100'
    },
    {
      title: 'RPG 게임',
      info: '최고로 재미있는 RPG 게임',
      color: 'bg-green-100'
    }
  ]
  
  return (
    <div className="">
      <Header></Header>
            
      <div className="space-y-12">
        <section className="w-full flex justify-center bg-slate-200 h-[720px]">
          <div className="w-full max-w-[1280px] bg-red-200 space-y-10 flex items-end">
            <div className="w-80 text-4xl font-semibold bg-blue-200 break-keep py-10">
              작은 기술이라도 선하게 쓰이면 세상이 달라진다는 믿음. 카카오임팩트가 존재하는 이유입니다.
            </div>
            <div className="flex-auto"></div>
            <div className="w-200 h-full bg-amber-300">
              이미지 예시
            </div>
          </div>
        </section>

        {/* <section className="w-full flex justify-center bg-slate-200 h-[720px]">
          <div className="w-full max-w-[1280px] relative">
            <div className="w-80 text-4xl font-semibold break-keep py-10 absolute bottom-[8px] z-10">
              작은 기술이라도 선하게 쓰이면 세상이 달라진다는 믿음. 카카오임팩트가 존재하는 이유입니다.
            </div>
            <div className="absolute right-0">
              <div className="relative w-[800px] h-[720px]">
                <Image 
                  src={"/images/sample01.png"} alt={"sample01"}
                  fill
                  className="object-cover object-center"
                >
                </Image>
              </div>
            </div>
          </div>
        </section> */}
        
        <section className="w-full flex justify-center">
          <div className="w-full max-w-[1280px] space-y-4">
            <TranslateScroll items={projects}>
              <div className="text-4xl font-bold">
                더 나은 미래를 만드는 나의 기술 이야기
              </div>
            </TranslateScroll>
          </div>
        </section>
      </div>
    </div>
  )
}