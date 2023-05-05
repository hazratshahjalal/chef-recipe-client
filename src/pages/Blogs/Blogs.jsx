import React from 'react';
import "./Blogs.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, } from '@fortawesome/free-solid-svg-icons';



const Blogs = () => {

  return (
    <div className="bg-white py-20">
      {
        <div className="text-center text-dark"><button className='btn btn-outline-sucess text-success'> <FontAwesomeIcon icon={faDownload} className="mx-2" />Download PDF</button></div>
      }
      <div className="m mx-auto px-20">
        <h2 className="text-[#1A2952] leading-normal sm:text-3xl xsm:text-xl md:text-4xl lg:text-6xl text-center font-bold mb-5">
          My Blogs
        </h2>
        <div className="h-2 w-20 bg-yellow-400 rounded-tl-2xl rounded-br-2xl mx-auto mb-10"></div>
        <div className="mx-auto w-100">
          <ul className="flex items-start  justify-center gap-8 flex-wrap w-full  mx-auto">
            <li className="w-2/5 bg-slate-50 px-5 py-5 rounded-lg shadow-lg my-2">
              <p className="text-xl text-success font-medium leading-6 text-gray-900">
                1. The differences between uncontrolled and controlled components:
              </p>
              <p className="mt-2">
                <p className='text-dark'>
                  In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.
                </p>
                <p className='text-dark'>
                  They use a ref to access the DOM element's current value and update the state accordingly.

                  A controlled functional component is a component that receives its current value and update callback via props. For example, consider a simple form that accepts an email address and a password:
                </p>
              </p>
            </li>
            <li className="w-2/5 bg-slate-50 px-5 py-5 rounded-lg shadow-lg my-2">
              <p className="text-xl text-success font-medium leading-6 text-gray-900">
                2. How to validate React props using PropTypes?
              </p>
              <p className="mt-2">
                <p className='text-dark'>
                  To validate React props using PropTypes, we need to install the prop-types library, import it, and define the propTypes property on our component class, specifying the expected data types and shapes for each prop.
                </p>
              </p>
            </li>
            <li className="w-2/5 bg-slate-50 px-5 py-5 rounded-lg shadow-lg my-2">
              <p className="text-xl text-success font-medium leading-6 text-gray-900">
                3. The difference between nodejs and express js.
              </p>
              <p className="mt-2">
                <p className='text-dark'>
                  Express JS is a Node. js framework designed to build API's web applications cross-platform mobile apps quickly and make node js easy.
                  Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".
                </p>
              </p>
            </li>
            <li className="w-2/5 bg-slate-50 px-5 py-5 rounded-lg shadow-lg my-2">
              <p className="text-xl text-success font-medium leading-6 text-gray-900">
                4. What is a custom hook, and why we will create a custom hook?
              </p>
              <p className='text-dark'>
                Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem. But what if there is no such library with hooks that can be used? This problem is solved by using custom React JS hooks.

                A custom hook is a special JavaScript function whose name starts with ‘use’ and can be used to call other hooks.
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