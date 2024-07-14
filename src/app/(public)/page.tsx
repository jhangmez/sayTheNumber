import SpeechtoText from '@/components/speech'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between p-24'>
      <p className='lg:text-9xl md:text-8xl text-6xl text-light-primary dark:text-dark-primary font-semibold'>
        140,540
      </p>
      <SpeechtoText />
    </main>
  )
}
