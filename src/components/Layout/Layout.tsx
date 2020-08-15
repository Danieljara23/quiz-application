import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { css } from '@emotion/core';

type Props = {
  children?: ReactNode;
  title?: string;
};

const layoutCss = css`
  display: grid;
  grid-template-rows: 60px auto 60px;
  height: 100vh;
`;

const Navbarcss = css`
  background: #2b6c92;
  font-size: 20px;
  padding: 0rem 1rem;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const navBarLink = css`
  color: white;
  padding-right: 20px;
`;

function Layout({ children, title = 'AppstUdiar' }: Props): JSX.Element {
  return (
    <div css={layoutCss}>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav css={Navbarcss}>
          <Link href="/">
            <a href="/#" css={navBarLink}>
              Home
            </a>
          </Link>
          <Link href="/about">
            <a href="/#" css={navBarLink}>
              About
            </a>
          </Link>
          <Link href="/questionnaires">
            <a href="/#" css={navBarLink}>
              Categorías
            </a>
          </Link>
        </nav>
      </header>
      <div>{children}</div>
      <footer>
        <hr />
        <span>{"I'm here to stay (Footer)"}</span>
      </footer>
    </div>
  );
}

export default Layout;
