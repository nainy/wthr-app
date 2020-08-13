type GetLocationResult = {
  lat: number
  lon: number
}

export default function getLocation(): Promise<GetLocationResult> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      resolve({
        lat: coords.latitude,
        lon: coords.longitude,
      })
    }, reject)
  })
}
