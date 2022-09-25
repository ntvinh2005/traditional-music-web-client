import React, { useState, useContext } from "react";
import { CourseContext } from "../../contexts/CourseContext";
import { AuthContext } from "../../contexts/AuthContext";
import { storage } from "../../firebase"

const CreateCourse = () => {
  const { addCourse } = useContext(CourseContext);
  const {
    authState: { user },
  } = useContext(AuthContext);

  const [header, setHeader] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleUpload = async (event) => {
    const file = event.target.files[0];

    let filePath = user._id + "/course/" + file.name;
    const uploadTask = storage.ref(filePath).put(file);

    uploadTask.then(() => {
      uploadTask.snapshot.ref.getDownloadURL().then((url) => {
        setImgUrl(url);
      });
    });
  };

  const handleSubmit = async () => {
    await addCourse({
      title: header,
      description: description,
      imgUrl: imgUrl,
    });
    console.log(header);
  };

  return (
    <div>
      <div>
        <div class="md:grid md:grid-cols-3 md:gap-6 mb-3 mt-3 ">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0 ml-3">
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                Phòng sáng tạo
              </h3>
              <p class="mt-1 text-sm text-gray-600">
                Trở thành người sáng tạo khóa học ngay tại đây.
              </p>
            </div>
          </div>
          <div class="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={handleSubmit}>
              <div class="shadow sm:overflow-hidden sm:rounded-md">
                <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div class="grid grid-cols-3 gap-6">
                    <div class="col-span-3 sm:col-span-2">
                      <label
                        for="title"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Tựa đề khóa học
                      </label>
                      <div class="mt-1 flex rounded-md shadow-sm">
                        <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                          Khóa học
                        </span>
                        <input
                          type="text"
                          name="title"
                          id="title"
                          class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                          placeholder="Nhạc cụ A"
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
                      Mô tả
                    </label>
                    <div class="mt-1">
                      <textarea
                        id="description"
                        name="description"
                        rows="3"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                        placeholder="Đây là một khóa học rất vui"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                      ></textarea>
                    </div>
                    <p class="mt-2 text-sm text-gray-500">
                      Tạo mô tả khóa học của bạn ở đây. Có thể bao gồm cả liên
                      kết url.{" "}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Ảnh
                    </label>
                    <div className="mt-1 flex items-center">
                      <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-yellow-100">
                        {imgUrl === "" ? (
                        <svg
                          className="h-full w-full text-yellow-900"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        ):(
                          <img src={imgUrl} alt=""></img>
                        )}
                        
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Ảnh minh họa
                    </label>
                    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-yellow-400"
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
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="bg-yellow-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
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
    </div>
  );
};

export default CreateCourse;
