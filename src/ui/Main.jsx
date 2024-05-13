import styled from "styled-components";

const StyledMain = styled.main`
  display: grid;
  grid-template-rows: 70fr 30fr;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3.2rem;
`;

const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column: 1 / 3;
  row-gap: 3.2rem;
`;

const Img = styled.div`
  width: 100%;
  grid-column: 1 / -1;
`;

const H1 = styled.h1`
  font-size: 4.8rem;
  color: var(--Very-dark-blue);
`;

const ContentSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 3.2rem;
`;

const ContentSectionParagraph = styled.p`
  grid-column: 1 / -1;
  color: var(--Dark-grayish-blue);
`;

const Button = styled.button`
  text-transform: uppercase;
  display: inline-block;
  padding: 1.2rem 2.4rem;
  font-size: 1.8rem;
  background-color: var(--Soft-red);
  color: var(--Off-white);
  letter-spacing: 0.25rem;
  font-weight: 600;
  font-family: inherit;
  border: none;

  transition: 0.2s all ease-in;
  cursor: pointer;

  &:hover {
    color: var(--Off-white);
    background-color: var(--Very-dark-blue);
  }
`;

const Article = styled.article`
  background-color: var(--Very-dark-blue);
  color: var(--Dark-grayish-blue);
  padding: 3.2rem 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & article {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
  }

  & h3 {
    color: var(--Off-white);
    transition: 0.2s all ease-in;
    cursor: pointer;

    &:hover {
      color: var(--Soft-orange);
    }
  }

  & hr {
    height: 0;
    border-color: var(--Dark-grayish-blue);
  }
`;

const StepBox = styled.section`
  display: grid;
  height: 15rem;
  grid-template-columns: repeat(3, 1fr);
  color: var(--Dark-grayish-blue);
  grid-column: -4/-1;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 35fr 65fr;
  column-gap: 2.4rem;
`;

const H2 = styled.h2`
  font-size: 3.6rem;
  color: var(--Soft-orange);
`;

const ImgBox = styled.div`
  background-image: url(${({ $background }) => $background});
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & h3 {
    font-size: 3.2rem;
    color: var(--Grayish-blue);
  }

  & h4 {
    color: var(--Very-dark-blue);
    font-size: 2.2rem;

    transition: 0.3s all ease-in;
    cursor: pointer;

    &:hover {
      color: var(--Soft-red);
    }
  }

  & p {
    font-size: 1.6rem;
  }
`;

const List = [
  {
    img: "/image-retro-pcs.jpg",
    number: "01",
    title: "Reviving Retro PCs",
    text: "What happens when old PCs are given modern upgrades?",
  },
  {
    img: "/image-top-laptops.jpg",
    number: "02",
    title: "Top 10 Laptops of 2022",
    text: "Our best picks for various needs and budgets.",
  },
  {
    img: "/image-gaming-growth.jpg",
    number: "01",
    title: "The Growth of Gaming",
    text: "How the pandemic has sparked fresh opportunities.",
  },
];

function Main() {
  return (
    <StyledMain>
      <HeroSection>
        <Img>
          <img src="/image-web-3-desktop.jpg" />
        </Img>
        <H1>
          {" "}
          The Bright<br></br> Future of <br></br> Web 3.0?
        </H1>
        <ContentSection>
          <ContentSectionParagraph>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </ContentSectionParagraph>
          <div>
            {" "}
            <Button>Read more</Button>
          </div>
        </ContentSection>
      </HeroSection>
      <Article>
        <article>
          <H2>New</H2>
          <div>
            <h3> Hydrogen VS Electric Cars</h3>
            <p> Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <hr />
          <div>
            <h3> The Downsides of AI Artistry</h3>
            <p>
              {" "}
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <hr />
          <div>
            <h3> Is VC Funding Drying Up?</h3>
            <p>
              {" "}
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </article>
      </Article>
      <StepBox>
        {List.map((s, i) => (
          <Container key={i}>
            <ImgBox $background={s.img}></ImgBox>
            <TextBox>
              <h3>{s.number}</h3>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </TextBox>
          </Container>
        ))}
      </StepBox>
    </StyledMain>
  );
}

export default Main;
