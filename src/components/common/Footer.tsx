import { FC } from 'react';
import Link from 'next/link';

import { Logo } from './Logo';
import { Icon } from './Icon';
import { isExternalUrl } from '../../utils/helpers';
import config from '../../config';
import * as routes from '../../routes';

const content = {
  note: (
    <p className="mt-2">
      Made with 💜 by{' '}
      <Link href={config.raydiantUrl}>
        <a
          className="hover:text-slate-700 dark:hover:text-slate-300"
          target="_blank"
          rel="noreferrer"
        >
          Raydiant
        </a>
      </Link>
    </p>
  ),
  menus: [
    {
      // TODO: Populate
      title: 'Docs',
      elements: [{ label: 'Get Started', url: routes.getStarted() }],
    },
    {
      // TODO: Populate
      title: 'Examples',
      elements: [],
    },
    {
      title: 'Community',
      elements: [
        { label: 'Twitter', url: config.twitterUrl },
        {
          label: 'GitHub',
          url: config.gitHubUrl,
        },
      ],
    },
  ],
};

export const Footer: FC = () => {
  return (
    <div className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900/50">
      <div className="mx-auto w-full max-w-screen-2xl space-y-8 px-4 py-8 md:p-8 md:pb-12 lg:flex lg:justify-between lg:space-y-0 lg:p-16 lg:pb-20">
        <div>
          <Link href="/">
            <a className="flex items-center space-x-2.5 font-bold text-slate-800 no-underline dark:text-white">
              <Logo />
              <span>Raydiant</span>
            </a>
          </Link>
          <div className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            {content.note}
          </div>
        </div>
        <div className="space-y-8 md:flex md:space-y-0 md:space-x-16">
          {content.menus.map(({ title, elements }, index) => (
            <div key={index}>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-800 dark:text-slate-200">
                {title}
              </h4>
              <ul className="mx-0 mt-4 list-none space-y-2 text-sm">
                {elements.map(({ label, url }, index) => (
                  <li key={index}>
                    <Link href={url}>
                      <a
                        className="inline-flex items-center space-x-1 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                        target={isExternalUrl(url) ? '_blank' : undefined}
                      >
                        <span>{label}</span>
                        {isExternalUrl(url) && (
                          <span className="inline-block w-4">
                            <Icon name="external-link" />
                          </span>
                        )}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
