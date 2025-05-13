import InboxScreen from "./InboxScreen";

import store from "../lib/store";

import { http, HttpResponse } from "msw";

import { MockedState } from "./TaskList.stories";

import { Provider } from "react-redux";

import {
  fireEvent,
  waitFor,
  within,
  waitForElementToBeRemoved,
} from "@storybook/test";

export default {
  component: InboxScreen,
  title: "InboxScreen",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {
  parameters: {
    msw: {
      handlers: [
        http.get("https://jsonplaceholder.typicode.com/todos?userId=1", () => {
          return HttpResponse.json(MockedState.tasks);
        }),
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // 컴포넌트가 로딩 상태에서 전환될 때까지 기다림
    await waitForElementToBeRemoved(await canvas.findByTestId("loading"));
    // store를 기반으로 컴포넌트가 업데이트될 때까지 기다림
    await waitFor(async () => {
      // 첫 번째 task를 고정(pinned) 시뮬레이션
      await fireEvent.click(canvas.getByLabelText("pinTask-1"));
      // 세 번째 task를 고정(pinned) 시뮬레이션
      await fireEvent.click(canvas.getByLabelText("pinTask-3"));
    });
  },
};

export const Error = {
  parameters: {
    msw: {
      handlers: [
        http.get("https://jsonplaceholder.typicode.com/todos?userId=1", () => {
          return new HttpResponse(null, {
            status: 403,
          });
        }),
      ],
    },
  },
};
