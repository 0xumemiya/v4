import { BlogPosts } from '@/app/components/posts'

export const metadata = {
  title: 'Blogs',
  description: 'just random thoughts.',
}

export default function Page() {
  return (
    <section>
      <BlogPosts />
    </section>
  )
}
