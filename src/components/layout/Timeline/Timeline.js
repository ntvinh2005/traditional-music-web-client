import React from "react";
import "./Timeline.css";
import TimelineItem from "./TimelineItem";

const Timeline = () => {
  const timelineData = [
    {
      text: "Website cung cấp thông tin và khoá học cơ bản về các loại nhạc cụ truyền thống",
      date: "Tháng 09/2017",
      category: {
        tag: "Hoàn thành",
        color: "#018f69",
      },
      link: {
        url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
        text: "Đọc thêm",
      },
    },
    {
      text: "Chuyến đi thực tế tìm hiểu thực trạng nhạc cụ truyền thống trong cuộc sống",
      date: "Tháng 9/2017",
      category: {
        tag: "Sắp tới",
        color: "#018f69",
      },
      link: {
        url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
        text: "Đọc thêm",
      },
    },
    {
        text: "Dạy về nhạc cụ truyền thống cho các em học sinh",
        date: "Tháng 10/2017",
        category: {
          tag: "Sắp tới",
          color: "#018f69",
        },
        link: {
          url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
          text: "Đọc thêm",
        },
      },
      {
        text: "Luyện tập cho buổi biểu diễn nhạc cụ truyền thống",
        date: "Tháng 10/2017",
        category: {
          tag: "Sắp tới",
          color: "#018f69",
        },
        link: {
          url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
          text: "Đọc thêm",
        },
      },
      {
        text: "Biểu diễn trong ban nhạc nhạc cụ truyền thống",
        date: "Tháng 10/2017",
        category: {
          tag: "Sắp tới",
          color: "#018f69",
        },
        link: {
          url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
          text: "Đọc thêm",
        },
      },
  ];

  return (
    <>
      {timelineData.length > 0 && (
        <div className="timeline-container">
          {timelineData.map((data, idx) => (
            <TimelineItem data={data} key={idx} />
          ))}
        </div>
      )}
    </>
  );
};

export default Timeline