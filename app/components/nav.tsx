import Link from 'next/link'

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blogs',
  },
  // '/book': {
  //   name: 'Books',
  // },
  // '/project': {
  //   name: 'Projects',
  // },
}

export function Navbar() {
  return (
    <nav
      className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
      id="nav"
    >
      <div className="flex flex-row space-x-0 pr-10">
        {Object.entries(navItems).map(([path, { name }], index) => {
          return (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
            >
              <span className='border-b border-gray-500'><span className='text-gray-500'>{index + 1}</span>. {name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
