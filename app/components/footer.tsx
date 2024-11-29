import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Github } from "lucide-react"
import Link from "next/link"

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t">
          <div className="space-y-4 mt-6">
            {/* <p className="font-light">Find me on:</p> */}
            {/* <div className="flex">
              <Link className={cn(
                buttonVariants({variant: 'link', className: 'px-0'}),
                'px-0'
              )} href="https://x.com/0xumemiya">
                <div className="flex items-start space-x-3">
                <span className="font-light underline">
                    X (Twitter)
                </span>
                </div>
              </Link>
              <Link className={cn(
                buttonVariants({variant: 'link'}),

              )} href="https://github.com/0xumemiya">
                <div className="flex items-start space-x-3">
                  <div className='w-3 h-3 relative'>
                  </div>
                  <span className="font-light underline">
                    Github
                  </span>
                </div>
              </Link>
            </div> */}
            <p className="font-light">
              My inbox is always open. Whether you have a question or just want to say &quot;hi&quot;,
              I will try my best to get back to you!
            </p>
          </div>
          <div className="pb-7">
            <div>
              <p className="mt-8 text-neutral-600 text-[13px] dark:text-neutral-300">
                © {new Date().getFullYear()} umemiya
              </p>
            </div>
          </div>
        </footer>
  )
}
