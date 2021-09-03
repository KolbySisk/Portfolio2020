import { Color, ElementSpacing, FontColor, TextCenter } from '../../styles';
import SkillsBanner from '../../components/skills-banner';
import DoubleColumn from '../../components/double-column';
import WorkBanner from '../../components/work-banner';
import AllProjects from '../../components/all-projects';
import NextProject from '../../components/next-project';
import Footer from '../../components/footer';
import Animator, { ContainerType } from '../../components/animator';
import ContactSection from '../../components/contact-section';
import { useWork } from '../../hooks/use-work';
import { useTitle } from '../../hooks/use-title';

export default () => {
  const { work, nextWork } = useWork('walmart');
  useTitle(work?.title);

  return (
    <>
      <WorkBanner work={work} />
      <DoubleColumn>
        <Animator containerType={ContainerType.ContentSquare} backgroundColor={Color.darkGray}>
          <ElementSpacing>
            <h2>About</h2>
          </ElementSpacing>
          <p>
            At the beginning of 2020 I accepted an offer to join Walmart as a senior engineer. My
            initial role was lead UI designer &amp; developer for a data management system that
            would power Walmart's next-gen pharmacy software. 10 months later I would be promoted to
            tech lead of the Insurance &amp; Claims team. As tech lead I managed and supported a
            team of over 10 engineers as we developed services allowing teams within Walmart to
            access insurance data. These services included REST APIs, GraphQL APIs, and Kafka event
            streams.
          </p>
        </Animator>

        <Animator containerType={ContainerType.ImageSquare}>
          <picture>
            <source
              srcSet={require(`../../public/images/work/walmart/about.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/walmart/about.png`)} />
          </picture>
        </Animator>
      </DoubleColumn>

      <Animator containerType={ContainerType.CenterBanner} backgroundColor={Color.silver}>
        <FontColor color={Color.darkGray}>
          <ElementSpacing>
            <TextCenter>
              <h2>Challenges</h2>
            </TextCenter>
          </ElementSpacing>
          <p>
            The first challenge presented to me at Walmart was to design and lead the UI development
            for a data management application. This would include creating a design system
            consisting of specific components and design patterns, architecting supporting systems,
            and developing the UI. After being promoted to tech lead I faced new challenges like
            planning and managing the work for a team of over 10 engineers, architecting solutions
            to legacy system problems, and finding time to sleep.
          </p>
        </FontColor>
      </Animator>

      <DoubleColumn>
        <Animator containerType={ContainerType.ContentSquare} backgroundColor={work.color}>
          <ElementSpacing>
            <h2>Design</h2>
          </ElementSpacing>
          <p>
            During my time at Walmart I would often take up the role of lead designer. This was
            certainly the case for my first project the data management system. The first step after
            being tasked to design and develop the UI for the data management system was discovery.
            I started by connecting with the stakeholders &amp; users and documented the
            requirements. After discovery I started on the UI designs. Using Figma I designed many
            screens, and then componentized the elements that were reused. I developed design
            patterns to ensure consistency in the way users would interact with the application.
            After a few iterations I put together designs I was really proud of, and the
            stakeholders loved.
          </p>
        </Animator>
        <Animator containerType={ContainerType.ImageSquare}>
          <picture>
            <source
              srcSet={require(`../../public/images/work/walmart/design.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/walmart/design.png`)} />
          </picture>
        </Animator>
      </DoubleColumn>

      <DoubleColumn reverse={true}>
        <Animator containerType={ContainerType.ContentSquare} backgroundColor={Color.silver}>
          <FontColor color={Color.darkGray}>
            <ElementSpacing>
              <h2>Development</h2>
            </ElementSpacing>
            <p>
              At Walmart I was able to work with amazingly smart engineers who helped push my
              development practices to new levels. I was able to advance my knowledge of TypeScript,
              React, Next.js, and Node, but more importantly I learned what development at a top
              tech company looks like. Walmart has an amazing cloud platform that makes it
              painlessly easy to add CI/CD, logging, alerting, and much more to your project by
              committing a single file to your repo. On top of all of that, I learned development
              practices necessary to prevent, and debug, problems at the scale of the top retail
              company in the world.
            </p>
          </FontColor>
        </Animator>
        <Animator containerType={ContainerType.ImageSquare}>
          <picture>
            <source
              srcSet={require(`../../public/images/work/walmart/development.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/walmart/development.png`)} />
          </picture>
        </Animator>
      </DoubleColumn>

      <DoubleColumn>
        <Animator containerType={ContainerType.ContentSquare} backgroundColor={work.color}>
          <ElementSpacing>
            <h2>Architecture</h2>
          </ElementSpacing>
          <p>
            What I enjoyed most at Walmart was architecting solutions. With a lively mix of modern
            and dinosaur-aged software the problems I faced were challenging and required creative
            solutions. Using various tools from Lucidchart, Drawio, and even Figma I designed many
            architecture diagrams which I would add to a Confluence page and document the system
            that would be developed.
          </p>
        </Animator>
        <Animator containerType={ContainerType.ImageSquare}>
          <picture>
            <source
              srcSet={require(`../../public/images/work/walmart/architect.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/walmart/architect.png`)} />
          </picture>
        </Animator>
      </DoubleColumn>

      <SkillsBanner skills={work.skills} />

      <DoubleColumn>
        <Animator containerType={ContainerType.ContentSquare} backgroundColor={work.color}>
          <ElementSpacing>
            <h2>Automated Pull Requests</h2>
          </ElementSpacing>
          <p>
            At Walmart there was no shortage of processes that needed to be automated. During my
            time there I took the initiative on many automation projects. The first was a script
            that would generate a pull request. By running a single command the script would hit
            Jira's API and find the story that belonged to the current working branch. It would then
            get the story's description and other useful information. Then using a Github CLI it
            would create the pull request with the story's information included in the description.
            This process ensured every pull requests included relevant information to make reviewing
            easier.
          </p>
        </Animator>
        <Animator containerType={ContainerType.ImageSquare}>
          <picture>
            <source
              srcSet={require(`../../public/images/work/walmart/pullrequests.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/walmart/pullrequests.png`)} />
          </picture>
        </Animator>
      </DoubleColumn>

      <DoubleColumn reverse={true}>
        <Animator containerType={ContainerType.ContentSquare} backgroundColor={Color.silver}>
          <FontColor color={Color.darkGray}>
            <ElementSpacing>
              <h2>Automated Documentation</h2>
            </ElementSpacing>
            <p>
              The team I was on at Walmart managed pharmacy data and spent most of our time making
              services allowing other teams to use this data. With over 50 services we needed a
              solution for documenting them all, and my only requirement was that it needed to be
              automated. Thankfully the great devs I worked with had the hindsight to include
              OpenAPI in all of their services. Using this I was able to get and parse data for each
              service. I spun up a Next.js project and did some magic to generate a static doc site
              using the OpenAPI document for each service.
            </p>
          </FontColor>
        </Animator>
        <Animator containerType={ContainerType.ImageSquare}>
          <picture>
            <source
              srcSet={require(`../../public/images/work/walmart/documentation.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/walmart/documentation.png`)} />
          </picture>
        </Animator>
      </DoubleColumn>

      <DoubleColumn>
        <Animator containerType={ContainerType.ContentSquare} backgroundColor={work.color}>
          <ElementSpacing>
            <h2>Automated GraphQL Gateway</h2>
          </ElementSpacing>
          <p>
            The next automation opportunity I came across was a GraphQL gateway. Management wanted a
            single GraphQL interface for all of our services, but with so many services doing this
            manually would produce a mountain of maintenance. I figured there must be a solution to
            automate this using OpenAPI, so I started researching. I quickly came across an IBM
            maintained projected called{' '}
            <a
              href="https://github.com/IBM/openapi-to-graphql"
              style={{ textDecoration: 'underline' }}>
              openapi-to-graphql
            </a>
            . I put together a quick POC and to my surprise it worked seamlessly. After engineering
            solutions to problems like keeping the generated schema updated with down-stream service
            changes the GraphQL gateway was in production.
          </p>
        </Animator>
        <Animator containerType={ContainerType.ImageSquare}>
          <picture>
            <source
              srcSet={require(`../../public/images/work/walmart/gateway.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/walmart/gateway.png`)} />
          </picture>
        </Animator>
      </DoubleColumn>

      <Animator containerType={ContainerType.CenterBanner} backgroundColor={Color.darkGray}>
        <ElementSpacing>
          <TextCenter>
            <h2>Results</h2>
          </TextCenter>
        </ElementSpacing>
        <p>
          At Walmart I was able to design, develop, architect, teach, and most importantly learn. I
          worked with amazing engineers utilizing a top-tier tech infrastructure. I learned the ins
          and outs of making software at the scale of a fortune .. 1 company. There's no doubt that
          I learned more during my time at Walmart than anywhere else... so far.
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
