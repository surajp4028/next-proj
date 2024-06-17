/** @type {import('next').NextConfig} */
const nextConfig = {

    eslint : {
        
        ignoreDuringBuilds: true,
    },
    images :{
        domains:['flowbite.s3.amazonaws.com']
    },
};

export default nextConfig;
