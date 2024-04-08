import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";

import TodoAddData from "../components/todo/add-data.vue";
import DataNotFound from "../components/todo/data-not-found.vue";
import Search from "../components/todo/search.vue";

import Index from "../pages/index.vue";

describe("TodoAddData", () => {
  it("should render the component", () => {
    const wrapper = mount(TodoAddData);
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe("DataNotFound", () => {
  it("should render the component", () => {
    const wrapper = mount(DataNotFound);
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe("Search", () => {
  it("should render the component", () => {
    const wrapper = mount(Search);
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe("Index", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(Index);
  });

  it("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it("initial state is correct", () => {
    expect(wrapper.vm.todoList).toEqual([]);
    expect(wrapper.vm.todoInput).toBe("");
    expect(wrapper.vm.searchTodo).toBe("");
  });

  it("adds a new todo item correctly", async () => {
    await wrapper.setData({ todoInput: "New Todo" });
    await wrapper.vm.onSubmit();
    expect(wrapper.vm.todoList).toEqual([
      { id: 1, name: "New Todo", isDone: false, isEdit: false },
    ]);
  });

  it("removes a todo item correctly", async () => {
    await wrapper.setData({
      todoList: [{ id: 1, name: "New Todo", isDone: false, isEdit: false }],
    });
    await wrapper.vm.onRemove(0);
    expect(wrapper.vm.todoList).toEqual([]);
  });

  it("toggles isDone property of a todo item correctly", async () => {
    await wrapper.setData({
      todoList: [{ id: 1, name: "New Todo", isDone: false, isEdit: false }],
    });
    await wrapper.vm.onToggleCheck(0);
    expect(wrapper.vm.todoList[0].isDone).toBe(true);
  });

  it("filters the todo list correctly", async () => {
    await wrapper.setData({
      todoList: [
        { id: 1, name: "First Todo", isDone: false, isEdit: false },
        { id: 2, name: "Second Todo", isDone: false, isEdit: false },
      ],
      searchTodo: "First",
    });
    expect(wrapper.vm.filteredTodo).toEqual([
      { id: 1, name: "First Todo", isDone: false, isEdit: false },
    ]);
  });
});
