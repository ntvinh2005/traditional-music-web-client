import React, { useState, useContext } from "react";
import { CourseContext } from "../../contexts/CourseContext";

const CreateCourse = () => {
  const { addCourse } = useContext(CourseContext);

  const [header, setHeader] = useState("");
  const [description, setDescription] = useState("")

  const handleSubmit = async () => {
    await addCourse({ 
      title: header,
      description: description});
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
            <form>
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
    </div>
  );
};

export default CreateCourse;
