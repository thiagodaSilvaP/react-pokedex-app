import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 600px;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 250px;
  gap: 20px 40px;
  flex-wrap: wrap;
  background-color: #aaa;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #aaa;
  }
  &::-webkit-scrollbar-thumb {
    background: #f1f1f1;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
