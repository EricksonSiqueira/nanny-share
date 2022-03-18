import styled from 'styled-components';
import theme from '../../theme';

export default styled.section`
  height: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 100px;

  img.hero-bg {
    background: linear-gradient(314.72deg, #C86DD7 -1.5%, #7E49C3 39.43%, #5912AC 86.02%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
  }
  button.playBtn {
    background-color: rgba(0, 0, 0, 0);
  }

  article {
    width: 100%;
    height: 400px;
    margin-bottom: 60px;
  }

  article section.hapu-txt {
    margin-top: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 70px;
    gap: 16px;
  }

  article section.hapu-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 32px;
    gap: 16px;
  }

  article section.hapu-btn a {
    color: ${theme.colors.white};
  }

  h2, p {
    color: ${theme.colors.white};
    text-align: center;
  }

  h2 {
    max-width: 260px;
  }

  p {
    max-width: 310px;
  }

  @media ${`screen and (min-width: ${theme.breakpoints.md})`} {
    min-height: 620px;
    flex-direction: row;
    justify-content: space-around;

    article {
      width: 600px;
    }

    article section.hapu-txt {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-bottom: 50px;
      gap: 24px;
    }

    article section.hapu-btn {
      justify-content: flex-start;
      gap: 16px;
    }

    h1 {
      max-width: 490px;
    }

    p {
      max-width: 570px;
      font-weight: lighter;
    }

    h2, p {
      text-align: left;
    }

    img.nanny-connection {
      padding-right: 120px;
    }
  }
`;
