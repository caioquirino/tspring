import {Repository, Service} from "../src/stereotype"
import {Autowired, Qualifier} from "../src"

interface MyRepository {

}

@Repository("mysqlDb")
@Autowired()
class MyMysqlRepository implements MyRepository {
  constructor() {

  }
}

@Repository("MaeJoanaDb")
@Autowired()
class MyMaeJoanaRepository implements MyRepository {
  constructor() {

  }
}

@Service()
@Autowired()
class MyService {
  @Qualifier("MaeJoanaDb")
  private repo: MyRepository

  constructor(repo: MyRepository) {
    this.repo = repo
  }
}

describe("Example", () => {
  it('should work', () => {

  })
})
