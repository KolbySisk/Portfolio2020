import styled from '@emotion/styled';
import { Color, spaced, Constant, MediaQuery, BreakPoint } from '../../styles';

export const Root: any = styled.section({});

export const ToggleButton: any = styled.button({
  position: 'fixed',
  bottom: 20,
  right: 20,
  backgroundColor: Color.black,
  color: Color.white,
  borderRadius: 50,
  padding: spaced(2),
  boxShadow: `0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)`,
  transition: `all 0.3s cubic-bezier(.25,.8,.25,1)`,
  ':hover': {
    boxShadow: `0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)`,
  },
  zIndex: 2,
});

export const Form: any = styled.form((props: any) => [
  {
    position: 'fixed',
    top: props.open ? '50%' : '-5%',
    left: '50%',
    transform: props.open ? 'translate(-50%, -50%)' : 'translate(-50%, -100%)',
    backgroundColor: Color.black,
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    color: Color.white,
    width: '80%',
    maxWidth: 600,
    padding: spaced(8),
    borderRadius: Constant.borderRadius,
    boxShadow: `0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)`,
    transition: `all 0.3s cubic-bezier(.25,.8,.25,1)`,
  },
  MediaQuery(BreakPoint.medium, {
    padding: spaced(4),
  }),
]);

const backdropColors = [Color.red, Color.blue, Color.purp, Color.green];

export const Backdrop: any = styled.div((props: any) => [
  {
    position: 'fixed',
    backgroundColor: backdropColors[Math.floor(Math.random() * backdropColors.length)],
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    opacity: props.open ? 1 : 0,
    transition: `all 0.5s cubic-bezier(.25,.8,.25,1)`,
    pointerEvents: props.open ? 'auto' : 'none',
  },
]);

export const TextField: any = styled.div({
  marginBottom: spaced(3),
  display: 'flex',
  flexDirection: 'column',
});

export const TextFieldLabel: any = styled.label({
  marginBottom: spaced(1),
});

export const TextFieldInput: any = styled.input({
  height: spaced(5),
  padding: spaced(1),
  width: '100%',
  borderRadius: Constant.borderRadius,
  fontSize: 14,
});

export const TextFieldArea: any = styled.textarea([
  {
    height: spaced(25),
    padding: spaced(1),
    borderRadius: Constant.borderRadius,
    fontSize: 14,
  },
  MediaQuery(BreakPoint.medium, {
    height: spaced(10),
  }),
]);

export const Submit: any = styled.button({
  backgroundColor: Color.white,
  color: Color.black,
  padding: spaced(2),
  borderRadius: Constant.borderRadius,
});

export const Thanks: any = styled.div([
  {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: Color.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Constant.borderRadius,
    h2: {
      color: Color.black,
    },
  },
]);
