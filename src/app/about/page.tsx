import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="bg-slate-950 text-white max-w-screen-xl mx-auto p-4">
      <div className="mx-auto max-w-4xl text-center mt-16">
        <h1 className=" text-lg font-semibold leading-7 text-gradient">
          About Us
        </h1>
        <p className="mt-2 text-4xl tracking-tight font-extrabold  text-white">
          Whether it's just you, or your entire team - we've got you covered.
        </p>
        <div className="w-[22rem] md:w-[40rem] mx-auto h-2 mt-4 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-slate-950 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-slate-300">
          Choose the product that works best
        </p>{" "}
      </div>
      <div className="sm:flex items-center max-w-screen-xl">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
              About us
            </span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
              About <span className="text-indigo-600">Our Company</span>
            </h2>
            <p className="text-slate-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              commodi doloremque, fugiat illum magni minus nisi nulla numquam
              obcaecati placeat quia, repellat tempore voluptatum.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Empowering Businesses Globally
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Our platform is trusted by organizations worldwide to boost
            productivity, streamline operations, and enhance customer
            experiences.
          </p>
        </div>
        <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col bg-slate-900 p-8">
            <dt className="text-sm font-semibold leading-6 text-slate-100">
              Active Users
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gradient">
              12,345
            </dd>
          </div>
          <div className="flex flex-col bg-slate-900 p-8">
            <dt className="text-sm font-semibold leading-6 text-slate-100">
              Transactions Today
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gradient">
              1.23M
            </dd>
          </div>
          <div className="flex flex-col bg-slate-900 p-8">
            <dt className="text-sm font-semibold leading-6 text-slate-100">
              Total Revenue
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gradient">
              $5.6B
            </dd>
          </div>
          <div className="flex flex-col bg-slate-900 p-8">
            <dt className="text-sm font-semibold leading-6 text-slate-100">
              Happy Customers
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gradient">
              98%
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default page;
