/** @jsx jsx */
import {useEffect} from 'react';
import {jsx, css} from '@emotion/react';
import {graphql, useStaticQuery} from 'gatsby';
import commentBox from 'commentbox.io';

export default function Commentbox() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          commentboxId
        }
      }
    }
  `);

  const commentboxId = data?.site?.siteMetadata?.commentboxId;
  useEffect(() => {
    if (commentboxId) {
      return commentBox(commentboxId);
    }
  }, [commentboxId]);

  return (
    <div
      css={css({
        marginTop: 20,
      })}
    >
      <div className="commentbox" />
    </div>
  );
}
