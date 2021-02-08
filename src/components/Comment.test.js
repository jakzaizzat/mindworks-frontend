import React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import Comments from "./Comments";

afterEach(cleanup);
const commentsData = [
  {
    postId: 1,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body:
      "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
  },
  {
    postId: 1,
    id: 2,
    name: "quo vero reiciendis velit similique earum",
    email: "Jayne_Kuhic@sydney.com",
    body:
      "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
  },
];

const setup = () => {
  const { container } = render(<Comments comments={commentsData} />);
  return { container };
};

test("render comment component", () => {
  const { container } = setup();
  const title = container.querySelector("h3");
  expect(title.textContent).toBe("Comments");
});

test("render comment based on data", () => {
  const { container } = setup();
  const commentEl = container.querySelectorAll(".comment");
  expect(commentEl.length).toBe(2);
});

test("filter comment by email", () => {
  const { container } = setup();
  const searchInput = container.querySelector("input");

  fireEvent.change(searchInput, { target: { value: "eliseo" } });

  const commentsEl = container.querySelectorAll("input");
  expect(commentsEl.length).toBe(1);
});

test("filter comment by name", () => {
  const { container } = setup();
  const searchInput = container.querySelector("input");

  fireEvent.change(searchInput, { target: { value: "laborum" } });

  const commentsEl = container.querySelectorAll("input");
  expect(commentsEl.length).toBe(1);
});

test("filter comment by body", () => {
  const { container } = setup();
  const searchInput = container.querySelector("input");

  fireEvent.change(searchInput, { target: { value: "natus" } });

  const commentsEl = container.querySelectorAll("input");
  expect(commentsEl.length).toBe(1);
});
