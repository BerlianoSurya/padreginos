import { render } from "vitest-browser-react";
import { expect, test } from "vitest";
import Pizza from "../Pizza";

test("alt text renders on image", async () => {
  const name = "my fav pizza";
  const src = "https://picsum.photos/200";
  const screen = render(
    <Pizza name={name} image={src} description="fssfesfe" />,
  );
  const img = await screen.getByRole("img");
  await expect.element(img).toBeInTheDocument();
  await expect.element(img).toHaveAttribute("src", src);
  await expect.element(img).toHaveAttribute("alt", name);
});
