/** @jsx jsx */
import {jsx} from '@emotion/react';
import {graphql} from 'gatsby';
import {filter, map} from 'lodash-es';
import PostEntry from '../components/post-entry';

export default function IndexPage({
  data: {
    allMdx: {edges},
  },
}) {
  const posts = filter(edges, (edge) => !!edge.node.frontmatter.date);
  const postEntries = map(posts, (edge) => <PostEntry key={edge.node.id} post={edge.node} />);

  return <div>{postEntries}</div>;
}

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date}) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            date
            title
          }
          slug
        }
      }
    }
  }
`;
