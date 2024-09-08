export class Http {
  private BASE_URL: string
  constructor() {
    this.BASE_URL = import.meta.env.VITE_BASE_URL
  }

  public async Get(endpoint: string) {
    try {
      const data = await fetch(`${this.BASE_URL}${endpoint}`)
      const res = await data.json()
      if (data.status != 200) throw res
      return res.data
    } catch (error) {
      throw error
    }
  }

  public async PostJSON(endpoint: string, payload: any) {
    try {
      const data = await fetch(`${this.BASE_URL}${endpoint}`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'content-type': 'application/json'
        }
      })

      const res = await data.json()
      if (data.status !== 201) throw res
      return res
    } catch (error) {
      throw error
    }
  }
}
export default new Http()
