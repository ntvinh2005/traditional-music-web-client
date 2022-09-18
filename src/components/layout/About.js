import React from "react";
import Navbar from "./Navbar";
import Timeline from "./Timeline/Timeline"

const About = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <div>
        <h1 className="font-bold tracking-tight text-gray-900 text-4xl text-center">
          <span className="block xl:inline">Chúng tôi là</span>{" "}
          <span className="block text-yellow-600 xl:inline">The Resonance</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:max-w-xl sm:text-l md:mt-5 md:text-xl mx-auto border-solid border-2 rounded-md border-yellow-900 p-4">
          Với mong muốn đóng góp vào những nỗ lực bảo tồn âm nhạc truyền thống,
          CLB The Resonance được thành lập, thu hút nhiều thành viên có niềm yêu
          thích và đam mê với nhạc cụ truyền thống của dân tộc. Với đội ngũ trẻ
          trung, năng động, The Resonance hứa hẹn mang tới nhiều sự kiện đặc
          sắc, thú vị nhằm mang âm nhạc truyền thống tới gần hơn với các khán
          giả trẻ, cho thấy rằng nhạc cụ dân tộc không hề già nua, lỗi mốt, và
          góp phần bảo vệ những nét giá trị văn hoá vô cùng độc đáo của đất nước
          mình.
        </p>
      </div>
      <div className="container mx-auto px-10 text-center">
        <br />
        <br />
        <h1>Mục tiêu của chúng tôi</h1>
        <div className="w-40 mx-auto my-8">
          <hr />
        </div>
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <figure className="card md:flex bg-yellow-100 rounded-xl p-8 md:p-0 dark:bg-yellow-800">
            <img
              className="w-24 h-24 rounded-full mx-auto aspect-square md:ml-3"
              src="https://ansmail.com/wp-content/uploads/2021/10/cho-thue-nhac-cu-dan-toc-1-e1633766270773.jpg"
              alt=""
            />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <figcaption className="font-medium">
                <div className="text-yellow-700 dark:text-yellow-500 text-center">
                  Giáo dục
                </div>
              </figcaption>
              <blockquote>
                <p className="text-lg font-medium">
                  Tạo điều kiện cho nhiều người trẻ nâng cao hiểu biết về nhạc
                  cụ dân tộc, lắng nghe âm thanh của nhạc cụ và học cách chơi
                  nhạc cụ.
                </p>
              </blockquote>
            </div>
          </figure>
          <figure className="card md:flex bg-yellow-100 rounded-xl p-8 md:p-0 dark:bg-yellow-800">
            <img
              className="w-24 h-24 rounded-full mx-auto aspect-square md:ml-3"
              src="https://file1.dangcongsan.vn/DATA/0/2016/02/ca_tru_clb_thanglong_radiovietnam-11_33_40_059.jpg"
              alt=""
            />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <figcaption className="font-medium">
                <div className="text-yellow-700 dark:text-yellow-500 text-center">
                  Quảng bá
                </div>
              </figcaption>
              <blockquote>
                <p className="text-lg font-medium">
                  Khơi dậy sự quan tâm, yêu thích với nhạc cụ dân tộc và âm nhạc
                  truyền thống của thế hệ trẻ nói riêng và khán giả đại chúng
                  nói chung.
                </p>
              </blockquote>
            </div>
          </figure>
          <figure className="card md:flex bg-yellow-100 rounded-xl p-8 md:p-0 dark:bg-yellow-800">
            <img
              className="w-24 h-24 rounded-full mx-auto aspect-square md:ml-3"
              src="https://daihoc.fpt.edu.vn/wp-content/uploads/2022/04/dai-hoc-fpt-32.jpeg"
              alt=""
            />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <figcaption className="font-medium">
                <div className="text-yellow-700 dark:text-yellow-500 text-center">
                  Giao lưu, học hỏi
                </div>
              </figcaption>
              <blockquote>
                <p className="text-lg font-medium">
                  Tạo ra sân chơi bổ ích cho những bạn trẻ có chung niềm đam mê
                  với nhạc cụ dân tộc có thể cùng nhau học hỏi và nâng cao kỹ
                  năng.
                </p>
              </blockquote>
            </div>
          </figure>
          <figure className="card md:flex bg-yellow-100 rounded-xl p-8 md:p-0 dark:bg-yellow-800">
            <img
              className="w-24 h-24 rounded-full mx-auto aspect-square md:ml-3"
              src="https://nld.mediacdn.vn/thumb_w/600/2021/1/15/son3904s-1610674265189474871856.jpg"
              alt=""
            />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <figcaption className="font-medium">
                <div className="text-yellow-700 dark:text-yellow-500 text-center">
                  Giữ gìn, bảo tồn
                </div>
              </figcaption>
              <blockquote>
                <p className="text-lg font-medium">
                  Góp phần giữ gìn và phát huy âm nhạc truyền thống - nét bản
                  sắc của dân tộc.
                </p>
              </blockquote>
            </div>
          </figure>
          <br />
          <br />
        </main>
        <h1>Hoạt động sắp tới của chúng tôi</h1>
        <div className="w-40 mx-auto my-8">
          <hr />
        </div>
        <Timeline/>
      </div>
    </div>
  );
};

export default About;
