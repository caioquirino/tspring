import {PathParam, RequestMapping, RequestParam, RestController} from "../src"

type Greetings = {
  name: string
}

@RestController()
export class MyController {

  @RequestMapping("/")
  public getGreetings(@RequestParam() name: string): Greetings {
    return  {
      name: "aeae"
    }
  }

  @RequestMapping("/user/{userId}")
  public getUserById(@PathParam() userId: string): Greetings {
    return  {
      name: "aeae"
    }
  }

}

describe("Example", () => {
  it('should work', () => {

  })
})
