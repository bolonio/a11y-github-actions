import React from "react"
import App from "./App"
import { render } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"

expect.extend(toHaveNoViolations)

it("should not have any accessibility violations", async () => {
  const { container } = render(<App />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
