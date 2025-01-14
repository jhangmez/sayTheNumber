import { Spinner } from '@nextui-org/spinner'

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <main className='min-w-screen min-h-screen'>
      <div className='flex flex-col justify-center items-center h-screen bg-light-surface dark:bg-dark-surface'>
        <section className='w-fit h-14 justify-start items-center gap-[5px] inline-flex'>
          <div>
            <span className='text-light-onSurface dark:text-dark-onSurface text-2xl font-bold leading-[44px]'>
              jhan
            </span>
            <span className='text-light-primary dark:text-dark-primary text-2xl font-bold leading-[44px]'>
              gmez
            </span>
          </div>
        </section>
        <div className='container flex flex-col items-center'>
          <Spinner color='success' />
          <p className='text-light-onBackground dark:text-dark-onBackground mt-4'>
            Cargando página...
          </p>
        </div>
      </div>
    </main>
  )
}
