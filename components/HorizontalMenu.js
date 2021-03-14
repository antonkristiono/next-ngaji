import Link from 'next/link'

export default function HorizontalMenu() {
    return (
        <div>
          <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Link href="/">
                      <h2 className=" text-white">Ngaji</h2>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-row-reverse text-white">
                  <Link href="/SejarahAlQuraan">
                    <div>Al Quraan</div>
                  </Link>
                  {/* <div>2</div> */}
                  {/* <div>3</div> */}
                </div>
              </div>
            </div>
          </nav>
        </div>
    )
}
