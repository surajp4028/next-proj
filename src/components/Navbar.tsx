'use client'

import Image from "../../node_modules/next/image"
import Link from "../../node_modules/next/link"
import Logo from "../components/logoipsum-295.svg"
import { Button } from "./ui/button"
import { FiMenu } from "react-icons/fi";
 

    export default function Navbar() {

  function showpannel() {
        console.log("hello");
        const showicon = document.getElementById('showicon'),
        hideicon = document.getElementById('hideicon'),
        pannel = document.getElementById('panel')

        pannel?.classList.toggle('hidden');
        hideicon?.classList.toggle('hidden')
    } 

    return (
        <div className="fixed w-full top-0 left-0 p-3 z-50 bg-black bg-opacity-85 backdrop-blur ">
            <div className="">
                <div className="max-w-7xl text-white flex justify-between items-center mx-auto">

                    <div className="flex items-center gap-4">
                        <h4 className="text-xl font-medium">Agency Port</h4>
                        <ul className=" hidden text-gray-400 md:flex items-center gap-3 text-md ">
                            <li>Home</li>
                            <li>About</li>
                            <li>Service</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div className="hidden md:flex items-center gap-2">
                        <Button asChild className=" bg-transparent ">
                            <Link href="/login">Hire Me</Link>
                        </Button>
                        <Button className="bg-white text-black">
                            <Link href="/login">Get in Touch</Link>
                        </Button>
                    </div>

                    <button id="showicon" onClick={showpannel} className="text-xl md:hidden"><FiMenu /></button>

                </div>
            </div>
            {/* paneel */}
            <div id="panel" className="hidden w-full h-full bg-black fixed top-0 left-0 z-90 text-white p-3 transition">
                <div className="max-w-7xl text-white flex justify-between items-center mx-auto">
                    <div className="flex items-center gap-4">
                        <h4 className="text-xl font-medium">Agency Port</h4>
                    </div>
                    <button id="hideicon" onClick={showpannel}  className="text-xl hidden"><FiMenu /></button>
                </div>
                <ul className=" text-gray-400 flex flex-col mt-10 gap-5 text-lg ">
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Contact</li>
                </ul>
                <div className="h-[1px] w-full bg-gray-800 mt-6"></div>
                <div className="flex flex-col items-center gap-4 mt-3">
                        <Button asChild className=" bg-transparent border border-gray-500 w-full mt-5">
                            <Link href="/login">Hire Me</Link>
                        </Button>
                        <Button className="bg-white text-black w-full">
                            <Link href="/login">Get in Touch</Link>
                        </Button>
                    </div>
                

            </div>
        </div>
    )
}
