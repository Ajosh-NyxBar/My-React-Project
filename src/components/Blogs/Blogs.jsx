import React from "react";
import blogs1 from "../../assets/blogs/blog1.jpg";
import blogs2 from "../../assets/blogs/blog2.jpg";
import blogs3 from "../../assets/blogs/blog3.jpg";
import blogs4 from "../../assets/blogs/blog4.jpg";
import { UpdateFollower } from "react-mouse-follower";

const blogData = [
  {
    id: 1,
    title: "lorem ipsum dolor sit amet",
    img: blogs1,
    link: "#",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. as adnja adqe n dpJSdbh ",
  },
  {
    id: 1,
    title: "lorem ipsum dolor sit amet",
    img: blogs2,
    link: "#",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. as adnja adqe n dpJSdbh ",
  },
  {
    id: 1,
    title: "lorem ipsum dolor sit amet",
    img: blogs3,
    link: "#",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. as adnja adqe n dpJSdbh ",
  },
  {
    id: 1,
    title: "lorem ipsum dolor sit amet",
    img: blogs4,
    link: "#",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. as adnja adqe n dpJSdbh ",
  },
];
const Blogs = () => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="container py-14">
          <h1 className="text-3xl font-bold text-center font-poppins pb-8">
            Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {blogData.map((item) => (
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "black",
                  zIndex: 99999,
                  followSpeed: 0.5,
                  text: "read",
                  textFontSize: "3px",
                  scale: 5,
                }}
              >
                <div
                  key={item.id}
                  className="flex flex-col items-center justify-center gap-6 p-5 max-w-[500px] mx-auto shadow-lg rounded-md 
                bg-white hover:-translate-y-2 duration-300"
                >
                  <img src={item.img} alt="" />
                  <div className="space-y-2">
                    <h1 className="text-xl font-bold font-bolf line-clamp-1">
                      {item.title}
                    </h1>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </UpdateFollower>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
