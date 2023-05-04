import React from 'react';
import "./Blogs.css"

const Blogs = () => {
  return (
    <div className="bg-white py-20">
      <div class="m mx-auto px-20">
        <h2 class="text-[#1A2952] leading-normal sm:text-3xl xsm:text-xl md:text-4xl lg:text-6xl text-center font-bold mb-5">
          My Blogs
        </h2>
        <div className="h-2 w-20 bg-yellow-400 rounded-tl-2xl rounded-br-2xl mx-auto mb-10"></div>
        <div className="mx-auto w-100">
          <ul class="flex items-start  justify-center gap-8 flex-wrap w-full  mx-auto">
            <li class="w-2/5 bg-slate-50 px-5 py-5 rounded-lg shadow-lg my-2">
              <p class="text-xl text-success font-medium leading-6 text-gray-900">
                1. The differences between uncontrolled and controlled components:
              </p>
              <p class="mt-2">
                <p class="text-base leading-6 text-gray-500 mb-3">
                  In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.
                </p>
                <p class="text-base leading-6 text-gray-500 mb-3">
                  They use a ref to access the DOM element's current value and update the state accordingly.

                  A controlled functional component is a component that receives its current value and update callback via props. For example, consider a simple form that accepts an email address and a password:
                </p>
              </p>
            </li>
            <li class="w-2/5 bg-slate-50 px-5 py-5 rounded-lg shadow-lg my-2">
              <p class="text-xl text-success font-medium leading-6 text-gray-900">
                2. How to validate React props using PropTypes?
              </p>
              <p class="mt-2">
                <p class="text-base leading-6 text-gray-500">
                  To validate React props using PropTypes, we need to install the prop-types library, import it, and define the propTypes property on our component class, specifying the expected data types and shapes for each prop.
                </p>
              </p>
            </li>
            <li class="w-2/5 bg-slate-50 px-5 py-5 rounded-lg shadow-lg my-2">
              <p class="text-xl text-success font-medium leading-6 text-gray-900">
                3. The difference between nodejs and express js.
              </p>
              <p class="mt-2">
                <p class="text-base leading-6 text-gray-500">
                  Express JS is a Node. js framework designed to build API's web applications cross-platform mobile apps quickly and make node js easy.
                  Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".
                </p>
              </p>
            </li>
            <li class="w-2/5 bg-slate-50 px-5 py-5 rounded-lg shadow-lg my-2">
              <p class="text-xl text-success font-medium leading-6 text-gray-900">
                4. What is a custom hook, and why will you create a custom hook?
              </p>
              <p class="mt-2">
                <p class="text-base leading-6 text-gray-500">
                  Google Firebase offers many features that pitch it as the
                  go-to backend development tool for web and mobile apps. It
                  reduces development workload and time. And it's a perfect
                  prototyping tool. Firebase is simple, lightweight, friendly,
                  and industrially recognized.
                </p>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
import "./Blogs.css"
export default Blogs;