import GlobalStyle from "../Styles/GlobalStyle";
import styled from "styled-components";
import palavras from "./palavras";
import alfabeto from "./alfabeto";
import forca0 from "../Images/forca0.png";
import forca1 from "../Images/forca1.png";
import forca2 from "../Images/forca2.png";
import forca3 from "../Images/forca3.png";
import forca4 from "../Images/forca4.png";
import forca5 from "../Images/forca5.png";
import forca6 from "../Images/forca6.png";

function LetterButtons(props) {
  return (
    <li>
      <Option>{props.letter.toUpperCase()}</Option>
    </li>
  );
}

export default function App() {
  return (
    <>
      <Game>
        <Forca src={forca0} />

        <Container>
          <ChooseWordButton>Escolher Palavra</ChooseWordButton>

          <AA>_ _ _ _ _ _ _ _ _ _ _ _</AA>
        </Container>

        <Alphabet>
          {alfabeto.map((a, index) => (
            <LetterButtons key={index} letter={a} />
          ))}
        </Alphabet>

        <Guess>
          Já sei a palavra!
          <input type="text" />
          <button>Chutar</button>
        </Guess>
      </Game>
      <GlobalStyle />
    </>
  );
}

const Game = styled.div`
  width: 650px;
  height: 600px;
  background-color: aquamarine;
  margin: 10px auto;
  * {
    font-family: "Roboto", sans-serif;
  }
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const Forca = styled.img`
  width: 320px;
  height: 375px;
`;

const Container = styled.div`
  height: 335px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  flex-direction: column;
  background-color: red;
  margin-right: 30px;
  box-sizing: border-box;
`;

const ChooseWordButton = styled.button`
  width: 150px;
  height: 40px;
  background-color: #27ae60;
  border-radius: 7px;
  font-size: 15px;
  font-weight: 600;
  color: white;
  border: none;
  transition-duration: 0.4s;
  margin-top: 25px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;

const AA = styled.div`
  font-size: 30px;
`;

const Alphabet = styled.ul`
  background-color: yellow;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 20px 40px;
  height: 84px;
`;

const Option = styled.button`
  width: 32px;
  height: 32px;
  background-color: #e1ecf4;
  color: #39739d;
  font-weight: 700;
  font-size: 15px;
  border: 1px solid #39739d;
  border-radius: 3px;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background-color: #008cba;
    color: white;
  }
`;

const Guess = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;

  input {
    margin: 0 10px;
    width: 300px;
    height: 25px;
    border: 2px solid black grey ;
    border-radius: 5px;
  }

  button {
    width: 70px;
    height: 35px;
    background-color: #e1ecf4;
    color: #39739d;
    font-weight: 700;
    font-size: 15px;
    border: 1px solid #39739d;
    border-radius: 3px;
  }
`;
