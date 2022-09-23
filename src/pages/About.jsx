import React from "react";
import PageWrapper from "../layouts/PageWrapper";
import model from "../images/model.jpg";
import fashion from "../images/fashion.jpg";
import teamMember from "../images/team.jpg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <PageWrapper>
      <section className="bg-[#f9f3f0] py-10">
        <div className="w-11/12 mx-auto">
          <div className="page-heading pt-32">
            <div className="flex items-between">
              <h2 className="text-[40px] font-bold">About Our Store</h2>
              <div>
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-11/12 mx-auto">
          <div className="flex gap-5 my-14">
            <div className="w-5/12">
              <img
                src={fashion}
                alt=""
                className="object-cover h-96 w-full rounded-md"
              />
            </div>
            <div className="w-7/12 flex items-center p-12">
              <div>
                <h2 className="mb-8 text-3xl font-bold">
                  Online shopping includes both buying things online.
                </h2>
                <p>
                  Salesforce B2C Commerce can help you create unified,
                  intelligent digital commerce experiences — both online and in
                  the store.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem deleniti deserunt quos minima impedit, odio laborum
                  veritatis tenetur eos dolorum. In delectus, doloremque quia
                  vitae ex ea autem facilis vero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-8">
        <div className="w-11/12 mx-auto">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h3>40,000+ Happy Customer</h3>
              <p>
                Empower your sales teams with industry tailored solutions that
                support.
              </p>
            </div>
            <div>
              <h3>40,000+ Happy Customer</h3>
              <p>
                Empower your sales teams with industry tailored solutions that
                support.
              </p>
            </div>
            <div>
              <h3>40,000+ Happy Customer</h3>
              <p>
                Empower your sales teams with industry tailored solutions that
                support.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-8 bg-[#f9f3f0] py-20">
        <div className="w-11/12 mx-auto">
          <div className="grid grid-cols-4 gap-4">
            <div>
              <div className="rounded-md overflow-hidden">
                <img
                  src={teamMember}
                  alt=""
                  className="rounded-md hover:scale-110 transition-all duration-150 ease-out delay-50"
                />
              </div>
              <div>
                <p className="text-[#777] text-base my-1 font-semibold">
                  Founder
                </p>
                <h3 className="text-[#777] text-xl font-bold">John Doe</h3>
              </div>
            </div>
            <div>
              <div className="rounded-md overflow-hidden">
                <img
                  src={teamMember}
                  alt=""
                  className="rounded-md hover:scale-110 transition-all duration-150 ease-out delay-50"
                />
              </div>
              <div>
                <p className="text-[#777] text-base my-1 font-semibold">
                  Founder
                </p>
                <h3 className="text-[#777] text-xl font-bold">John Doe</h3>
              </div>
            </div>
            <div>
              <div className="rounded-md overflow-hidden">
                <img
                  src={teamMember}
                  alt=""
                  className="rounded-md hover:scale-110 transition-all duration-150 ease-out delay-50"
                />
              </div>
              <div>
                <p className="text-[#777] text-base my-1 font-semibold">
                  Founder
                </p>
                <h3 className="text-[#777] text-xl font-bold">John Doe</h3>
              </div>
            </div>
            <div>
              <div className="rounded-md overflow-hidden">
                <img
                  src={teamMember}
                  alt=""
                  className="rounded-md hover:scale-110 transition-all duration-150 ease-out delay-50"
                />
              </div>
              <div>
                <p className="text-[#777] text-base my-1 font-semibold">
                  Founder
                </p>
                <h3 className="text-[#777] text-xl font-bold">John Doe</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-11/12 mx-auto">
          <div className="flex gap-5 my-14">
            <div className="w-5/12">
              <img
                src={fashion}
                alt=""
                className="object-cover h-96 w-full rounded-md"
              />
            </div>
            <div className="w-7/12 flex items-center p-12">
              <div>
                <h2 className="mb-8 text-3xl font-bold">
                  Online shopping includes both buying things online.
                </h2>
                <p>
                  Salesforce B2C Commerce can help you create unified,
                  intelligent digital commerce experiences — both online and in
                  the store.
                </p>
                <p className="mb-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem deleniti deserunt quos minima impedit, odio laborum
                  veritatis tenetur eos dolorum. In delectus, doloremque quia
                  vitae ex ea autem facilis vero.
                </p>
                <Link
                  to="#"
                  className="border-solid px-10 py-4 rounded-lg border-2 border-fuchsia-900"
                >
                  Get In touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-11/12 mx-auto">
          <div className="flex gap-5 my-14">
            <div className="w-1/2 flex items-center">
              <div>
                <h2 className="mb-8 text-3xl font-bold">
                  Online shopping includes both buying things online.
                </h2>
                <p>
                  Salesforce B2C Commerce can help you create unified,
                  intelligent digital commerce experiences — both online and in
                  the store.
                </p>
                <p className="mb-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem deleniti deserunt quos minima impedit, odio laborum
                  veritatis tenetur eos dolorum. In delectus, doloremque quia
                  vitae ex ea autem facilis vero.
                </p>
                <Link
                  to="#"
                  className="border-solid px-10 py-4 rounded-lg border-2 border-fuchsia-900"
                >
                  Get In touch
                </Link>
              </div>
            </div>
            <div className="w-1/2">
              <img
                src={model}
                alt=""
                className="object-cover object-top h-[500px] w-full rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default About;
