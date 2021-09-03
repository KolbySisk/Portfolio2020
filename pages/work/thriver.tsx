import ReactPlayer from 'react-player';
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
  const { work, nextWork } = useWork('thriver');
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
            One day in the summer of 2021 I was searching the app store for a flashcards app I could
            use to help teach my son simple fundamentals like the ABCs. There was only one option
            that was designed well, but it lacked features I wanted, like being able to shuffle the
            cards, and data analytics to track progress. So, I decided to build it myself. My son
            and I enjoyed the process so much that I decided to start a company making educational
            apps for children, and thus Thriver Inc. was born.
          </p>
        </Animator>

        <Animator containerType={ContainerType.ImageSquare}>
          <picture>
            <source
              srcSet={require(`../../public/images/work/thriver/about.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/thriver/about.png`)} />
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
            This project included many unique challenges compared to my previous projects. To
            accomplish my goals for this project I would need to design and build apps (easy peasy),
            document a strategic road map of products to release (intriguing), architect a solution
            for sharing code between apps (interesting), incorporate a company (newfangled), market
            the apps and acquire customers (necessary), ???, profit (hopefully).
          </p>
        </FontColor>
      </Animator>

      <DoubleColumn>
        <Animator containerType={ContainerType.ContentSquare} backgroundColor={work.color}>
          <ElementSpacing>
            <h2>Discovery &amp; Design</h2>
          </ElementSpacing>
          <p>
            With all my projects the first steps are doing discovery and then wireframing. So I
            grabbed a fresh dot-grid notebook and I jotted down some ideas, the different types of
            flashcard <i>decks</i>, a list of features I wanted to include, and some wireframes.
            Then I moved to Figma and started producing the high fidelity designs. Next steps were
            to design the tech stack and start development. Since I have a ton of React experience I
            decided to go with React Native. For the backend I went serverless and used Firebase,
            Firestore, and RevenueCat.
          </p>
        </Animator>
        <Animator containerType={ContainerType.ImageSquare}>
          <picture>
            <source
              srcSet={require(`../../public/images/work/thriver/design.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/thriver/design.png`)} />
          </picture>
        </Animator>
      </DoubleColumn>

      <DoubleColumn reverse={true}>
        <Animator containerType={ContainerType.ContentSquare} backgroundColor={Color.silver}>
          <FontColor color={Color.darkGray}>
            <ElementSpacing>
              <h2>Flashcards</h2>
            </ElementSpacing>
            <p>
              The first Thriver app is a feature-rich flashcards app. My goals when designing this
              app were to keep the UI simple, and add in accents of excitement and fun to grab the
              interest of kids. I had a list of features I wanted to develop that included:
            </p>
            <ul style={{ listStyle: 'inside', marginTop: 8 }}>
              <li>
                <b>Profiles</b> - Allowing multiple kids to play under a single account.
              </li>
              <li>
                <b>Data Analytics Dashboard</b> - To track history, progress, and other analytics
                useful for targeted education.
              </li>
              <li>
                <b>Gamification</b> - Every game played will earn the player stars. Stars can be
                used to buy stickers that can be placed on a virtual sticker board.
              </li>
              <li>
                <b>Premium Subscriptions</b> - Thriver apps will use a freemium model with premium
                features.
              </li>
            </ul>
          </FontColor>
        </Animator>
        <Animator containerType={ContainerType.ImageSquare}>
          <ReactPlayer
            url="/images/work/thriver/flashcards.mp4"
            width="100%"
            height="100%"
            loop={true}
            playing={true}
            controls={true}
            volume={0}
          />
        </Animator>
      </DoubleColumn>

      <DoubleColumn>
        <Animator containerType={ContainerType.ContentSquare} backgroundColor={work.color}>
          <ElementSpacing>
            <h2>Scaling</h2>
          </ElementSpacing>
          <p>
            After designing the second app - a set of minigames played using a spelling list - I
            noticed the opportunity to reuse a lot of code. Components, Contexts, Data, Factories,
            Hooks, Screens, Styles, Types, Utils would all be included in a repo that could be
            shared between all of the Thriver apps. To make this work I utilized Github Packages -
            allowing me to publish and consume the repo like any other npm package, but private to
            Thriver. This allows me to spin up new apps in minutes that include navigation,
            settings, authentication, sticker store, sticker board, and more!
          </p>
        </Animator>
        <Animator containerType={ContainerType.ImageSquare}>
          <picture>
            <source
              srcSet={require(`../../public/images/work/thriver/scaling.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/thriver/scaling.png`)} />
          </picture>
        </Animator>
      </DoubleColumn>

      <SkillsBanner skills={work.skills} />

      <DoubleColumn>
        <Animator containerType={ContainerType.ContentSquare} backgroundColor={work.color}>
          <ElementSpacing>
            <h2>Founding</h2>
          </ElementSpacing>
          <p>
            Thriver Inc. was my first exploration into incorporating a company. It was a quick and
            painless process thanks to Clerky. In less than a week Thriver Inc. was a legal company
            and I had everything I needed to start accepting payments and publishing apps. Next I
            bought domain names, set up email addresses, registered social media accounts, set up
            app store accounts, and finally I was ready to get back to designing and coding.
          </p>
        </Animator>
        <Animator containerType={ContainerType.ImageSquare}>
          <picture>
            <source
              srcSet={require(`../../public/images/work/thriver/founding.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/thriver/founding.png`)} />
          </picture>
        </Animator>
      </DoubleColumn>

      <DoubleColumn reverse={true}>
        <Animator containerType={ContainerType.ContentSquare} backgroundColor={Color.silver}>
          <FontColor color={Color.darkGray}>
            <ElementSpacing>
              <h2>Branding</h2>
            </ElementSpacing>
            <p>
              With a name finalized the next thing I wanted to do was the company branding. I
              sketched a few logo concepts before diving into Illustrator and finalizing a logo I
              really like. I designed a color palette, app icon, social media images, splash page,
              and a simple{' '}
              <a href="https://www.thriverstudio.com" style={{ textDecoration: 'underline' }}>
                placeholder website
              </a>
              .
            </p>
          </FontColor>
        </Animator>
        <Animator containerType={ContainerType.ImageSquare}>
          <picture>
            <source
              srcSet={require(`../../public/images/work/thriver/branding.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/thriver/branding.png`)} />
          </picture>
        </Animator>
      </DoubleColumn>

      <DoubleColumn>
        <Animator containerType={ContainerType.ContentSquare} backgroundColor={work.color}>
          <ElementSpacing>
            <h2>Marketing</h2>
          </ElementSpacing>
          <p>
            Marketing is an area where I have little experience. Luckily my good friend Drew Bolles
            and his team at{' '}
            <a href="https://bollesmedia.com" style={{ textDecoration: 'underline' }}>
              Bolles Media
            </a>{' '}
            were able to help me out. They introduced me to HubSpot, a CRM where I can manage things
            like contacts, leads, support tickets, and customer services. Next we did some search
            engine optimization, built an advertising strategy focusing on social media and pay per
            click ads, and ultimately laid a foundation that is ready to scale as Thriver grows.
          </p>
        </Animator>
        <Animator containerType={ContainerType.ImageSquare}>
          <picture>
            <source
              srcSet={require(`../../public/images/work/thriver/marketing.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/thriver/marketing.png`)} />
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
          In 2 months I was able design and develop the first Thriver app. Design and start
          development on the second app which I was able to bootstrap the base functionality by
          utilizing a shared library. I incorporated the company and setup accounts on all the
          necessary platforms. Then I designed the branding, laid out the marketing foundation,
          built a simple website, and deployed the first Thriver app to the App Store. All this in
          my spare time, which is sparse these days 😅. The next steps are to deploy to Google Play,
          and finish the next app. Long term I want to grow Thriver's offering to include a suite of
          educational apps and a premium subscription that gives you full access to all of them.
          Wish me luck!
        </p>
      </Animator>

      <DoubleColumn>
        <AllProjects />
        <div style={{ width: '75%' }}>
          <NextProject work={nextWork} />
        </div>
      </DoubleColumn>
      <Footer />

      <ContactSection />
    </>
  );
};
