import { Tweet } from "react-tweet";
import { ReactTweet, TweetComponent } from "./components/tweet";

export default function Page() {
  return (
    <section>
      <div className='mb-4'>
        <p className="mb-4 font-light md:text-base text-[15px] leading-relaxed dark:text-[#a3a3a3] text-[#52525b]">
        Welcome to my personal blog. This website chronicles my journey in learning Quant Dev and will feature content related to finance, mathematics, and technology.
        </p>
        <p className="mb-4 font-light md:text-base text-[15px] leading-relaxed dark:text-[#a3a3a3] text-[#52525b]">
        You can read about what I have learned in the &apos;blogs&apos; section. Please note that what I have studied and written may not always be accurate, so remain skeptical of what you read. I also welcome feedback if you spot any errors in my blog posts.
        </p>
        <p className="mb-4 font-light md:text-base text-[15px] leading-relaxed dark:text-[#a3a3a3] text-[#52525b]">
        I also plan to upload books that I have read and recommend. You can find them in the &apos;Books&apos; section.
        </p>
        <p className="mb-4 font-light md:text-base text-[15px] leading-relaxed dark:text-[#a3a3a3] text-[#52525b]">
        There is also a &apos;Projects&apos; section, though I&apos;m not sure what to fill it with just yet. I’m still very new to this field.
        </p>
        <p className="mb-4 font-light md:text-base text-[15px] leading-relaxed dark:text-[#a3a3a3] text-[#52525b]">
        Lastly, I hope you can learn something new from this page. Cheers!
        </p>
      </div>
    </section>
  )
}
