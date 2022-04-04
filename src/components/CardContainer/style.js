import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 600px;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 250px;
  gap: 20px 40px;
  flex-wrap: wrap;
  background-color: ${props => props.theme.colors.bg_default};
  overflow-y: scroll;


  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.bg_default_dark};
  }
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.bg_light};
    height: 50px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
