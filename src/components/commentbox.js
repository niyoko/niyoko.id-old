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
          commentboxIdDev
          commentboxId
        }
      }
    }
  `);

  const commentboxId =
    data?.site?.siteMetadata?.[
      process.env.SITE_ENV === 'production' ? 'commentboxId' : 'commentboxIdDev'
    ];

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
