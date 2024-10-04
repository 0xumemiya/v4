import Link from 'next/link'
import { formatDate, getBlogPosts } from '@/app/blog/utils'
import { cn } from '@/lib/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
              <div>
                <p className="tracking-tight">
                  <span className='border-b'>
                  {post.metadata.title}
                  </span>
                </p>
                <p className="text-neutral-600 text-sm font-light dark:text-neutral-500 w-[210px] tabular-nums">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
              </div>
          </Link>
        ))}
    </div>
  )
}
