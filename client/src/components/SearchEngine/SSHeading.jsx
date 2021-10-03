import styled from "styled-components";

export default function SSHeading() {
  const Flex = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 25%);
    gap: 2%;
    width: 80%;
    color: #b9b9b9;
    margin: 1% auto;
  `;

  return (
    <Flex>
      <div>TOP RESULTS</div>
      <div>SONGS</div>
      <div>AlBUM</div>
      <div>RECENT SEARCHES</div>
    </Flex>
  );
}
