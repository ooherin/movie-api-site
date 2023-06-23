import { css } from "styled-components";

// common
export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const omitText = css`
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Shadow = css`
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
`;
