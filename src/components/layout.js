/** @jsx jsx */
import {Fragment} from 'react';
import {jsx, css, Global} from '@emotion/react';
import {Helmet} from 'react-helmet';
import {join, map} from 'lodash-es';
import favicon from '../images/favicon.ico';
import Commentbox from './commentbox';

const fonts = [
  ['family', 'Fira+Sans:ital,wght@0,400;0,700;1,400;1,700'],
  ['family', 'PT+Sans:ital,wght@0,400;0,700;1,400;1,700'],
  ['display', 'swap'],
];

const q = map(fonts, ([k, v]) => `${k}=${v}`);
const fontHref = `https://fonts.googleapis.com/css2?${join(q, '&')}`;

export default function PageLayout({children, ...rest}) {
  if (process.env.NODE_ENV === 'development') {
    console.log(rest);
  }

  const {pageContext} = rest;
  const isPost = Boolean(pageContext?.frontmatter?.title);

  return (
    <Fragment>
      <Helmet>
        <link rel="shortcut icon" href={favicon} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href={fontHref} rel="stylesheet" />
      </Helmet>
      <Global
        styles={css({
          'html, body': {
            margin: 0,
            padding: 0,
          },
          '*, *::before, *::after': {
            boxSizing: 'border-box',
          },
        })}
      />
      <div
        css={css({
          width: '100%',
          maxWidth: 1080,
          margin: 'auto',
        })}
      >
        {isPost && (
          <h1
            css={css({
              fontFamily: "'Fira Sans', sans-serif",
            })}
          >
            {pageContext.frontmatter.title}
          </h1>
        )}
        <main
          css={css({
            fontFamily: "'PT Sans', sans-serif",
          })}
        >
          {children}
        </main>
        {isPost && <Commentbox />}
      </div>
    </Fragment>
  );
}
