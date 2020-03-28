import React from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { budgets, Budget } from "./budgetData";
import BudgetItems from "./BudgetItems";
import styled from "styled-components";
import "./App.css";

const App = () => {
  return (
    <MainContainer>
      <Header to="/">Budget Doctor $</Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="budget/:id" element={<BudgetItems />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainContainer>
  );
};

const Home = () => {
  return (
    <>
      <BudgetContainer>
        {budgets.map(props => (
          <BudgetItem key={props.id} {...props} />
        ))}
      </BudgetContainer>
    </>
  );
};

const handleGotoBudget = (id: string, navigate: Function) => {
  navigate(`budget/${id}`);
};

const BudgetItem = ({ id, name }: Budget) => {
  let navigate = useNavigate();
  return (
    <BudgetStyle key={id} onClick={() => handleGotoBudget(id, navigate)}>
      {name}
    </BudgetStyle>
  );
};

const BudgetContainer = styled.ul`
  list-style-type: none;
`;

const BudgetStyle = styled.li`
  background-color: #f4b15e;
  border: solid 0px white;
  padding: 1em 2em;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  font-size: 1.3rem;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
`;

const Header = styled(Link)`
  padding: 1rem;
  font-style: italic;
  font-size: 1.5rem;
  font-weight: bold;
  border: solid 0px white;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const About = () => {
  return <h4>About</h4>;
};

const NotFound = () => {
  return <h4>Not here, sucker!</h4>;
};

export default App;
