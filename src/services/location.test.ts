import getLocation from "./location"

describe("location", () => {
  describe("getLocation", () => {
    it("returns proper response", async () => {
      const result = await getLocation()

      expect(result).toEqual({
        lat: 60,
        lon: 50,
      })
    })
  })
})
