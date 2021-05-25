import { Fragment, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const selectTheme = (value) => {
    localStorage.setItem('theme', value);
    document.querySelector('html').classList.add(localStorage.getItem('theme'));

    const html = document.querySelector('html');

    if (value === 'dark') {
      html.classList.remove('light');
    } else {
      html.classList.remove('dark');
    }
  };

  useEffect(() => {
    document.querySelector('html').classList.add(localStorage.getItem('theme'));
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="antialiased flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-700">
        <div className="w-5/12">
          <div className="bg-white dark:bg-gray-800 shadow p-4 rounded-lg mb-4 flex items-center justify-between">
            <div className="font-semibold text-lg text-gray-800 dark:text-white">Switcher</div>
            <div>
              <button
                onClick={() => selectTheme('light')}
                className="focus:outline-none w-4 h-4 bg-gray-200 rounded-full mr-2"></button>
              <button
                onClick={() => selectTheme('dark')}
                className="focus:outline-none w-4 h-4 bg-black rounded-full mr-2"></button>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
            <div className="px-10 py-8">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Nostrud laborum laborum exercitation aliqua nostrud mollit sit enim.
              </h1>
              <div className="leading-relaxed text-lg text-gray-500 dark:text-gray-200">
                Cillum excepteur ea ea eiusmod adipisicing culpa minim dolor ex in esse duis ipsum
                consectetur. Irure Lorem occaecat esse id do aute velit est deserunt fugiat. Fugiat
                in dolor excepteur minim eiusmod.
              </div>
            </div>
            <div className="px-10 py-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-900 dark:text-gray-200">
              Commodo nostrud sit adipisicing aliquip laboris ullamco et fugiat.
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
