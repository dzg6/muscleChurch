/**
 *
 * Button
 *
 */
import styled, { css } from 'styled-components/macro';

interface TitleProps {
  readonly start?: boolean;
  readonly stop?: boolean;
  readonly log?: boolean;
  readonly reset?: boolean;
}

export const Button = styled.button<TitleProps>`
margin auto;
width: 150px;
height: 75px;
border-radius: 50px;
box-shadow: 0px 2px 4px rgba(0,0,0,.4),
inset 2px 4px 4px rgba(255,255,255,.4);
${props =>
  props.start &&
  css`
    background-image: linear-gradient(to right bottom, #e94eff, #a170a2);
    font-style: italic;
  `}
${props =>
  props.stop &&
  css`
    background-image: linear-gradient(to right bottom, #ff4e4e, #a170a2);
    font-style: italic;
  `}
${props =>
  props.log &&
  css`
    background-image: linear-gradient(to right bottom, #97ffb1, #a170a2);
    font-style: italic;
  `}
${props =>
  props.reset &&
  css`
    margin-top: 15px;
    background-image: linear-gradient(to right bottom, #ffcc03, #a170a2);
    font-style: italic;
  `}

`;
