// @flow
import type { OwnProps } from '../../../../src/view/droppable/droppable-types';
import mount from './util/mount';
import { homeOwnProps as defaultOwnProps } from './util/get-props';

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterAll(() => {
  // $FlowFixMe
  console.error.mockReset();
});

it('should throw if no droppableId is provided', () => {
  const ownProps: OwnProps = {
    ...defaultOwnProps,
  };

  // $ExpectError - not provided
  ownProps.droppableId = undefined;
  expect(() => mount({ ownProps })).toThrow();

  // $ExpectError - not a string
  ownProps.droppableId = null;
  expect(() => mount({ ownProps })).toThrow();

  // $ExpectError - using number
  ownProps.droppableId = 3;
  expect(() => mount({ ownProps })).toThrow();
});

it('should throw if isDropDisabled is set to null', () => {
  const ownProps: OwnProps = {
    ...defaultOwnProps,
  };
  // $ExpectError - null
  ownProps.isDropDisabled = null;
  expect(() => mount({ ownProps })).toThrow();
});

it('should throw if isCombineEnabled is set to null', () => {
  const ownProps: OwnProps = {
    ...defaultOwnProps,
  };
  // $ExpectError - null
  ownProps.isCombineEnabled = null;
  expect(() => mount({ ownProps })).toThrow();
});

it('should throw if ignoreContainerClipping is set to null', () => {
  const ownProps: OwnProps = {
    ...defaultOwnProps,
  };
  // $ExpectError - null
  ownProps.ignoreContainerClipping = null;
  expect(() => mount({ ownProps })).toThrow();
});
