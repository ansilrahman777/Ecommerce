import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosContact } from "react-icons/io";

function homepage() {
  return (
    <>
      <div className="bg-black text-white text-center text-base font-normal h-9 align-middle ">
        Sign up and get 20% off to your first order.
        <span className="underline underline-offset-1">Sign Up Now</span>
      </div>
      <div className="navbar bg-base-100">
        <div className="flex">
          <a className="ml-10 text-3xl font-extrabold">SHOP.CO</a>
        </div>
        <div className="ml-14 gap-8">
          <Link>Shop</Link>
          <Link>On Sale</Link>
          <Link>New Arrivals</Link>
          <Link>Brands</Link>
        </div>
        <div class="ml-20">
          <div class="relative flex items-start w-96 h-8 rounded-full focus-within:shadow-lg bg-gray-200 overflow-hidden">
            <div class="grid place-items-center h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              class="peer h-full w-full outline-none text-sm text-gray-700 pr-2 bg-gray-200"
              type="text"
              id="search"
              placeholder="Search something.."
            />
          </div>
          <div className="gap-4 flex ml-5">
            <FiShoppingCart />
            <IoIosContact />
          </div>
        </div>
      </div>
      <div className="w-full flex">
        <div className="flex w-1/2 m-10 flex-col">
          <div>
            <h1 className="text-5xl font-extrabold text-black">
              FIND CLOTH<br></br> THAT MATCHES<br></br> YOUR LIFE
            </h1>
          </div>
          <div>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
        <img
          className="max-w-sm rounded-lg shadow-2xl"
          src="https://img.daisyui.com/images/stock/