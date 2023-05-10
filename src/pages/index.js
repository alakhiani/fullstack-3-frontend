import styles from "../styles/Home.module.css";
import { Button } from "@mui/material";
import  { useRouter } from "next/router";

export default function Home( { name, summary } ) {

  const router = useRouter();

  return (
    <section className={styles.Home}>
      <h1 className={styles.Name}>{name}</h1>
      <div className={styles.Summary}>{summary}</div>
      <div>
        <Button
          variant="contained"
          size="large"
          onClick={() => router.push("/projects")}
        >
          Projects
        </Button>
      </div>
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