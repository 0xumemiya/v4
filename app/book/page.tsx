export const metadata = {
  title: 'Book',
  description: 'Books I have read and recommend',
}

export default function Page() {
  return (
    <section>
      <div className='border-b mb-4'>
        <h1 className="font-semibold md:text-4xl text-2xl md:mb-8 mb-4 tracking-tighter">Books</h1>
        <p className="mb-4 font-light md:text-base text-[15px] leading-relaxed dark:text-[#a3a3a3] text-[#52525b]">Books I have read and recommend.</p>
      </div>
      <div>
        <p className="mb-4 font-light md:text-base text-[15px] leading-relaxed dark:text-[#a3a3a3] text-[#52525b]">
          For now, there is no book that I can recommend to you. I&apos;m still learning and exploring new things. I hope I can show you something soon.
        </p>
      </div>
    </section>
  )
}
