export default function Home( { name, summary } ) {
  return (
    <section className="{style.Home}">
      <h1 className="{style.Name}">{name}</h1>
      <div className="{style.Summary}">{summary}</div>
    </section>
  )
}

/**
 * Returns the props object containing the name and summary of the full stack developer, 
 * for use in the getStaticProps function.
 *
 * @return {Promise<{props: {name: string, summary: string}}>} The props object containing a name string and a summary string.
 */

export async function getStaticProps() {
  return {
    props: {
      name: 'John Doe',
      summary: "Hi there, I'm a full stack developer with experience in both front-end and back-end technologies, specializing in building scalable web applications using JavaScript frameworks such as React and Node.js.",
    },
  };
}