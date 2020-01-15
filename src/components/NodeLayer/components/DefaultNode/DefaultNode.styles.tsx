import styled, { css } from "styled-components";

import { lightTheme } from "../../../../themes";

const selected = css`
  background: ${({ theme }) => theme.nodeBackgroundSelected || lightTheme.nodeBackgroundSelected};
  border-color: ${({ theme }) => theme.nodeBorderSelected || lightTheme.nodeBorderSelected};
`;

export const NodeWrapper: any = styled.div`
  display: inline-block;
  width: ${({ width }: any) => width}px;
  color: ${({ theme }) => theme.textColor || lightTheme.textColor};
  background: ${({ theme }) => theme.nodeBackground || lightTheme.nodeBackground};
  border-radius: ${({ theme }) => theme.borderRadius || lightTheme.borderRadius};
  min-height: 108px;
  border: ${({ theme }) => theme.borderWidth || lightTheme.borderWidth} solid ${({ theme }) => theme.borderColor || lightTheme.borderColor};
  ${(props: any) => props.selected && selected};
`;

export const NodeTitle = styled.div`
  padding: .5rem .8rem;
  font-size: 1.1rem;
  height: 36px;
`;

export const NodeSubtitle = styled.div`
  color: ${({ theme }) => theme.textSecondary || lightTheme.textSecondary};
  font-size: .9rem;
`;
