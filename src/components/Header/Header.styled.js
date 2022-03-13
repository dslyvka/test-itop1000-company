import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  @media screen and (max-width: 480px) {
    width: 150%;
  }
  padding: 0 15px;
  a:visited {
    color: #a3d5ff;
  }

  a {
    color: #a3d5ff;
    text-decoration: none;

    width: 40px;
    height: 40px;

    font-size: 30px;

    border: 2px solid #83c9f4;
    border-radius: 50%;

    padding: 10px;

    transition: all 300ms cubic-bezier(0.2, 0, 0, 1);
  }

  a:hover,
  a:focus {
    color: black;
    border-radius: 10%;
  }

  display: flex;
  align-items: center;

  ul {
    list-style: none;
    display: block;
    position: relative;
    text-decoration: none;
    color: #000;
    padding: 0;
    margin-left: 15px;

    @media screen and (max-width: 480px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: center;
      margin: 0 auto;
    }

    @media screen and (max-width: 480px) {
      li:last-child {
        margin-left: 5px;
      }
    }
  }

  ul:before,
  ul:after {
    content: '';
    position: absolute;
    top: 100%;
    width: 15%;
    height: 3px;
    background: #83c9f4;
    transition: all 350ms cubic-bezier(0.2, 0, 0, 1);
  }
  ul:before {
    left: 50%;
  }
  ul:after {
    right: 50%;
  }
  ul:hover:before,
  ul:hover:after {
    width: 50%;
  }

  border-bottom: 1px solid #88ccf1;
`;
