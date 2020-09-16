import React from 'react'
import Link from 'next/link'

const MainLink = ({url, text}) => {
  return (
    <div>
      <Link href={url}>
            <a className="minimal_page">
              <div className="min-page_btn">{text}</div>
            </a>
          </Link>
    </div>
  )
}

export default MainLink
