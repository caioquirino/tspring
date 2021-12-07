import {Repository} from "../src/stereotype"
import {Bean, Configuration} from "../src/config"

@Repository()
class MyRepository {
  constructor() {}
}

@Configuration()
class MyConfig {
  @Bean()
  public repo(): MyRepository {
    return new MyRepository()
  }
}

describe("Example", () => {
  it('should work', () => {

  })
})
