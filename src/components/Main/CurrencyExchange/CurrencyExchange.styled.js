import styled from '@emotion/styled';

export const MainStyled = styled.main`
  h1 {
    text-align: center;
    color: #83c9f4;
    transition: all 500ms cubic-bezier(0.2, 0, 0, 1);
    padding: 15px;
  }

  h1:hover {
    font-size: 45px;
  }

  form {
    display: flex;
    justify-content: space-around;
    align-items: center;

    padding: 0 300px;

    label {
      display: flex;
      align-items: center;
      //   flex-direction: column;

      select {
        margin-left: 5px;
        height: 35px;

        border-color: #83c9f4;
        outline-color: none;

        cursor: pointer;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.25;
        letter-spacing: 0.03em;
        border: 1px solid rgba(255, 255, 255, 0.3);
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
        border-radius: 4px;
      }

      input {
        width: 200px;
        height: 30px;

        border-color: #83c9f4;

        cursor: pointer;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.25;
        letter-spacing: 0.03em;
        border: 1px solid rgba(255, 255, 255, 0.3);
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
        border-radius: 4px;

        margin-left: 1px;
      }

      input:hover,
      input:focus,
      select:hover,
      select:focus {
        border-color: #83c9f4;
      }

      b {
        font-size: 20px;
      }
    }
  }
`;
