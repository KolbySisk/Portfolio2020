import { Color, ElementSpacing, FontColor, TextCenter } from '../../styles';
import DoubleColumn from '../double-column';
import SkillsBanner from '../skills-banner';
import WorkBanner from '../work-banner';
import AllProjects from '../all-projects';
import NextProject from '../next-project';
import Footer from '../footer';
import Animator, { ContainerType } from '../animator';

export default ({ work, nextWork }: Props) => {
  return (
    <>
      <WorkBanner work={work} />

      <DoubleColumn>
        <Animator containerType={ContainerType.ContentSquare} backgroundColor={Color.darkGray}>
          <ElementSpacing>
            <h2>About</h2>
          </ElementSpacing>
          <p>
            Corkcicle is an Orlando based company devoted to changing up how people sip, taste and
            savor. What started as an endeavor to chill wine to the perfect drinking temp quickly
            evolved into a pursuit to make every sippable experience a better one.
          </p>
        </Animator>
        <Animator containerType={ContainerType.ImageSquare}>
          <picture>
            <source
              srcSet={require(`../../public/images/work/corkcicle/about.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/corkcicle/about.png`)} />
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
            Update and maintain Corkcicle’s Shopify website and supporting infrastructure. Maintain
            a freelance business in my spare time. (While also having my first kid!)
          </p>
        </FontColor>
      </Animator>

      <DoubleColumn>
        <Animator containerType={ContainerType.ContentSquare} backgroundColor={work.color}>
          <FontColor color={Color.black}>
            <ElementSpacing>
              <h2>Shopify</h2>
            </ElementSpacing>
            <p>
              Corkcicle.com is a great example of Shopify done right. While working on the Corkcicle
              website I implemented Shopify best practices to ensure the Corkcicle team was able to
              easily manage and grow their site’s content. I did a lot of work within their custom
              theme, and ended up working with multiple Shopify APIs.
            </p>
          </FontColor>
        </Animator>
        <Animator containerType={ContainerType.ImageSquare}>
          <picture>
            <source
              srcSet={require(`../../public/images/work/corkcicle/shopify.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/corkcicle/shopify.png`)} />
          </picture>
        </Animator>
      </DoubleColumn>

      <DoubleColumn reverse={true}>
        <Animator containerType={ContainerType.ContentSquare} backgroundColor={Color.silver}>
          <FontColor color={Color.darkGray}>
            <ElementSpacing>
              <h2>Freelance</h2>
            </ElementSpacing>
            <p>
              While working my day job at NCR I successfully managed to maintain a freelance
              business in my spare time. I utilized tools for working remotely and managed
              relationships with the Corkcicle team (The Corkcicle team are all awesome people!)
            </p>
          </FontColor>
        </Animator>
        <Animator containerType={ContainerType.ImageSquare}>
          <picture>
            <source
              srcSet={require(`../../public/images/work/corkcicle/freelance.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/corkcicle/freelance.png`)} />
          </picture>
        </Animator>
      </DoubleColumn>

      <SkillsBanner skills={work.skills} />

      <DoubleColumn>
        <Animator containerType={ContainerType.ContentSquare} backgroundColor={work.color}>
          <FontColor color={Color.black}>
            <ElementSpacing>
              <h2>Jack of all trades</h2>
            </ElementSpacing>
            <p>
              My time working with Corkcicle was exciting - I never knew what task they’d have for
              me next. An average month of tasks looked something like: fix 3 Liquid bugs, add a new
              Shopify page, rework the mobile navigation, add a record to the DNS server, integrate
              Facebook marketing. I’d often find myself researching best practices to implement
              something I’ve never done before, which I always enjoyed.
            </p>
          </FontColor>
        </Animator>
        <Animator containerType={ContainerType.ImageSquare}>
          <picture>
            <source
              srcSet={require(`../../public/images/work/corkcicle/handyman.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/corkcicle/handyman.png`)} />
          </picture>
        </Animator>
      </DoubleColumn>

      <DoubleColumn reverse={true}>
        <Animator containerType={ContainerType.ContentSquare} backgroundColor={Color.silver}>
          <FontColor color={Color.darkGray}>
            <ElementSpacing>
              <h2>Optimize</h2>
            </ElementSpacing>
            <p>
              One of the tasks that I was asked to do was audit and create a plan for optimizing the
              site's load time. I presented the team with a plan to optimize the site. After a few
              days of work their site was loading 54% faster.
            </p>
          </FontColor>
        </Animator>
        <Animator containerType={ContainerType.ImageSquare}>
          <picture>
            <source
              srcSet={require(`../../public/images/work/corkcicle/speed.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/corkcicle/speed.png`)} />
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
    </>
  );
};

interface Props {
  work: any;
  nextWork: any;
}
