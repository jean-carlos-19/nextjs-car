/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        REACT_CARS_API_NINJAS: process.env.REACT_CARS_API_NINJAS,
        REACT_X_RAPIDAPI_KEY: process.env.REACT_X_RAPIDAPI_KEY,
        REACT_X_RAPIDAPI_HOST: process.env.REACT_X_RAPIDAPI_HOST
    },
    images: {
        remotePatterns:[
            {
                protocol:"https",
                hostname:"cdn.imagin.studio"
            }
        ]
    },
}

module.exports = nextConfig
