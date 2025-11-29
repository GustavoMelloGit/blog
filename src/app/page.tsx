import { Suspense } from 'react';
import Container from '@/app/_components/container';
import Header from '@/app/_components/header';
import { PostsList } from '@/app/_components/posts-list';
import { getAllPosts } from '@/lib/api';
import { Language } from '@/contexts/language-context';

type SearchParams = {
  lang?: string;
};

type Props = {
  searchParams: Promise<SearchParams>;
};

export default async function Index(props: Props) {
  const searchParams = await props.searchParams;
  const language = (searchParams.lang === 'en' ? 'en' : 'pt') as Language;
  const filteredPosts = getAllPosts(language);

  return (
    <main>
      <Container>
        <Suspense
          fallback={
            <div className='mb-20 mt-8 flex items-center justify-between'>
              <h2 className='text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight'>
                Blog.
              </h2>
              <div className='px-3 py-1.5 text-sm font-medium bg-background border border-foreground/20 rounded-md'>
                PT
              </div>
            </div>
          }
        >
          <Header />
        </Suspense>
        <PostsList posts={filteredPosts} />
      </Container>
    </main>
  );
}
