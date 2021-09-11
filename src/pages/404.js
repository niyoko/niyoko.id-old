/** @jsx jsx */
import {css, jsx} from '@emotion/react';
import {Link} from 'gatsby';

export default function NotFoundPage() {
  return (
    <main
      css={css({
        color: '#232129',
        padding: '96px',
        fontFamily: '-apple-system, Roboto, sans-serif, serif',
      })}
    >
      <title>Not found</title>
      <h1
        css={css({
          marginTop: 0,
          marginBottom: 64,
          maxWidth: 320,
        })}
      >
        Page not found
      </h1>
      <p
        css={css({
          marginBottom: 48,
        })}
      >
        Sorry{' '}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{' '}
        we couldn’t find what you were looking for.
        <br />
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  );
}
