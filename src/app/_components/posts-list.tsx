import { Post } from '@/interfaces/post';
import { HeroPost } from './hero-post';
import { MoreStories } from './more-stories';

type Props = {
  posts: Post[];
};

/**
 * Componente que exibe os posts filtrados.
 * A filtragem é feita no servidor baseado no parâmetro lang da URL.
 */
export function PostsList({ posts }: Props) {
  if (posts.length === 0) {
    return (
      <div className='text-center py-12'>
        <p className='text-lg text-foreground/60'>
          Nenhum post encontrado para o idioma selecionado.
        </p>
      </div>
    );
  }

  const heroPost = posts[0];
  const morePosts = posts.slice(1);

  return (
    <>
      <HeroPost
        title={heroPost.title}
        coverImage={heroPost.coverImage}
        date={heroPost.date}
        author={heroPost.author}
        slug={heroPost.slug}
        excerpt={heroPost.excerpt}
      />
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </>
  );
}
