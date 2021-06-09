import React from "react";

const Header = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          CHOOSE BEST FOR YOUR CHILD
            <br className="hidden lg:inline-block" />
            LET YOUR CHILD GROW
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam asperiores veniam consequatur rerum fugit mollitia provident eligendi repellendus, dolores consequuntur ipsum sed culpa neque explicabo eius odit accusamus atque id possimus ex quia facilis? Modi exercitationem nihil minus non rerum iure vitae. Molestiae reprehenderit vel animi. Quibusdam expedita placeat ad!
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Know More
            </button>
          
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://images.theconversation.com/files/282674/original/file-20190704-51292-t04p4c.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
