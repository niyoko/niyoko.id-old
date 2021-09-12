/** @jsx jsx */
import {jsx} from '@emotion/react';
import {Link} from 'gatsby';

export default function PostLink({post}) {
  return (
    <div>
      <Link to={post.slug}>
        {post.frontmatter.title} ({post.frontmatter.date})
      </Link>
      <div>{post.excerpt}</div>
    </div>
  );
}
