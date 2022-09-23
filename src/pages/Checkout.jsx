import React from "react";
import PageWrapper from "../layouts/PageWrapper";

const Checkout = () => {
  return (
    <PageWrapper>
      <section className="bg-[#f9f3f0] py-10">
        <div className="w-11/12 mx-auto">
          <div className="page-heading pt-32">
            <div className="flex items-between">
              <h2 className="text-[40px] font-bold">Checkout</h2>
              <div>
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <div className="w-11/12 mx-auto">
          <div className="flex gap-3 flex-col md:flex-row">
            <div className="md:w-1/2 w-full">
              <h4>Billing details</h4>
              <form>
                <div class="mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-1/2">
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        First Name
                      </label>
                      <input
                        type="email"
                        id="email"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="name@flowbite.com"
                        required=""
                      />
                    </div>
                    <div className="w-1/2">
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        id="email"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="name@flowbite.com"
                        required=""
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    for="countries"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Select your country
                  </label>
                  <select
                    id="countries"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                  </select>
                </div>
                <div className="mb-6">
                <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Your address
                      </label>
                      <input
                        type="address"
                        id="address"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="name@flowbite.com"
                        required=""
                      />
                </div>
                <div className="mb-6">
                <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Your phone
                      </label>
                      <input
                        type="address"
                        id="address"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="name@flowbite.com"
                        required=""
                      />
                </div>
                <div class="mb-6">
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    id="password"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required=""
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="repeat-password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Repeat password
                  </label>
                  <input
                    type="password"
                    id="repeat-password"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required=""
                  />
                </div>
                <div class="flex items-start mb-6">
                  <div class="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <label
                    for="terms"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    I agree with the{" "}
                    <a
                      href="#"
                      class="text-blue-600 hover:underline dark:text-blue-500"
                    >
                      terms and conditions
                    </a>
                  </label>
                </div>
                <button
                  type="submit"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Register new account
                </button>
              </form>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="bg-[#f9f3f0] md:p-10 p-[2px]">
                <h4 className="text-xl font-semibold pb-5">Your Order</h4>
                <div className="bg-white p-7 mb-10">
                  <table className="w-full">
                    <thead>
                      <tr className="w-full border-b-2">
                        <th className="w-1/2 py-[18px]  text-left text-xl font-bold">
                          Product
                        </th>
                        <th className="w-1/2 py-[18px]  text-right text-xl font-bold">
                          Subtotal
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b-2">
                        <td className="w-1/2 text-left py-[18px] text-base font-semibold">
                          Commodo Blown Lamp x1
                        </td>
                        <td className="w-1/2 text-right  py-[18px] text-base font-semibold">
                          $117.00
                        </td>
                      </tr>
                      <tr className="border-b-2">
                        <td className="w-1/2 text-left py-[18px] text-base font-semibold">
                          Commodo Blown Lamp x1
                        </td>
                        <td className="w-1/2 text-right  py-[18px] text-base font-semibold">
                          $117.00
                        </td>
                      </tr>
                      <tr className="border-b-2">
                        <td className="w-1/2 text-left py-[18px] text-base font-semibold">
                          Subtotal
                        </td>
                        <td className="w-1/2 text-right  py-[18px] text-base font-semibold">
                          $117.00
                        </td>
                      </tr>
                      <tr className="border-b-2 w-full">
                        <td
                          className="w-full py-[18px] text-base font-semibold"
                          colSpan={2}
                        >
                          <div className="flex justify-between mb-3">
                            <h3>Shipping Method</h3>
                            <h3>$117.00</h3>
                          </div>

                          <div>
                            <div class="flex items-center mb-2">
                              <input
                                id="country-option-1"
                                type="radio"
                                name="countries"
                                value="USA"
                                class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                checked
                              />
                              <label
                                for="country-option-1"
                                class="block ml-2 text-base font-medium"
                              >
                                Free Shippping
                              </label>
                            </div>
                            <div class="flex items-center mb-2">
                              <input
                                id="country-option-1"
                                type="radio"
                                name="countries"
                                value="USA"
                                class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                checked
                              />
                              <label
                                for="country-option-1"
                                class="block ml-2 text-sm font-medium"
                              >
                                Local
                              </label>
                            </div>
                            <div class="flex items-center mb-2">
                              <input
                                id="country-option-1"
                                type="radio"
                                name="countries"
                                value="USA"
                                class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                checked
                              />
                              <label
                                for="country-option-1"
                                class="block ml-2 text-sm font-medium"
                              >
                                Flat Rate
                              </label>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="w-1/2 text-left pt-[18px] text-xl font-semibold">
                          Total
                        </td>
                        <td className="w-1/2 text-right  py-[18px] text-xl font-semibold">
                          $117.00
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <section>
                  <div className="single-payment-method mb-5 border-b-2 pb-5">
                    <div class="flex items-center mb-4">
                      <input
                        id="country-option-1"
                        type="radio"
                        name="countries"
                        value="USA"
                        class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                        checked
                      />
                      <label
                        for="country-option-1"
                        class="block ml-2 text-base font-medium"
                      >
                        Direct bank transfer
                      </label>
                    </div>
                    <p className="pl-6">
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference. Your order
                      will not be shipped until the funds have cleared in our
                      account.
                    </p>
                  </div>
                  <div className="single-payment-method mb-5 border-b-2 pb-5">
                    <div class="flex items-center mb-4">
                      <input
                        id="country-option-1"
                        type="radio"
                        name="countries"
                        value="USA"
                        class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                        checked
                      />
                      <label
                        for="country-option-1"
                        class="block ml-2 text-base font-medium"
                      >
                        Cash on delivery
                      </label>
                    </div>
                    <p className="pl-6">Pay with cash upon delivery.</p>
                  </div>
                  <div className="single-payment-method mb-5 border-b-2 pb-5">
                    <div class="flex items-center mb-4">
                      <input
                        id="country-option-1"
                        type="radio"
                        name="countries"
                        value="USA"
                        class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                        checked
                      />
                      <label
                        for="country-option-1"
                        class="block ml-2 text-base font-medium"
                      >
                        Paypal
                      </label>
                    </div>
                    <p className="pl-6">
                      Pay via PayPal; you can pay with your credit card if you
                      don’t have a PayPal account.
                    </p>
                  </div>
                  <div className="flex">
                    <button className="md:px-10 px-5 py-3 bg-fuchsia-900 text-white rounded-md flex justify-center items-center w-full">
                      Check it out!
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Checkout;
