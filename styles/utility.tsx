import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import { Constant } from './constant';

export const spaced = (multiplyer: number) => Constant.baseSpacing * multiplyer;

export const ElementSpacing: any = styled.span((props: any) => [
  { '*': { marginBottom: spaced(4) } },
]);
