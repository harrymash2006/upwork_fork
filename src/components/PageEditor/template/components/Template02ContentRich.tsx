import styled from 'styled-components';

export const Template02ContentRich = styled.div<{ color?: string }>`
  * {
    color: ${(props) => props.color || '#FFFFFF'};
    font-size: 14px;
    line-height: 22px;
  }
  ul > li {
    list-style-type: none;
    ::before {
      content: '•';
      margin: 0 5px;
    }
  }
  ol > li {
    list-style-type: decimal;
    margin-left: 20px;
  }
`;
