'use client'

import { Card } from "@/components/ui/card"
import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"

export function SplineSceneBasic() {
  return (
    <Card className="relative h-[680px] w-full overflow-hidden border-white/10 bg-black/[0.96] md:h-[500px]">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        size={260}
      />

      <div className="flex h-full flex-col md:flex-row">
        <div className="relative z-10 flex flex-1 flex-col justify-center p-8 md:p-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
            Spline + React
          </p>
          <h1 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
            Interactive 3D
          </h1>
          <p className="mt-4 max-w-lg text-neutral-300">
            Bring your UI to life with beautiful 3D scenes. Create immersive
            experiences that capture attention and enhance your design.
          </p>
        </div>

        <div className="relative min-h-[330px] flex-1 md:min-h-0">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="h-full w-full"
          />
        </div>
      </div>
    </Card>
  )
}
