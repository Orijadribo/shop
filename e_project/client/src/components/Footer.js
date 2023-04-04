import React from 'react';
import { ImGithub } from 'react-icons/im';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaHome,
} from 'react-icons/fa';
import { MdLocation, MdLocationOn } from 'react-icons/md';
import { BsPersonFill, BsPaypal } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='bg-black text-[#949494] py-20 font-titleFont'>
            <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
                {/*=========== Logo Icon Starts here*/}
                <div className='flex flex-col gap-7'>
                    <h1 className='w-28'>bazaar</h1>
                    <p className='text-white text-sm tracking-wide'>&copy; ReactBD.com</p>
                    <div className='flex items-center gap-2'>
                        <img
                            className='w-6'
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Old_Visa_Logo.svg/2560px-Old_Visa_Logo.svg.png'
                            alt='visaImg'
                        />
                        <img
                            className='w-6'
                            src='https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15..v1602794215.png'
                            alt='paypalImg'
                        />
                        <img
                            className='w-6'
                            src='https://www.smartenergydecisions.com/upload/images/company_images/american_express.jpg'
                            alt='americanexpressImg'
                        />
                        <img
                            className='w-6'
                            src="data:image/png;base64,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"
                            alt='mtnmobilemoneyImg'
                        />
                        <img
                            className='w-6'
                            src='https://flashugnews.com/wp-content/uploads/2022/07/Airtel-Money-Rates-in-Uganda-2022-1200x801.jpeg'
                            alt='mtnmobilemoneyImg'
                        />
                    </div>
                    <div className='flex gap-5 text-lg text-gray-400'>
                        <ImGithub className='hover:text-white duration-300 cursor-pointer' />
                        <FaYoutube className='hover:text-white duration-300 cursor-pointer' />
                        <FaFacebookF className='hover:text-white duration-300 cursor-pointer' />
                        <FaTwitter className='hover:text-white duration-300 cursor-pointer' />
                        <FaInstagram className='hover:text-white duration-300 cursor-pointer' />
                    </div>
                </div>
                {/*=========== Logo Icon Ends here*/}

                {/*=========== Locate Us Starts here*/}
                <div>
                    <h2 className='text-2xl font-semibold text-white mb-4'>locate us</h2>
                    <div className='text-base flex flex-col gap-2'>
                        <p>MDB, Ruwi, Muscat-Oman</p>
                        <p>Mobile: 09823848748</p>
                        <p>Phone: 0984378884</p>
                        <p>e-mail: bazar@gmail.com</p>
                    </div>
                </div>
                {/*=========== Locate Us Ends here*/}

                {/*=========== Profile Starts here*/}
                <div>
                    <h2 className='text-2xl font-semibold text-white mb-4'>profile</h2>
                    <div className='flex flex-col gap-2 text-base'>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                            <span>
                                <BsPersonFill />
                            </span>
                            my account
                        </p>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                            <span>
                                <BsPaypal />
                            </span>
                            checkout
                        </p>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                            <span>
                                <FaHome />
                            </span>
                            order tracking
                        </p>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                            <span>
                                <MdLocationOn />
                            </span>
                            help & support
                        </p>
                    </div>
                </div>
                {/*=========== Profile Ends here*/}

                {/*=========== Subscribe Starts here*/}
                <div className='flex flex-col justify-center'>
                    <input
                        className='bg-transparent border px-4 py-2 text-sm'
                        placeholder='e-mail'
                        type='text' />
                    <button className='text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black'>
                        Subscribe
                    </button>
                </div>
                {/*=========== Subscribe Ends here*/}
            </div>
        </div>
    )
}

export default Footer