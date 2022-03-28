import { useState, useMemo } from 'react';
import Link from "next/link";
import { useRouter } from 'next/router'
import classNames from 'classnames'

const NavBar = () => {
  const router = useRouter()
  const pathname = useMemo(() => {
    return router.pathname
  }, [router])
  const getClassNames = (path: string) => {
    return classNames(
      ['hover:text-sky-500',  'dark:hover:text-sky-400'],
      {
        'text-sky-500': pathname === path,
        'dark:hover:text-sky-400': pathname === path
      }
    )
  }

  const [theme, setTheme] = useState('')
  const onToggleTheme = (theme: string) => {
    const html = document.querySelector('html');
    if(html) {
      setTheme(theme)
      html.className = theme;
    }
  }

  const goGitHub = () => {
    window.open('https://github.com/lfb0728')
  }

  const [isOpen, setOpen] = useState(false)
  const toggleNavBar = () => {
    setOpen(!isOpen)
  }

  return (
    <header className="header">
      <button className="sm:hidden">
        <i 
          className={
            classNames(
              ['iconfont', 'icon-mianbaoxie', 'text-2xl'],
              {
                'hidden': isOpen
              }
            )
          }
          onClick={toggleNavBar}
        />
        <i 
          className={
            classNames(
              ['iconfont', 'icon-guanbi', 'text-2xl'],
              {
                'hidden': !isOpen
              }
            )
          }
          onClick={toggleNavBar}
        />
      </button>
      <div className="ml-5 mr-7">
        <Link href="/" passHref>
          <span className="cursor-pointer">
            <i className="iconfont icon-shuben text-2xl text-sky-500"></i>
          </span>
        </Link>
      </div>
      <nav 
        className={
          classNames('nav-wrap', {
            'hidden': !isOpen,
            'sm:flex': !isOpen
          })
        }
      >
        <ul className="nav-bar">
          <li className="px-3 py-2 sm:p-0">
            <Link href="/article">
              <a
                className={getClassNames('/article')}
              >
                文章
              </a>
            </Link>
          </li>
          {/* <li className="px-3 py-2 sm:p-0">
            <Link href='/category'>
              <a 
                className={getClassNames('/category')}
              >
                分类
              </a>
            </Link>
          </li>
          <li className="px-3 py-2 sm:p-0">
            <Link href='/about'>
              <a 
                className={getClassNames('/about')}
              >
                关于
              </a>
            </Link>
          </li> */}
        </ul>
        <div className="search-wrap">
          <input
            className="search-input"
            type="text"
            placeholder="搜索"
          />
        </div>
      </nav>
      <div className="settings-wrap">
        <div>
          <span 
            className="text-sky-600 dark:hidden cursor-pointer" 
            onClick={() => onToggleTheme('dark')}
          >
            <i className="iconfont icon-taiyang text-xl"></i>
          </span>
          <span 
            className="text-sky-600 hidden dark:inline cursor-pointer" 
            onClick={() => onToggleTheme('')}
          >
            <i className="iconfont icon-yueliang- text-xl"></i>
          </span>
        </div>
        <div className="ml-6 hidden sm:block">
          <span 
            className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
            onClick={goGitHub}
          >
            <i className="iconfont icon-github-fill text-xl cursor-pointer"></i>
          </span>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
