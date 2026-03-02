import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

type SearchBarProps = {
  placeholder?: string
}

function SearchBar({ placeholder = 'Buscar...' }: SearchBarProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') ?? '')

  useEffect(() => {
    setQuery(searchParams.get('q') ?? '')
  }, [searchParams])

  const updateResourcesSearch = (nextValue: string, replaceHistory = true) => {
    const normalized = nextValue.trim()

    navigate(
      {
        pathname: '/resources',
        search: normalized ? `?q=${encodeURIComponent(normalized)}` : '',
      },
      { replace: replaceHistory },
    )
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    updateResourcesSearch(query, false)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value
    setQuery(nextValue)

    if (location.pathname !== '/resources' || nextValue.length > 0 || searchParams.has('q')) {
      updateResourcesSearch(nextValue)
    }
  }

  return (
    <form
      className="flex h-[46px] w-full items-center gap-3 rounded-full border-2 border-[#2f4f77] bg-slate-50 px-4 md:h-[52px] md:w-full lg:w-[300px] lg:border-[3px]"
      role="search"
      onSubmit={handleSubmit}
    >
      <span
        className="inline-flex h-7 w-7 p-1 items-center justify-center rounded-full bg-[#2f4f77] text-white md:h-[34px] md:w-[34px]"
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>

      <input
        type="search"
        placeholder={placeholder}
        aria-label="Buscar recursos"
        value={query}
        onChange={handleChange}
        className="min-w-0 flex-1 border-none bg-transparent text-base text-[#304766] outline-none placeholder:text-[#b6bcc7]"
      />
    </form>
  )
}

export default SearchBar