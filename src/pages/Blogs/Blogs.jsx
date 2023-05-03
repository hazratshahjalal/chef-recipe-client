import React from 'react';
import "./Blogs.css"
const Blogs = () => {
  return (
    <div className="bg-white py-20">
      <div class="m mx-auto px-20">
        <h2 class="text-[#1A2952] leading-normal sm:text-3xl xsm:text-xl md:text-4xl lg:text-6xl text-center font-bold mb-5">
          FAQs
        </h2>
        <div className="h-2 w-20 bg-yellow-400 rounded-tl-2xl rounded-br-2xl mx-auto mb-10"></div>
        <div className="mx-auto w-100">
          <ul class="flex items-start  justify-center gap-8 flex-wrap w-full  mx-auto">
            <li class="w-2/5 bg-slate-50 px-5 py-5 rounded-lg shadow-lg my-2">
              <p class="text-lg font-medium leading-6 text-gray-900">
                1. Difference between authorization and authentication
              </p>
              <p class="mt-2">
                <p class="text-base leading-6 text-gray-500 mb-3">
                  Authentication is the process of verifying the identity of a
                  person or device. A common example is entering a username and
                  password when you log in to a website. Entering the correct
                  login information lets the website know 1) who you are and 2)
                  that it is actually you accessing the website
                </p>
                <p class="text-base leading-6 text-gray-500 mb-3">
                  Authorization is the process of giving someone the ability to
                  access a resource. A good example is house ownership. The
                  owner has full access rights to the property (the resource)
                  but can grant other people the right to access it. You say
                  that the owner authorizes people to access it. This simple
                  example allows us to introduce a few concepts in the
                  authorization context.
                </p>
              </p>
            </li>
            <li class="w-2/5 bg-slate-50 px-5 py-5 rounded-lg shadow-lg my-2">
              <p class="text-lg font-medium leading-6 text-gray-900">
                2. Why we are using firebase?
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
            <li class="w-2/5 bg-slate-50 px-5 py-5 rounded-lg shadow-lg my-2">
              <p class="text-lg font-medium leading-6 text-gray-900">
                3. What other services does firebase provide?
              </p>
              <p class="mt-2">
                <p class="text-base leading-6 text-gray-500">
                  There are many services which Firebase provides, Most useful
                  of them are:
                </p>
                <h5 className="text-lg text-gray-500">* Authentication</h5>
                <h5 className="text-lg text-gray-500">* Firebase Hosting</h5>
                <h5 className="text-lg text-gray-500">* Cloud Firestore</h5>
                <h5 className="text-lg text-gray-500">* Cloud Storage</h5>
                <h5 className="text-lg text-gray-500">* Google Analytics</h5>
                <h5 className="text-lg text-gray-500">* Cloud Messaging</h5>
                <h5 className="text-lg text-gray-500">* many more services</h5>
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