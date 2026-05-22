import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
    cacheComponents: true,
    images: {
        // This is necessary to display images from your local Vendure instance
        dangerouslyAllowLocalIP: true,
        remotePatterns: [
            {
                hostname: 'localhost',
            },
            {
        	   protocol: 'http',
      	   hostname: '132.145.45.101',
     	   port: '',
     	   pathname: '/assets/**',
            },
            {
        	   protocol: 'https',
      	   hostname: 'vendure01.vercel.app',
     	   port: '',
     	   pathname: '/assets/**',
            }
        ],
    },
    experimental: {
        rootParams: true
    }
};

export default withNextIntl(nextConfig);
