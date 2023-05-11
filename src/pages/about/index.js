import PageDescription from "@/components/PageDescription";
import { Grid, Button, Chip, Stack } from "@mui/material";
import { useRouter } from "next/router";

export default function About( { skills } ) {
    const router = useRouter();

    return (
        <section>
            <PageDescription 
                title="About Me"
                description="Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology."
            />

        <Grid container spacing={2}>
            <Grid item md={6}>
                <h2>Get to know me!</h2>
                <p>
                    As a full stack web developer, I am passionate about creating innovative and user-friendly web applications that solve real-world problems. With expertise in both front-end and back-end technologies, I have the ability to design, develop, and deploy high-quality web solutions that exceed user expectations.
                </p>

                <p>
                    My development process involves collaborating closely with clients to understand their business needs and objectives. From there, I work tirelessly to build web applications that are intuitive, responsive, and scalable, all while adhering to the latest industry standards and best practices.
                </p>

                <p>
                    With a keen eye for detail and a commitment to delivering results, I take pride in my ability to develop seamless web experiences that not only meet but exceed my clients&apos; expectations. I am always seeking new challenges and opportunities to further expand my skillset, and I am excited to see what the future holds for the web development industry.
                </p>
                <Button
                    variant="contained"
                    size="large"
                    onClick={() => router.push("/contact")}
                >
                    Contact
                </Button>
            </Grid>
            <Grid item md={6}>
                <h2>My Skills</h2>
                <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap={true}>
                    { 
                        skills.map(skill => ( 
                                <Chip key={skill} label={skill} /> 
                            )
                        )
                    }
                </Stack>
            </Grid>
        </Grid>
        </section>
    );
}

export async function getStaticProps() {
    return {
        props: {
            skills: [
                "Java",
                "React",
                "Next.js",
                "Spring",
                "C#",
                "Python",
                "JavaScript",
                "Databases",
                "HTML",
                "Git",
            ]
        },
    };
}