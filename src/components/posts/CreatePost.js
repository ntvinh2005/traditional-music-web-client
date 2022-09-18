import React, { useState, useContext, useEffect } from "react";
import { PostContext } from "../../contexts/PostContext";
import { AuthContext } from "../../contexts/AuthContext";
import { CourseContext } from "../../contexts/CourseContext";
import { useParams } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import Navbar from "../layout/Navbar";

import { storage } from "../../firebase";
import ReactPlayer from "react-player";

const CreatePost = () => {
  const { courseId } = useParams();

  const {
    authState: { user },
  } = useContext(AuthContext);

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
  const [videoUrl, setVideoUrl] = useState("");

  const handleUpload = async (event) => {
    const file = event.target.files[0];

    let filePath = user._id + "/post/" + file.name;
    const uploadTask = storage.ref(filePath).put(file);

    uploadTask.then(() => {
      uploadTask.snapshot.ref.getDownloadURL().then((url) => {
        setVideoUrl(url);
        console.log(videoUrl);
      });
    });
  };

  const handleSubmit = async () => {
    const newPost = {
      title: header,
      content: html,
      videoUrl: videoUrl,
    };
    await createPost(courseId, newPost);
    console.log(header, html);
  };

  return (
    <div>
      <Navbar />
      <br/>
      <br/>
      <div class="md:grid md:grid-cols-3 md:gap-6 mb-3 mt-3 ">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0 ml-3">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Phòng sáng tạo
            </h3>
            <p class="mt-1 text-sm text-gray-600">
              Sáng tạo bài học cho khóa học của bạn ngay tại đây.
            </p>
            <br />
            <br />
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
                    Tạo nội dung bài học của bạn ở đây. Có thể bao gồm cả liên
                    kết đến hình ảnh và video từ Internet.{" "}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    {videoUrl === "" ? (
                      <>
                        Video được tải lên sẽ được hiển thị tại đây. Giải trí
                        bằng video bên dưới trong lúc đợi video hướng dẫn được
                        tải lên.
                      </>
                    ) : (
                      <>
                        Video của bạn đã được tải lên. Hoàn thành biểu mẫu và
                        nhấn Save
                      </>
                    )}
                  </label>
                  <div className="mt-1 flex items-center">
                    <span className="inline-block overflow-hidden rounded-lg bg-gray-100">
                      <div className="mx-auto md:p-6 sm:p-0 rounded-lg">
                        {videoUrl === "" ? (
                          <ReactPlayer
                            url="https://www.youtube.com/watch?v=oUFJJNQGwhk"
                            playing={true}
                            controls={false}
                            className="w-full h-auto rounded-lg"
                          />
                        ) : (
                          <video controls className="w-full h-auto rounded-lg">
                            <source src={videoUrl} />
                          </video>
                        )}
                      </div>
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Video hướng dẫn
                  </label>
                  <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-medium text-yellow-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-yellow-500 focus-within:ring-offset-2 hover:text-yellow-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            onChange={handleUpload}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        Video length up to 10 minute
                      </p>
                    </div>
                  </div>
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
