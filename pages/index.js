import Form from "../components/Form";
import Counter from "../components/Counter";
import ThemeToggle from "../components/ThemeToggle";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Wordle Solver</title>
        <meta name="description" content="A Wordle solving helper app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="App">
        <header className="App-header">
          <ThemeToggle />
          <h1>
            <span>W</span>
            <span>o</span>
            <span>r</span>
            <span>d</span>
            <span>l</span>
            <span>e</span>
            <span> </span>
            <span>S</span>
            <span>o</span>
            <span>l</span>
            <span>v</span>
            <span>e</span>
            <span>r</span>
          </h1>
          <a
            href="https://mrbaker1917.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Click to go to my website!"
          >
            Created by mrbaker1917
          </a>
        </header>
        <div className="App-body">
          <p>
            If you want some help to solve wordle, just follow the tips below.
          </p>
          <Form />
          <Counter />
        </div>
      </div>
    </>
  );
}