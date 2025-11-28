import Container from '@/app/_components/container';
import { Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className='border-t border-foreground'>
      <Container>
        <div className='py-2 flex flex-col lg:flex-row items-center'>
          <h3 className='text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2'>
            Blog.
          </h3>
          <div className='flex gap-4 justify-center items-center lg:gap-6 lg:pl-4 lg:w-1/2'>
            <a
              href='https://www.linkedin.com/in/gustavo-marques-mello/'
              target='_blank'
              aria-label='Go to my Linkedin Profile'
            >
              <Linkedin />
            </a>
            <a
              href={`https://github.com/GustavoMelloGit/blog`}
              target='_blank'
              aria-label='Go to my Github Profile'
            >
              <Github />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
