import ReactPlayer from 'react-player';
import { FaLink } from 'react-icons/fa';
import { Color, ElementSpacing, FontColor, TextCenter } from '../../styles';
import DoubleColumn from '../../components/double-column';
import SkillsBanner from '../../components/skills-banner';
import WorkBanner from '../../components/work-banner';
import AllProjects from '../../components/all-projects';
import NextProject from '../../components/next-project';
import Footer from '../../components/footer';
import Animator, { ContainerType } from '../../components/animator';
import ContactSection from '../../components/contact-section';
import { useWork } from '../../hooks/use-work';
import { useTitle } from '../../hooks/use-title';

export default () => {
  const { work, nextWork } = useWork('eraise');
  useTitle(work?.title);

  return (
    <>
      <WorkBanner work={work} />
      <DoubleColumn>
        <Animator containerType={ContainerType.ContentSquare} backgroundColor={Color.darkGray}>
          <ElementSpacing>
            <h2>About</h2>
          </ElementSpacing>
          <ElementSpacing>
            <p>
              Eraise is a passion project that I worked on in my spare time over the course of 6
              months. I challenged myself to create a tool that could be used to help people
              struggling with student loan debt. The solution I came up with is a platform where
              users could receive donations that would be sent directly to their loan provider.
              Donators can choose to donate - once or monthly - to a random user, or explore the
              community and donate to a specific user.
            </p>
          </ElementSpacing>

          <a href="https://www.eraise.loans" style={{ display: 'inline-block' }} target="_blank">
            <FaLink style={{ fontSize: 12 }} /> View live project
          </a>
        </Animator>
        <Animator containerType={ContainerType.ImageSquare}>
          <picture>
            <source
              srcSet={require(`../../public/images/work/eraise/about.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/eraise/about.png`)} />
          </picture>
        </Animator>
      </DoubleColumn>
      <Animator containerType={ContainerType.CenterBanner} backgroundColor={Color.silver}>
        <FontColor color={Color.darkGray}>
          <ElementSpacing>
            <TextCenter>
              <h2>Challenge</h2>
            </TextCenter>
          </ElementSpacing>
          <p>
            Design and build an automated, secure, optimized, and scalable app along with the
            supporting company infrastructure. Research and roll a stack with the most effect
            technologies available in the given ecosystem. Learn new and exciting technologies while
            exercising design skills.
          </p>
        </FontColor>
      </Animator>
      <DoubleColumn>
        <Animator containerType={ContainerType.ContentSquare} backgroundColor={work.color}>
          <ElementSpacing>
            <h2>Branding</h2>
          </ElementSpacing>
          <p>
            I had a lot of fun creating the branding for Eraise. While brainstorming the logo I
            wanted to create an emphasis on compassion and hope. I came up with a heart shaped
            balloon meant to symbolize the hope to raise yourself out of debt with the help of a
            loving community. For the colors I wanted them to be friendly but at the same time show
            professionalism to help users feel secure when making donations or importing their loan
            information.
          </p>
        </Animator>
        <Animator containerType={ContainerType.ImageSquare}>
          <picture>
            <source
              srcSet={require(`../../public/images/work/eraise/branding.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/eraise/branding.png`)} />
          </picture>
        </Animator>
      </DoubleColumn>

      <DoubleColumn reverse={true}>
        <Animator containerType={ContainerType.ContentSquare} backgroundColor={Color.silver}>
          <FontColor color={Color.darkGray}>
            <ElementSpacing>
              <h2>Wireframes</h2>
            </ElementSpacing>
            <p>
              Since one of my goals was to finish this project quickly, I had to make agile
              decisions. The wireframing process is a great example. Instead of using a prototyping
              tool like I normally would when working with a team, I decided to stick with only pen
              and paper then move directly into the design process. This meant I was doing a lot of
              touch up and iterations in design phase, but overall it helped me get the designs done
              quicker so I could move onto the development.
            </p>
          </FontColor>
        </Animator>
        <Animator containerType={ContainerType.ImageSquare}>
          <picture>
            <source
              srcSet={require(`../../public/images/work/eraise/wireframes.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/eraise/wireframes.png`)} />
          </picture>
        </Animator>
      </DoubleColumn>

      <DoubleColumn>
        <Animator containerType={ContainerType.ContentSquare} backgroundColor={work.color}>
          <ElementSpacing>
            <h2>Design Iterations</h2>
          </ElementSpacing>
          <p>
            I loved seeing the improvements after each design iteration. The Sketch file slowly
            turned into a showcase of the importance of iterating when designing. This project was
            also my first major project using Sketch so I was able to learn a lot about modern UI
            design processes.
          </p>
        </Animator>
        <Animator containerType={ContainerType.ImageSquare}>
          <picture>
            <source
              srcSet={require(`../../public/images/work/eraise/iterations.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/eraise/iterations.png`)} />
          </picture>
        </Animator>
      </DoubleColumn>

      <DoubleColumn reverse={true}>
        <Animator containerType={ContainerType.ContentSquare} backgroundColor={Color.silver}>
          <FontColor color={Color.darkGray}>
            <ElementSpacing>
              <h2>Finished Designs</h2>
            </ElementSpacing>
            <p>
              Ultimately I created a design that I really liked. I was able to create a design
              language that would be used when designing new pages. The design language helped
              streamline the design process and ensure consistency. The goals of the design were to
              make it easy & quick to donate, and sign up. I also wanted to put an importance on
              learning exactly what the platform does, what information it collects, and ensure
              users felt secure. Lastly, I wanted to create a unique and fun experience when using
              the app.
            </p>
          </FontColor>
        </Animator>
        <Animator containerType={ContainerType.ImageSquare}>
          <picture>
            <source
              srcSet={require(`../../public/images/work/eraise/designs.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/eraise/designs.png`)} />
          </picture>
        </Animator>
      </DoubleColumn>

      <SkillsBanner skills={work.skills} />

      <DoubleColumn>
        <Animator containerType={ContainerType.ContentSquare} backgroundColor={work.color}>
          <ElementSpacing>
            <h2>Code</h2>
          </ElementSpacing>
          <p>
            As fun as designing Eraise was, my favorite moments came while building the app. I
            enjoyed architecting a stack using some of the most exciting technologies in software
            development. From Next.js to TS Node - PostgreSQL to Objection.js - Heroku and Firebase
            and Stripe and so many more awesome technologies. I had a blast. I wrote some crazy sql
            queries, created a cool logging and notification system using Stripe's API, and worked
            with GitHub's new project management tools to manage it all. I learned so much while
            building Eraise and that's exactly why I wanted to build it.
          </p>
        </Animator>
        <Animator containerType={ContainerType.ImageSquare}>
          <picture>
            <source
              srcSet={require(`../../public/images/work/eraise/code.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/eraise/code.png`)} />
          </picture>
        </Animator>
      </DoubleColumn>

      <DoubleColumn reverse={true}>
        <Animator containerType={ContainerType.ContentSquare} backgroundColor={Color.silver}>
          <FontColor color={Color.darkGray}>
            <ElementSpacing>
              <h2>Infrastructure</h2>
            </ElementSpacing>
            <p>
              While Eraise is a small app with a small scope, it required a complex infrastructure.
              One of the big concerns was security. I researched and used the most secure
              technologies for the given problems. Google's Firebase was used for authentication.
              Stripe was used for payments. Stripe's Plaid was used for authenticating with the
              banks and returning loan information. GitHub was used for the code repository and
              Heroku for hosting. Overall I love the infrastructure that I came up with for Eraise.
            </p>
          </FontColor>
        </Animator>
        <Animator containerType={ContainerType.ImageSquare}>
          <picture>
            <source
              srcSet={require(`../../public/images/work/eraise/infrastructure.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/eraise/infrastructure.png`)} />
          </picture>
        </Animator>
      </DoubleColumn>

      <div style={{ width: '100%', height: 'auto' }}>
        <ReactPlayer
          url="/images/work/eraise/video.mp4"
          width="100%"
          height="100%"
          style={{ display: 'flex' }}
          loop={true}
          playing={false}
          controls={true}
        />
      </div>

      <Animator containerType={ContainerType.CenterBanner} backgroundColor={Color.darkGray}>
        <ElementSpacing>
          <TextCenter>
            <h2>Results</h2>
          </TextCenter>
        </ElementSpacing>
        <p>
          In six months I finished the app and all the supporting tasks. I started by designing the
          brand, wireframing, and then designing in parallel with coding the app. I rolled a
          powerful stack that was a lot of fun to work with. The stack included Next.js with Emotion
          and Redux for the frontend, and Typescript Node using Express and Objection.js along with
          postgreSQL for the backend. While architecting the infrastructure I utilized a number of
          useful resources to solve specific problems including Stripe, Plaid, Firebase
          Authentication, and Heroku to name a few.
        </p>
      </Animator>

      <DoubleColumn>
        <AllProjects />
        <NextProject work={nextWork} />
      </DoubleColumn>

      <Footer />
      <ContactSection />
    </>
  );
};
