import { FaLink } from 'react-icons/fa';
import { Color, ElementSpacing, FontColor, TextCenter } from '../../styles';
import WorkBanner from '../../components/work-banner';
import SkillsBanner from '../../components/skills-banner';
import DoubleColumn from '../../components/double-column';
import AllProjects from '../../components/all-projects';
import NextProject from '../../components/next-project';
import Footer from '../../components/footer';
import Animator, { ContainerType } from '../../components/animator';
import ContactSection from '../../components/contact-section';
import { useWork } from '../../hooks/use-work';
import { useTitle } from '../../hooks/use-title';

export default () => {
  const { work, nextWork } = useWork('data-inc');
  useTitle(`Kolby Sisk - ${work?.title}`);

  return (
    <>
      <WorkBanner work={work} />
      <DoubleColumn>
        <Animator containerType={ContainerType.ContentSquare} backgroundColor={Color.darkGray}>
          <ElementSpacing>
            <h2>About</h2>
          </ElementSpacing>
          <p>
            From 2014 to 2017 I worked at a small company called DATA, Inc. DATA specializes in
            Kentico - a CMS built for the Windows ecosystem using ASP.NET and SQL Server. DATA works
            primarily with government and commercial professionals in education, engineering, and
            medical sectors. During these 3 years I learned the Windows development ecosystem,
            worked on many Kentico sites, built and published mobile apps, and made some great
            friends.
          </p>
        </Animator>

        <Animator containerType={ContainerType.ImageSquare}>
          {/* <picture>
            <source
              srcSet={require(`../../public/images/work/nui/about.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/nui/about.png`)} />
          </picture> */}
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
            Learn Kentico and the Windows ecosystem - ASP.NET, .NET Core, Entity Framework, SQL
            Server, IIS, Azure. Work with a small team using these technologies to build Kentico and
            .NET apps. Use mobile technologies like Ionic to build and publish mobile apps.
          </p>
        </FontColor>
      </Animator>

      <DoubleColumn>
        <Animator containerType={ContainerType.ContentSquare} backgroundColor={work.color}>
          <ElementSpacing>
            <h2>CEMM Library</h2>
          </ElementSpacing>
          <ElementSpacing>
            <p>
              CEMM, short for Airforce Center of Excellence for Medical Multimedia, is an initiative
              from the Office of the Surgeon General to supply multimedia to support education
              throughout the Military Health System. CEMM Library is a solution to centralize all of
              their multimedia content. With a 2 person team we built a Netflix style web app. My
              role on this project was the front-end dev. I used React and Redux to build the
              front-end. I also created API endpoints using .NET Core.
            </p>
          </ElementSpacing>
          <a href="https://www.cemmlibrary.org" target="_blank">
            <FaLink style={{ fontSize: 12 }} /> View live project
          </a>
        </Animator>
        <Animator containerType={ContainerType.ImageSquare}>
          {/* <picture>
            <source
              srcSet={require(`../../public/images/work/nui/architecture.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/nui/architecture.png`)} />
          </picture> */}
        </Animator>
      </DoubleColumn>
      <DoubleColumn reverse={true}>
        <Animator containerType={ContainerType.ContentSquare} backgroundColor={Color.silver}>
          <FontColor color={Color.darkGray}>
            <ElementSpacing>
              <h2>Colorado Admissions Tool</h2>
            </ElementSpacing>
            <ElementSpacing>
              <p>
                Colorado Admissions Tool is a tool that helps Coloradans determine which educational
                institution is the best fit for them. They start by going through a wizard that
                collects their education info such as GPA, ACT/SAT scores, class grades. Then with
                this information an algorithm determines which schools the user is likely to be
                accepted into, along with other useful information. My role on this project was the
                front-end dev, and I also created API endpoints. For this project I used Angular and
                .Net Core.
              </p>
            </ElementSpacing>
            <a href="https://www.coadmissionstool.org" target="_blank">
              <FaLink style={{ fontSize: 12 }} /> View live project
            </a>
          </FontColor>
        </Animator>
        <Animator containerType={ContainerType.ImageSquare}>
          {/* <picture>
            <source
              srcSet={require(`../../public/images/work/nui/leadership.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/nui/leadership.png`)} />
          </picture> */}
        </Animator>
      </DoubleColumn>
      <DoubleColumn>
        <Animator containerType={ContainerType.ContentSquare} backgroundColor={work.color}>
          <ElementSpacing>
            <h2>4A0X1</h2>
          </ElementSpacing>
          <ElementSpacing>
            <p>
              4A0X1 is an app made for the Airforce Center of Excellence for Medical Multimedia. The
              goal was to create an app that served as an informational management system used to
              share information to military personnel. I was tasked to build and publish the app. I
              developed the app using Ionic and then went through the publishing process for the
              Apple App Store, Google Play store, and Windows App store.
            </p>
          </ElementSpacing>
          <a href="https://apps.apple.com/us/app/4a0x1/id996640605" target="_blank">
            <FaLink style={{ fontSize: 12 }} /> View live project
          </a>
        </Animator>
        <Animator containerType={ContainerType.ImageSquare}>
          {/* <picture>
            <source
              srcSet={require(`../../public/images/work/nui/systems.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/nui/systems.png`)} />
          </picture> */}
        </Animator>
      </DoubleColumn>
      <SkillsBanner skills={work.skills} />
      <DoubleColumn reverse={true}>
        <Animator containerType={ContainerType.ContentSquare} backgroundColor={Color.silver}>
          <FontColor color={Color.darkGray}>
            <ElementSpacing>
              <h2>ServSafe</h2>
            </ElementSpacing>
            <ElementSpacing>
              <p>
                ServSafe is a food and beverage safety training and certificate program administered
                by the National Restaurant Association. Sanitation certification is required by most
                restaurants as a basic credential for their management staff. The goal was to create
                a web app using Kentico that would help restaurants get certified. I was tasked with
                the front-end and Kentico development.
              </p>
            </ElementSpacing>

            <a href="https://www.servsafe.com" target="_blank">
              <FaLink style={{ fontSize: 12 }} /> View live project
            </a>
          </FontColor>
        </Animator>
        <Animator containerType={ContainerType.ImageSquare}>
          {/* <picture>
            <source
              srcSet={require(`../../public/images/work/nui/components.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/nui/components.png`)} />
          </picture> */}
        </Animator>
      </DoubleColumn>
      <DoubleColumn>
        <Animator containerType={ContainerType.ContentSquare} backgroundColor={work.color}>
          <ElementSpacing>
            <h2>NRA Show</h2>
          </ElementSpacing>
          <ElementSpacing>
            <p>
              Every year the National Restaurant Association has a conference that features more
              than 40,000 restaurant industry executives. The goal was to create a web app using
              Kentico and Angular to help manage and display all of the conference data. I was
              tasked with the front-end development, Kentico development, and creating an API using
              ASP.NET.
            </p>
          </ElementSpacing>

          <a href="https://www.nationalrestaurantshow.com" target="_blank">
            <FaLink style={{ fontSize: 12 }} /> View live project
          </a>
        </Animator>
        <Animator containerType={ContainerType.ImageSquare}>
          {/* <picture>
            <source
              srcSet={require(`../../public/images/work/nui/teaching.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/nui/teaching.png`)} />
          </picture> */}
        </Animator>
      </DoubleColumn>

      <Animator containerType={ContainerType.CenterBanner} backgroundColor={Color.darkGray}>
        <ElementSpacing>
          <TextCenter>
            <h2>Results</h2>
          </TextCenter>
        </ElementSpacing>
        <p>
          During my time at DATA I worked with an amazing group of engineers and learned a ton. I
          learned to develop apps and do devops in the Windows ecosystem. I built mobile apps using
          Ionic and went through the gruelling process of publishing apps to the app stores. But
          most importantly of all, I learned how to add Windows path environment variables.
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
