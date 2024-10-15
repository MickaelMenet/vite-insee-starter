import { createFileRoute } from "@tanstack/react-router";
import DynamicForm from "components/DynamicForm";

export const Route = createFileRoute("/dynamic")({
    component: () => <DynamicForm />
});
