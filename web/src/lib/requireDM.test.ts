import { describe, it, expect, vi } from "vitest";
import { requireDM } from "./requireDM";

vi.mock("@/auth", () => ({
  auth: vi.fn(),
}));

import { auth } from "@/auth";

describe("requireDM", () => {
  it("returns false when there is no session", async () => {
    (auth as any).mockResolvedValue(null);
    expect(await requireDM()).toBe(false);
  });

  it("returns false for a PLAYER session", async () => {
    (auth as any).mockResolvedValue({ user: { role: "PLAYER" } });
    expect(await requireDM()).toBe(false);
  });

  it("returns true for a DM session", async() => {
    (auth as any).mockResolvedValue({ user: {role : "DM"} });
    expect(await requireDM()).toBe(true);
  });
});
