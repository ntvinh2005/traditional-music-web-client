import React, { useState, useContext, useEffect } from "react";
import { PostContext } from "../../contexts/PostContext";
import { CourseContext } from "../../contexts/CourseContext";
import { useParams } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import Navbar from "../layout/Navbar";

const CreatePost = () => {
  const { courseId } = useParams();

  const {
    getCourse,
    courseState: { courses },
  } = useContext(CourseContext);
  const { createPost } = useContext(PostContext);

  useEffect(() => {
    getCourse(courseId);
  }, []);

  const [header, setHeader] = useState("");
  const [html, setHtml] = useState("");
  const handleSubmit = async () => {
    const newPost = {
      title: header,
      content: html,
    };
    await createPost(courseId, newPost);
    console.log(header, html);
  };

  return (
    <div>
    <Navbar/>
      <div class="md:grid md:grid-cols-3 md:gap-6 mb-3 mt-3 ">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0 ml-3">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Phòng sáng tạo
            </h3>
            <p class="mt-1 text-sm text-gray-600">
              Sáng tạo bài học cho khóa học của bạn ngay tại đây.
            </p>
            <br/>
            <br/>
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Xem trước nội dung bài học của bạn
            </h3>
            <p class="mt-1 text-sm text-gray-600">
              Mã markdown sẽ được dịch và in ra tại đây.
            </p>
            <div>
                <Markdown>{html}</Markdown>
            </div>
          </div>
        </div>
        <div class="mt-5 md:col-span-2 md:mt-0">
          <form>
            <div class="shadow sm:overflow-hidden sm:rounded-md">
              <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
                <div class="grid grid-cols-3 gap-6">
                  <div class="col-span-3 sm:col-span-2">
                    <label
                      for="title"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Tựa đề bài học
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                        Bài học
                      </span>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                        placeholder="Đầu tiên"
                        value={header}
                        onChange={(event) => setHeader(event.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    for="description"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Nội dung
                  </label>
                  <div class="mt-1">
                    <textarea
                      id="description"
                      name="description"
                      rows="3"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                      placeholder="Bài học này rất vui và dễ hiểu."
                      value={html}
                      onChange={(event) => setHtml(event.target.value)}
                    ></textarea>
                  </div>
                  <p class="mt-2 text-sm text-gray-500">
                    Tạo nội dung bài học của bạn ở đây. Có thể bao gồm cả liên kết đến hình ảnh và video từ Internet.
                    {" "}
                  </p>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  class="inline-flex justify-center rounded-md border border-transparent bg-yellow-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
