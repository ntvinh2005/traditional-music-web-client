/* This example requires Tailwind CSS v2.0+ */
import Navbar from "./Navbar";

export default function Landing() {
  return (
    <div className="relative lg:overflow-hidden bg-white h-screen">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon
              points="50,0 100,0 50,100 0,100"
              className="bg-yellow-100"
            />
          </svg>

          <Navbar />

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Học online về nhạc cụ</span>{" "}
                <span className="block text-yellow-600 xl:inline">
                  truyền thống
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Với sứ mệnh đưa nhạc cụ truyền thống, nghệ thuật lâu đời từ ngàn
                xưa, đến gần hơn với khán giả và người chơi nhạc thời hiện đại
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="/home"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-yellow-600 px-8 py-3 text-base font-medium text-white hover:bg-yellow-700 md:py-4 md:px-10 md:text-lg hover:text-white"
                  >
                    Bắt đầu
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/about"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-yellow-100 px-8 py-3 text-base font-medium text-yellow-700 hover:bg-yellow-200 md:py-4 md:px-10 md:text-lg"
                  >
                    Tổng quan
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        {window.innerWidth < 1000 ? (<img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src="https://media.istockphoto.com/photos/piano-interior-picture-id1288269708?b=1&k=20&m=1288269708&s=170667a&w=0&h=OtfH-AcA2FxR5yUrWA6O7yc1QpuEPxNaZ_M530kMkAs="
          alt=""
        />):(
          <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src="https://nhactruyenthong.vn/wp-content/uploads/2019/08/DAN-TRANH-03.jpg"
          alt=""
        />
        )}
      </div>
    </div>
  );
}
