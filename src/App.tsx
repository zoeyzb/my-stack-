import { SplineSceneBasic } from "@/components/ui/demo"

export default function App() {
  return (
    <main className="min-h-screen bg-[#08090d] px-4 py-8 text-white sm:px-6 md:py-12">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-neutral-500">Zoey's Stack</p>
            <h2 className="text-2xl font-semibold tracking-tight">
              Interactive component demo
            </h2>
          </div>
          <a
            href="/legacy.html"
            className="text-sm text-neutral-400 underline-offset-4 transition hover:text-white hover:underline"
          >
            Open the previous stack guide
          </a>
        </div>

        <SplineSceneBasic />
      </div>
    </main>
  )
}
