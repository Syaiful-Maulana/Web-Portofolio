import Link from 'next/link';
// import { motion } from 'framer-motion';

// import { variants } from '../../animations/variants';
// import SocialMediaIcons from '../SocialMediaIcons';
import { handleDrawer } from '../../lib/scroll-to-section/scroll-to-section';
import { IPageViews } from '../../redux/slices/umami.slice';
import { menu } from '../Layout/data';
import socialMedia from '../SocialMediaIcons/data';
// import CV from './CV';
import Visitors from './Visitors';

const Footer = ({ visitors }: { visitors: IPageViews }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='w-screen bg-slate-800'>
      <div className='container mx-auto px-6 md:px-12 lg:px-56'>
        <div className='grid grid-cols-1 gap-6 pt-12 pb-3 text-slate-200 md:grid-cols-4'>
          <div className='mb-4 space-y-4 md:col-span-2 md:mb-0 md:mr-10 lg:mr-24'>
            <div className='space-y-1 '>
              <p className='font-mono text-3xl font-bold tracking-tight'>
                Syaiful Maulana
              </p>
              <p className='text-sm font-light text-slate-400'>
                Junior Back-End Developer
              </p>
            </div>
            <div className='flex w-full space-x-2'></div>
          </div>
          <div className='space-y-1'>
            <p className='text-lg font-bold underline decoration-wavy decoration-1 underline-offset-2'>
              Quick links
            </p>
            {menu.map((value) => {
              return (
                <p
                  className='w-fit cursor-pointer text-slate-400'
                  key={value.title}
                  onClick={() => handleDrawer(value.to)}
                >
                  {value.title}
                </p>
              );
            })}
          </div>
          <div className='space-y-1'>
            <p className='text-lg font-bold underline decoration-wavy decoration-1 underline-offset-2'>
              Reach me out on
            </p>
            {socialMedia.map((value) => {
              return (
                <Link href={value.link} key={value.title}>
                  <a className='block w-fit text-slate-400' target='_blank'>
                    {value.title}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
        <div className='divider before:bg-slate-300/10 after:bg-slate-300/10'></div>
        <div className='mt-2 mb-6 flex flex-col items-center space-y-2 md:flex-row md:justify-between md:space-y-0'>
          <p className='text-xs font-semibold text-slate-400'>
            © {currentYear} Muhammad Syaiful Maulana • All Rights Reserved
          </p>
          <Visitors data={visitors} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
